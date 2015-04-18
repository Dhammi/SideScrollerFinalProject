/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // STAGE3 CLASS
    var Stage3 = (function (_super) {
        __extends(Stage3, _super);
        // CONSTRUCTOR
        function Stage3() {
            _super.call(this, assetLoader.getResult("stage3"));
            // PUBLIC INSTANCE VARIABLES
            this._dx = 5;
            flagStage2 = false;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Stage3.prototype.update = function () {
            if (!flagStage3) {
                this.x -= this._dx;
                this._checkBounds();
            }
        };
        // Reset position of island to the top
        Stage3.prototype.reset = function () {
            this.x = -50;
            this.y = 0;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Stage3.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x == -1000) {
                //this.reset();
                flagStage3 = true;
                flagBoss = true;
            }
        };
        return Stage3;
    })(createjs.Bitmap);
    objects.Stage3 = Stage3;
})(objects || (objects = {}));
//# sourceMappingURL=stage3.js.map