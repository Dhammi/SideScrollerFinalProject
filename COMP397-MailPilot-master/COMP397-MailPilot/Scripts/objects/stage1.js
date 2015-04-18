/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // OCEAN CLASS
    var Stage1 = (function (_super) {
        __extends(Stage1, _super);
        // CONSTRUCTOR
        function Stage1() {
            _super.call(this, assetLoader.getResult("stage1"));
            // PUBLIC INSTANCE VARIABLES
            this._dx = 5;
            flagStage1 = false;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Stage1.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of island to the top
        Stage1.prototype.reset = function () {
            this.x = -50;
            this.y = 0;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Stage1.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x == -100) {
                //this.reset();
                flagStage1 = true;
            }
        };
        return Stage1;
    })(createjs.Bitmap);
    objects.Stage1 = Stage1;
})(objects || (objects = {}));
//# sourceMappingURL=stage1.js.map