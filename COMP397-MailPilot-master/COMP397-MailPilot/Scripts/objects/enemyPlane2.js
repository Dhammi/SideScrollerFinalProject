/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ENEMY PLANE 2 CLASS
    var EnemyPlane2 = (function (_super) {
        __extends(EnemyPlane2, _super);
        // CONSTRUCTOR
        function EnemyPlane2() {
            _super.call(this, "enemyPlane2");
            this.sound = "blast";
            this.reset();
            this.yFlag = false;
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        EnemyPlane2.prototype.update = function () {
            //console.log(this.y);
            if (this.yFlag) {
                this.y += 5;
            }
            else {
                this.y -= 5;
            }
            if (this.y < 50)
                this.yFlag = true;
            if (this.y > 380)
                this.yFlag = false;
            this.x -= 5;
            this._checkBounds();
        };
        // Reset position of island to the top
        EnemyPlane2.prototype.reset = function () {
            /*
            this.y = -this.height;
            this.x = Math.floor(Math.random() * 640);
            this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = Math.floor(Math.random() * 4) - 2;
            */
            this.visible = true;
            this.x = 1050;
            this.y = Math.floor(Math.random() * 400);
            this._dx = Math.floor(Math.random() * 5) + 5;
            this._dy = Math.floor(Math.random() * 5) - 2;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        EnemyPlane2.prototype._checkBounds = function () {
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
        return EnemyPlane2;
    })(objects.GameObject);
    objects.EnemyPlane2 = EnemyPlane2;
})(objects || (objects = {}));
//# sourceMappingURL=enemyPlane2.js.map