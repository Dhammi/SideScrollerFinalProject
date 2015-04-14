/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ISLAND CLASS
    var Island = (function (_super) {
        __extends(Island, _super);
        // CONSTRUCTOR
        function Island() {
            _super.call(this, "island");
            this.sound = "yay";
            this._dx = 5;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Island.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of island to the top
        Island.prototype.reset = function () {
            this.visible = true;
            this.x = 1000 + this.width;
            this.y = Math.floor(Math.random() * 430);
            /*
            this.y = -this.height;
            this.x = Math.floor(Math.random() * 640);
            */
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Island.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
            /*
            if (this.y >= (480 + this.height)) {
                this.reset();
            }
            */
        };
        return Island;
    })(objects.GameObject);
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map