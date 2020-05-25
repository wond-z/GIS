var CreateShapeInteractor = function (graphView) {
    CreateShapeInteractor.superClass.constructor.call(this, graphView);
    this._points = new ht.List();
    this._onBackgroundDoubleClicked = this._graphView.onBackgroundDoubleClicked;
};
ht.Default.def(CreateShapeInteractor, ht.graph.Interactor, {
    setUp: function () {// 调用此类时触发的函数
        CreateShapeInteractor.superClass.setUp.call(this);
        this._graphView.addTopPainter(this);// 增加顶层Painter 可以使用Canvas的画笔对象自由绘制任意形状，顶层Painter绘制在拓扑最上面
        this._graphView.onBackgroundDoubleClicked = function(){};// 重载 双击拓扑背景时回调

        map.getInteractions().forEach(function(element) { element.setActive(false)});// 设置 map 的交互都为 false

        this._graphView.sm().cs();// 不选中任何一个图元

        pointNumber = 0;
        timer = null;
    },
    tearDown: function () {// 结束调用此类时调用的函数
        CreateShapeInteractor.superClass.tearDown.call(this);
        this._graphView.removeTopPainter(this);// 删除顶层Painter
        this._graphView.onBackgroundDoubleClicked = this._onBackgroundDoubleClicked;
    
        this._points.clear();// 清除所有的点
        this._movePoint = null;// 清除所有中间鼠标移动创建的点
        lineLength = 0;

        map.getInteractions().forEach(function(element) { element.setActive(true)});// 设置 map 的交互都为 true
    },
    handle_mousedown: function (e) {
        this.handle_touchstart(e);
    },
    handle_touchstart: function (e) {
        this.isLeftClick = ht.Default.isLeftButton(e) && ht.Default.getTouchCount(e) === 1;// 鼠标左键被按下 && 当前Touch手指个数为1
    },    
    handle_mouseup: function (e) {
        this.handle_touchend(e);
    },
    handle_touchend: function (e) {
        var graphView = this._graphView;

        /**
        * pan 通过鼠标拖拽进行平移操作
        * pinch 通过触屏进行双指缩放
        **/
        if (graphView._panning || graphView._pinching || !this.isLeftClick) return;
            
        this.redraw();
        if (ht.Default.isDoubleClick(e)) {// 判断是否双击
            clearTimeout(timer);
            if (this._points.size() > 1) {
                var shape = new ht.Shape();// 创建一个 shape 类型的节点
                shape.setPoints(this._points);// 设置 shape 的 points

                if(this._points.size() === 2) {// 只有两个点的时候给节点设置 border
                    shape.s({
                        'shape.border.width': 1,
                        'shape.border.color': 'rgb(236,86,97)'
                    })
                }
                else shape.s('shape.background', 'rgba(236,86,97,0.4)');

                graphView.dm().add(shape);
                graphView.sm().ss(shape);

                editableFunc();// 双击结束编辑点后直接选中导航栏中的“编辑”
            }
            else this._points.clear();
        }
        else {// 由于刚开始就做了 “panning、pinching” 就返回，所以现在只剩下 单击事件了
            var lp = this._graphView.lp(e);
            this._points.add(lp);// 将单击的点添加进 points 中
        }
    },
    handle_mousemove: function (e) {// 鼠标移动
        var lp = this._graphView.lp(e);

        this.redraw();// 每移动鼠标，都要重新绘制鼠标到上一点的连线
        this.autoScroll(e);
        this._movePoint = this._graphView.lp(e);// movePoint 为当前鼠标移动事件下逻辑坐标
    },                      
    redraw: function(){        
        var points = this._points;
        if(points.size() === 0) return;

        if(this._movePoint){
            points = new ht.List(points);
            points.add(this._movePoint);
        }

        var rect = ht.Default.unionPoint(points);// 将点组合成矩形
        if (rect) {
            ht.Default.grow(rect, 5);// 改变rect大小，上下左右分别扩展extend的大小
            this._graphView.redraw(rect);// 重绘拓扑，rect参数为空时重绘拓扑中的所有图元，否则重绘矩形范围内的图元
        }
    },
    draw: function (g) {// canvas绘制鼠标左键点击的“小圆圈”， 以及鼠标移动时的每一点和上一点之间的连线
        var size = this._points.size();
        if (size === 0) return;

        var point = this._points.get(0);
        g.lineWidth = 1;
        g.strokeStyle = 'rgb(236,86,97)';
        g.beginPath();
        g.moveTo(point.x, point.y);

        for (var i=0; i<size; i++) {
            point = this._points.get(i);
            g.lineTo(point.x, point.y);
        }

        if (this._movePoint) g.lineTo(this._movePoint.x, this._movePoint.y); 
        g.stroke();  
        
        for(i=0; i<size; i++){// canvas绘制点的圆圈，以及点和点之间的连线
            point = this._points.get(i);
            g.fillStyle = 'white';
            g.strokeStyle = 'rgb(236,86,97)';
            g.lineWidth = 1;
            g.beginPath();
            g.arc(point.x, point.y, 4, 0, Math.PI * 2, true);
            g.fill();
            g.stroke();
        }                            
    }               
});
