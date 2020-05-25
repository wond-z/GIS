/**
* 1. 增加了测量的功能
* 2. 编辑shape类的点的时候，公里数是会发生变化的。未做
**/

var GraphViewControl = function(opt_options) {
    var options = opt_options || {};

    var graphView = this._graphView = new ht.graph.GraphView();// 拓扑图组件
    graphView.setScrollBarVisible(false);// 设置滚动条是否可见
    graphView.setAutoScrollZone(-1);// 设置自动滚动区域大小，当鼠标距离拓扑边缘小于这个值时，拓扑自动滚动
    graphView.setPannable(false);// 设置不可通过鼠标拖拽进行平移操作
    graphView.setRectSelectable(false);// 设置不可框选
    graphView.handleScroll = function() {};// 重载 handleScroll 函数
    graphView.handlePinch = function() {};// 重载 handlePinch 函数

    //创建一个 div 显示节点的经纬度坐标
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.background = 'rgba(255, 255, 255, 0.75)';
    document.addEventListener('mousemove', function(event) {// 监听鼠标移动事件，此时在鼠标下方添加一个 div 用来显示节点的经纬度坐标
        var e = event || window.event;
        div.style.left = (e.clientX - 240) + 'px';
        div.style.top = (e.clientY - 30) + 'px';
    });

    graphView.mi(function(e) {// 监听鼠标事件
        // 监听 move 和 edit 事件反填回经纬度
        graphView.sm().each(function(data) {// 遍历选中节点
            if (data instanceof ht.Edge) return;
      
            if ( e.kind === 'beginMove' || e.kind === 'betweenMove' || e.kind === 'endMove' ||
                e.kind === 'prepareEdit'|| e.kind === 'endEditRotation' ||
                e.kind === 'beginEditResize' || e.kind === 'betweenEditResize' || e.kind === 'endEditResize' ) {
                
                var position = data.getPosition(),// 获取选中节点的坐标
                    x = position.x + graphView.tx(),// 节点横坐标+graphView水平平移值
                    y = position.y + graphView.ty();// 节点纵坐标+graphView垂直平移值

                var coord = map.getCoordinateFromPixel([x, y]);// 根据坐标的像素获取地图视图投影中的坐标
                data.a('coord', coord);

                var lonLat = ol.proj.toLonLat(data.a('coord'));// 将地图视图投影中的坐标转为经纬度坐标
                div.innerHTML = 'Lon: ' + lonLat[0] + '<br/>Lat: ' + lonLat[1];

                if (e.kind === 'beginMove' || e.kind === 'betweenMove' || 
                    e.kind === 'betweenEditResize' || e.kind === 'prepareEdit') {
                    graphView.getView().appendChild(div);// 开始 move/edit 事件后添加 div
                }

                // 实时更新矩形属性栏的位置
                if (!(data instanceof ht.Shape)) {
                    var newPopover = data._popover.tableLayout;
                    newPopover._getData = data;

                    var preferredSize = newPopover.getPreferredSize();
                    newPopover.setWidth(preferredSize.width);
                    newPopover.setHeight(preferredSize.height);

                    data._rect = getScreenRect(graphView, data, preferredSize);
                    newPopover.getView().style.left = data._rect.x + 'px';
                    newPopover.getView().style.top = data._rect.y + 'px';
                    newPopover.getView().style.display = 'block';

                    newPopover._form.setItem('lon', lonLat[0]);
                    newPopover._form.setItem('lat', lonLat[1]);
                }

                if (e.kind === 'endMove' || e.kind === 'endEditResize' || e.kind === 'endEditRotation') {
                    graphView.getView().removeChild(div);// 结束 move/edit 事件后删除 div

                    if (newPopover) {
                        document.addEventListener('mousemove', function(e) {
                            var gNode = graphView.getDataAt(e);
                            if (!gNode) newPopover.getView().style.display = 'none';
                        })
                    }
                }
            }

            // 给 shape 类型的节点的每个点位置都设置为经纬度
            if (e.kind === 'endEditPoint' || e.kind === 'endEditPoints' || e.kind === 'endEditResize' || e.kind === 'endMove') {
                if (data instanceof ht.Shape) {
                    if (data.getPoints().size() === 2) {// shape 为编辑状态时，若只剩两个点，默认是边框的
                        data.s({
                            'shape.border.width': 1,
                            'shape.border.color': 'rgb(236,86,97)'
                        });
                    }
                    data.getPoints().toArray().forEach(function(point, index) {
                        var pointCoord = map.getCoordinateFromPixel([point.x, point.y]);// 获取给定像素的坐标
                        data.a('pointCoord['+index+']', pointCoord);
                    });
                }
            }
        });
    });

    var view = graphView.getView();// 获取拓扑组件的 div
    ol.control.Control.call(this, {
        element: view,// 控件的容器元素
        target: options.target// 将控件渲染到地图的视口之外
    });

    // 拖拽 node 时不移动地图
    var stopGraphPropagation = function(e) {
        var data = graphView.getDataAt(e);// 获取 graphView 事件下的节点
        var interaction = graphView.getEditInteractor();// 获取编辑交互器
        if (data || e.metaKey || e.ctrlKey || interaction && interaction.gvEditing) {
            e.stopPropagation();// 不再派发事件 该方法将停止事件的传播，阻止它被分派到其他 Document 节点
        }
    }

    /** pointerdown 当指针变为活动事件
    *    对于鼠标，当设备从按下的按钮转换到至少一个按钮被按下时，它会被触发。
    *    对于触摸，当与数字化仪进行物理接触时会被触发。
    *    对于笔，当触笔与数字化仪进行物理接触时会被触发。
    **/
    view.addEventListener('pointerdown', stopGraphPropagation, false);
    view.addEventListener('touchstart', stopGraphPropagation, false);// 当触摸点被放置在触控面板上事件
    view.addEventListener('mousedown', stopGraphPropagation, false);// 鼠标点下事件
};

