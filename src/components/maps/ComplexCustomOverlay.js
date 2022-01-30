function ComplexCustomOverlay(point, text, mouseoverText, color) {
    this._point = point;
    this._text = text;
    this._overText = mouseoverText;
    this._color = color;
}

ComplexCustomOverlay.prototype = new BMap.Overlay();
ComplexCustomOverlay.prototype.initialize = function(map) {
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
    div.style.display= "inline-block";
    let span = this._span = document.createElement("span");
    div.appendChild(span);
    span.appendChild(document.createTextNode(this._text));
    
    let arrow = this._arrow = document.createElement("div");
    // arrow.style.background = "url(//map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
    arrow.style.position = "absolute";
    arrow.style.width = "11px";
    arrow.style.height = "10px";
    arrow.style.top = "22px";
    arrow.style.left = "10px";
    arrow.style.overflow = "hidden";
    div.appendChild(arrow);

    let that = this;

    div.onmouseover = function() {
        // this.style.backgroundColor = this._color || "#EBEEF5";
        this.style.borderColor = "#0000FF";
        this.style.height = "125px";
        this.getElementsByTagName("span")[0].innerHTML = that._overText;
        arrow.style.backgroundPosition = "0px +20px";
    }

    div.onmouseout = function() {
        // this.style.backgroundColor = this._color || "#EBEEF5";
        this.style.borderColor = "#BC3B3A";
        this.style.height = "18px";
        this.getElementsByTagName("span")[0].innerHTML = that._text;
        arrow.style.backgroundPosition = "0px 0px";
    }

    this._map.getPanes().labelPane.appendChild(div);

    return div;
}

ComplexCustomOverlay.prototype.draw = function() {
    let map = this._map;
    let pixel = map.pointToOverlayPixel(this._point);
    this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
    this._div.style.top = pixel.y - 30 + "px";
}

export default ComplexCustomOverlay;