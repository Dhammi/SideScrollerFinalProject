/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // STAGE2 CLASS
    var Stage2 = (function (_super) {
        __extends(Stage2, _super);
        // CONSTRUCTOR
        function Stage2() {
            _super.call(this, assetLoader.getResult("stage2"));
            // PUBLIC INSTANCE VARIABLES
            this._dx = 5;
            flagStage2 = false;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Stage2.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of island to the top
        Stage2.prototype.reset = function () {
            this.x = -50;
            this.y = 0;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Stage2.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x == -8000) {
                //this.reset();
                flagStage2 = true;
            }
        };
        return Stage2;
    })(createjs.Bitmap);
    objects.Stage2 = Stage2;
})(objects || (objects = {}));
//# sourceMappingURL=stage2.js.map