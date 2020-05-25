var GraphViewControl = function(opt_options) {
  var options = opt_options || {};

  var graphView = this._graphView = new ht.graph.GraphView();
  // 设置滚动条是否可见
  graphView.setScrollBarVisible(false);
  // 设置自动滚动区域大小，当鼠标距离拓扑边缘小于这个值时，拓扑自动滚动(调整translateX或translateY)
  graphView.setAutoScrollZone(-1);

  // 处理鼠标滚轮缩放，可重载重新定义缩放逻辑，一般用于禁用缩放
  graphView.handleScroll = function() {};

  // 处理touch上双指操作，可重载重新定义缩放逻辑，一般用于touch上禁用缩放
  graphView.handlePinch = function() {};
  graphView.mi(function(e) {
      // 监听move事件，反填回经纬度
      if (e.kind === 'endMove') {
          graphView.sm().each(function(data) {
              if (data instanceof ht.Node) {
                  var position = data.getPosition(),
                      x = position.x + graphView.tx(),
                      y = position.y + graphView.ty();
                  var coord = map.getCoordinateFromPixel([x, y]);
                  var oldCoord = data.a('coord');
                  if (oldCoord) {
                    oldCoord[0] = coord[0];
                    oldCoord[1] = coord[1];
                    data.a('coord', oldCoord);
                  }
                  else {
                    data.a('coord', coord);
                  }
              }
          });
      }
  });
  var view = graphView.getView();

  ol.control.Control.call(this, {
    element: view,
    target: options.target
  });

  // 拖拽node时不要移动地图
  var stopGraphPropagation = function(e) {
      var data = graphView.getDataAt(e);
      if (data || e.metaKey || e.ctrlKey) {
          e.stopPropagation();
      }
  }
  view.addEventListener('pointerdown', stopGraphPropagation, false);
  view.addEventListener('touchstart', stopGraphPropagation, false);
  view.addEventListener('mousedown', stopGraphPropagation, false);
};

// ol.inherits(GraphViewControl, ol.control.Control);

// var ol_ext_inherits = function(child, parent) {
//   child.prototype = Object.create(parent.prototype);
//   child.prototype.constructor = child;
// };
// ol_ext_inherits(GraphViewControl, ol.control.Control);

if ( ol.control.Control ) GraphViewControl.__proto__ = ol.control.Control;
GraphViewControl.prototype = Object.create( ol.control.Control && ol.control.Control.prototype );
GraphViewControl.prototype.constructor = GraphViewControl;

// 覆盖父类方法，增加一些业务逻辑
GraphViewControl.prototype.setMap = function(map) {
  var self = this;

  // 调用父类方法
  ol.control.Control.prototype.setMap.call(self, map);

  // 设置GraphView样式
  var graphView = self._graphView;
  var view = graphView.getView();
  var dataModel = graphView.getDataModel();
  view.style.top = '0';
  view.style.left = '0';
  view.style.width = '100%';
  view.style.height = '100%';
  // 调整graphView在dom中的位置
  map.getViewport().insertBefore(view, map.getOverlayContainer());

  dataModel.addDataModelChangeListener(function(e) {
      if (e.kind === 'add') {
        var position = map.getPixelFromCoordinate(e.data.a('coord'));
        e.data.setPosition(position[0], position[1]);
      }
  });
  dataModel.addDataPropertyChangeListener(function(e) {
      if (e.property === 'a:coord') {
        var position = map.getPixelFromCoordinate(e.newValue);
        e.data.setPosition(position[0], position[1]);
      }
  });
  // 地图更新时重设拓扑
  map.on('postrender', function() {
    self.resetGraphView();
  });
};

// 获取GraphView对象
GraphViewControl.prototype.getGraphView = function() {
  return this._graphView;
};

GraphViewControl.prototype.resetGraphView = function() {
      var graphView = this._graphView;
      graphView.tx(0);
      graphView.ty(0);
      graphView.dm().each(function(data) {
        var coord = data.a('coord');
          if (coord) {
              var position = map.getPixelFromCoordinate(coord);
              data.setPosition(position[0], position[1]);
          }
      });
      graphView.validate();
}
