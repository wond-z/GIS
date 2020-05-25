var CreateEdgeInteractor = function (graphView, edgeType) {
    CreateEdgeInteractor.superClass.constructor.call(this, graphView);                
    this._edgeType = edgeType;
};
ht.Default.def(CreateEdgeInteractor, ht.graph.Interactor, {// 自定义类，继承于 ht.graph.Interactor
    setUp: function () {// 调用此类时触发的函数
        CreateEdgeInteractor.superClass.setUp.call(this); 
        this._autoMakeVisible = this._graphView.isAutoMakeVisible();
        this._graphView.setAutoMakeVisible(true);
        this._graphView.sm().cs();// 清空选中
    },
    tearDown: function () {// 结束调用此类时调用的函数
        CreateEdgeInteractor.superClass.tearDown.call(this);
        this._graphView.setAutoMakeVisible(this._autoMakeVisible);// 设置当选中图元时，是否自动平移拓扑以确保该图元出现在可见区域内

        this._sourceNode = null;
        this._targetNode = null;
        this._logicalPoint = null;
    },    
    handle_mousedown: function (e) {
        this.handle_touchstart(e);
    },
    handle_touchstart: function (e) {// 开始 touch
        this._sourceNode = this.getNodeAt(e);// 获取事件下的节点
        if (this._sourceNode) {
            this._targetNode = null;// 初始化 targetNode 
            this.startDragging(e);// 开始拖拽
            this._graphView.addTopPainter(this);// 增加顶层Painter 使用Canvas的画笔对象自由绘制任意形状，顶层Painter绘制在拓扑最上面
            this._graphView.sm().ss(this._sourceNode);// 设置选中
        }
    },
    getNodeAt: function(e){// 获取事件下的节点
        if (ht.Default.isLeftButton(e) && ht.Default.getTouchCount(e) === 1) {// 鼠标左键被按下 && 当前Touch手指个数为1
            var data = this._graphView.getDataAt(e);// 获取事件下的节点

            if(data instanceof ht.Node) return data;// 为 ht.Node 类型的节点
        } 
        return null;
    },
    handleWindowMouseMove: function (e) {
        this.handleWindowTouchMove(e);
    },
    handleWindowTouchMove: function (e) {// 手指滑动
        var graphView = this._graphView;// 拓扑组件
        this.redraw();// 如果不绘制的话，
        this._logicalPoint = graphView.getLogicalPoint(e);// 获取事件下的逻辑坐标
        this.autoScroll(e);
        this._targetNode = this.getNodeAt(e);// 获取事件下的 edge 的终点

        if (this._targetNode) graphView.sm().ss([this._sourceNode, this._targetNode]);// 设置起始和终止节点都被选中
        else graphView.sm().ss([this._sourceNode]);// 只选中起始节点
    },
    handleWindowMouseUp: function (e) {
        this.handleWindowTouchEnd(e);
    },      
    handleWindowTouchEnd: function (e) {        
        this.redraw();

        if (this._targetNode) {
            var edge = new ht.Edge(this._sourceNode, this._targetNode);// 创建新的连线节点
            if (this._edgeType) edge.s('edge.type', this._edgeType);// 设置连线的类型

            this._graphView.dm().add(edge);// 将节点添加进数据容器
            this._graphView.sm().ss(edge);// 设置选中您当前连线
        }
        editableFunc();// 绘制结束后 工具条选中“编辑”项
        this._graphView.removeTopPainter(this);// 移除顶层画笔
    },
    redraw: function () {
        var p1 = this._sourceNode.getPosition(),// 获取连线起始端的节点的坐标
            p2 = this._logicalPoint;

        if (p1 && p2) {
            var rect = ht.Default.unionPoint(p1, p2);// 将点组合成矩形
            ht.Default.grow(rect, 1);// 改变rect大小，上下左右分别扩展 extend 的大小
            this._graphView.redraw(rect);// 重绘拓扑，rect参数为空时重绘拓扑中的所有图元，否则重绘矩形范围内的图元
        }
    },
    draw: function (g) {// 绘制起点与鼠标移动位置的连线
        var p1 = this._sourceNode.getPosition(),
            p2 = this._logicalPoint;    

        if(p1 && p2){
            g.lineWidth = 1;
            g.strokeStyle = '#1ABC9C';
            g.beginPath();
            g.moveTo(p1.x, p1.y);
            g.lineTo(p2.x, p2.y);
            g.stroke();              
        }
    }           
});