// ol.inherits(GraphViewControl, ol.control.Control);// 将原型方法从 ol.control.Control 构造函数继承到 GraphViewControl 构造函数。
if ( ol.control.Control ) GraphViewControl.__proto__ = ol.control.Control;
GraphViewControl.prototype = Object.create( ol.control.Control && ol.control.Control.prototype );
GraphViewControl.prototype.constructor = GraphViewControl;


// 覆盖父类方法，增加一些业务逻辑
GraphViewControl.prototype.setMap = function(map) {// 重载 setMap 方法
    var self = this;

    // 调用父类方法
    ol.control.Control.prototype.setMap.call(self, map);

    // 设置graphView样式
    var graphView = self._graphView;// = GraphViewControl.getGraphView()
    var view = graphView.getView();// 获取 graphView 组件的 div
    var dataModel = graphView.getDataModel();// 获取 graphView 的数据容器
    view.style.top = '0';
    view.style.left = '0';
    view.style.width = '100%';
    view.style.height = '100%';
    
    map.getViewport().insertBefore(view, map.getViewport().firstChild);// getViewPort 获取用作地图视口的元素 insertBefore 在指定的已有子节点(参数二)之前插入新的子节点(参数一)

    dataModel.addDataModelChangeListener(function(e) {// 数据容器增删改查变化监听
        if (e.kind === 'add' && !(e.data instanceof ht.Edge)) {// 添加事件&&事件对象不是 ht.Edge 类型
            if (e.data instanceof ht.Node) {
                var position = e.data.getPosition();
                var coordPosition = map.getCoordinateFromPixel([position.x, position.y]);// 获取给定像素的坐标
                e.data.a('coord', coordPosition);
            }

            if (e.data instanceof ht.Shape) {// 给 shape 类型的节点上的每个点都设置经纬度
                e.data.getPoints().toArray().forEach(function(point, index) {// 对 shape 类型的节点则将所有点的坐标都转为经纬度
                    var pointCoord = map.getCoordinateFromPixel([point.x, point.y]);// 获取给定像素的坐标
                    e.data.a('pointCoord['+index+']', pointCoord);
                });
            }
        }
        if (e.kind === 'remove') {
            if (e.data._popover) e.data._popover.tableLayout.getView().style.display = 'none';// 移除节点的同时也要将节点上方的属性栏隐藏
        }
    });

    // 地图更新时重设拓扑
    map.on('postrender', function() { self.resetGraphView(); });
};

// 获取GraphView对象
GraphViewControl.prototype.getGraphView = function() { return this._graphView; };

GraphViewControl.prototype.resetGraphView = function() {// 重置 graphView 组件的状态
    var graphView = this._graphView;
    graphView.tx(0);// grpahView 水平平移值
    graphView.ty(0);// graphView 垂直平移值

    graphView.dm().each(function(data) {// 遍历 graphView 中的数据容器 
        var coord = data.a('coord');// 获取节点的业务属性 coord
        if (coord) {
            var position = map.getPixelFromCoordinate(coord);// 获取给定坐标的像素
            data.setPosition(position[0], position[1]);// 重新给节点设置像素坐标
        }
        if (data instanceof ht.Shape) {
            var points = data.getPoints().toArray();// 构建一个新的Shape点集合并返回
            data.getPoints().clear();// 清空点集合
            data._points = new ht.List();

            points.forEach(function(point, index) {// 给 shape 重新设置每一个点的像素坐标
                point.x = map.getPixelFromCoordinate(data.a('pointCoord['+ index +']'))[0];
                point.y = map.getPixelFromCoordinate(data.a('pointCoord['+ index +']'))[1];
                data._points.add(point);
            });

            data.setPoints(data._points);
        }
    });

    graphView.validate();//刷新拓扑组件
}