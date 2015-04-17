var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ENEMY ROCKET CLASS
    var EnemyRocket = (function (_super) {
        __extends(EnemyRocket, _super);
        // CONSTRUCTOR
        function EnemyRocket(enemyPlaneX, enemyPlaneY) {
            _super.call(this, "enemyRocket");
            this.sound = "yay";
            this._dx = 5;
            this.x = enemyPlaneX + this.width;
            this.y = enemyPlaneY;
            //this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        EnemyRocket.prototype.update = function () {
            //alert(plane);
            this.x -= 10;
            //this.planeX = tmpPlaneX;
            //this.planeY = tmpPlaneY;
            //this._checkBounds();
        };
        // Reset position of island to the top
        EnemyRocket.prototype.reset = function () {
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
        EnemyRocket.prototype._checkBounds = function () {
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
        return EnemyRocket;
    })(objects.GameObject);
    objects.EnemyRocket = EnemyRocket;
})(objects || (objects = {}));
//# sourceMappingURL=enemyRocket.js.map