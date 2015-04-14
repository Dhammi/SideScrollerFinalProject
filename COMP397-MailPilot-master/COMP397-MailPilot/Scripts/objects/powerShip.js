var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // PLANE CLASS
    var PowerShip = (function (_super) {
        __extends(PowerShip, _super);
        // CONSTRUCTOR
        function PowerShip() {
            _super.call(this, assetLoader.getResult("powerShip"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.y = 220;
            this.x = 100;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("engine", { loop: -1 });
        }
        // PUBLIC METHODS
        PowerShip.prototype.update = function () {
            this.x = stage.mouseX;
            this.y = stage.mouseY;
        };
        return PowerShip;
    })(createjs.Bitmap);
    objects.PowerShip = PowerShip;
})(objects || (objects = {}));
//# sourceMappingURL=powerShip.js.map