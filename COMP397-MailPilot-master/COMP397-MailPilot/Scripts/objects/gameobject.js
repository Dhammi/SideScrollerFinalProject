var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // GAMEOBJECT CLASS
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        // CONSTRUCTOR
        function GameObject(assetString) {
            _super.call(this, assetLoader.getResult(assetString));
            this.isColliding = false;
            this.name = assetString;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
        return GameObject;
    })(createjs.Bitmap);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map