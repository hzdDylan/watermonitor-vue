function ComplexCustomOverlay(point, text, infoText, color) {
    this._point = point;
    this._text = text;
    this._infoText = infoText;
    this._color = color;
    this._infoDiv = null;
    // infowindow
    this._infoWindow = createInfoTextContent.call(this);
}

ComplexCustomOverlay.prototype = new BMap.Overlay();
ComplexCustomOverlay.prototype.initialize = function (map) {
    this._map = map;
    let div = this._div = document.createElement("div");

    // 样式
    div.style.position = "absolute";
    div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    div.style.backgroundColor = this._color || "#EBEEF5";
    div.style.border = "1px solid #BC3B3A";
    div.style.color = "white";
    div.style.height = "18px";
    div.style.padding = "2px";
    div.style.lineHeight = "18px";
    div.style.whiteSpace = "nowrap";
    div.style.MozUserSelect = "none";
    div.style.fontSize = "12px";
    div.style.display = "inline-block";
    let span = this._span = document.createElement("span");
    div.appendChild(span);
    span.appendChild(document.createTextNode(this._text));

    let that = this;

    div.onclick = function (e) {
        map.openInfoWindow(that._infoWindow, that._point);

        // 阻止冒泡
        e.stopPropagation();
    }

    this._map.getPanes().labelPane.appendChild(div);

    return div;
}

ComplexCustomOverlay.prototype.draw = function () {
    let map = this._map;
    let pixel = map.pointToOverlayPixel(this._point);
    this._div.style.left = pixel.x - 7.5 + "px";
    this._div.style.top = pixel.y - 30 + "px";
}

function createInfoTextContent() {
    //返回信息窗口内容
    let div = document.createElement("div");

    // 样式
    div.style.position = "absolute";
    // div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
    div.style.backgroundColor = this._color || "#EBEEF5";
    div.style.border = "1px solid #BC3B3A";
    div.style.color = "white";
    div.style.height = "100%";
    div.style.width = "90%";
    div.style.padding = "2px";
    div.style.lineHeight = "18px";
    div.style.whiteSpace = "wrap";
    div.style.MozUserSelect = "none";
    div.style.fontSize = "12px";
    div.style.display = "inline-block";
    div.style.overflow = "auto";
    // 内容
    div.innerHTML = this._infoText;

    // 将div传回构造函数
    this._infoDiv = div;

    // infowindow设置
    const opts = {
        width: 200,     // 信息窗口宽度
        height: 125,     // 信息窗口高度
        offset: new BMap.Size(0, -30)
    };

    return new BMap.InfoWindow(div, opts);
}

class MapHTMLElementSet {
    constructor(point, text, infoText, color) {
        this._point = point;
        this._text = text;
        this._infoText = infoText;
        this._color = color;
        this._div = this.initialize();
    }

    initialize() {
        let div = document.createElement("div");

        // 样式
        div.style.position = "absolute";
        // div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
        div.style.backgroundColor = this._color || "#EBEEF5";
        div.style.border = "1px solid #BC3B3A";
        div.style.color = "white";
        div.style.height = "70%";
        div.style.padding = "2px";
        div.style.lineHeight = "18px";
        div.style.whiteSpace = "wrap";
        div.style.MozUserSelect = "none";
        div.style.fontSize = "12px";
        div.style.display = "inline-block";
        let span = document.createElement("span");
        div.appendChild(span);
        // span.innerHTML = this._infoText;
        span.appendChild(document.createTextNode(this._text));

        let arrow = document.createElement("div");
        arrow.style.position = "absolute";
        arrow.style.width = "11px";
        arrow.style.height = "10px";
        arrow.style.top = "22px";
        arrow.style.left = "10px";
        arrow.style.overflow = "hidden";
        // arrow.style.backgroundPosition = "0px +20px";
        div.appendChild(arrow);

        return div
    }

    getDiv() {
        return this._div;
    }

    setDiv() {

    }
}

export default ComplexCustomOverlay