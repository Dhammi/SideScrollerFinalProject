var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Shield = (function (_super) {
    __extends(Shield, _super);
    function Shield(img) {
        _super.call(this, new createjs.SpriteSheet({
            images: [img],
            frames: { width: 96, height: 96 },
            animations: { shield: [0, 19, false, 0.5] }
        }), 'shield');
    }
    Object.defineProperty(Shield.prototype, "LastFrame", {
        get: function () {
            return 19;
        },
        enumerable: true,
        configurable: true
    });
    return Shield;
})(createjs.Sprite);
//# sourceMappingURL=shield.js.map