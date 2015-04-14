var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // LABEL Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Logo = (function (_super) {
        __extends(Logo, _super);
        function Logo(x, y, labelText) {
            _super.call(this, labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.regX = this.getMeasuredWidth() * 0.5;
            this.regY = this.getMeasuredHeight() * 0.5;
            this.x = x;
            this.y = y;
        }
        return Logo;
    })(createjs.Text);
    objects.Logo = Logo;
})(objects || (objects = {}));
//# sourceMappingURL=logo.js.map