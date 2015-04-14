var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ROCKET CLASS
    var Rocket = (function (_super) {
        __extends(Rocket, _super);
        // CONSTRUCTOR
        function Rocket(planeX, planeY) {
            _super.call(this, "rocket");
            this.sound = "yay";
            this._dx = 5;
            this.x = planeX + this.width;
            this.y = planeY + 20;
            //this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Rocket.prototype.update = function () {
            //alert(plane);
            this.x += this._dx;
            //this.planeX = tmpPlaneX;
            //this.planeY = tmpPlaneY;
            //this._checkBounds();
        };
        // Reset position of island to the top
        Rocket.prototype.reset = function () {
            //alert("planeX"+this.planeX);
            //alert("planeY"+this.planeY);
            this.visible = false;
            this.x = this.planeX + this.width;
            this.y = this.planeY + 35; //Math.floor(Math.random() * 430);
            /*
            this.y = -this.height;
            this.x = Math.floor(Math.random() * 640);
            */
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Rocket.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x >= (1000 + this.width)) {
                this.reset();
            }
            /*
            if (this.y >= (480 + this.height)) {
                this.reset();
            }
            */
        };
        return Rocket;
    })(objects.GameObject);
    objects.Rocket = Rocket;
})(objects || (objects = {}));
//# sourceMappingURL=rocket.js.map