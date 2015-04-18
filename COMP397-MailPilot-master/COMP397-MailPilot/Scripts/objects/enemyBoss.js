/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ENEMY BOSS PLANE CLASS
    var EnemyBoss = (function (_super) {
        __extends(EnemyBoss, _super);
        // CONSTRUCTOR
        function EnemyBoss() {
            _super.call(this, "enemyBoss");
            this.sound = "blast";
            this.yFlag = false;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        EnemyBoss.prototype.update = function () {
            this.visible = true;
            if (this.yFlag) {
                this.y += 3;
            }
            else {
                this.y -= 3;
            }
            if (this.y < 150)
                this.yFlag = true;
            if (this.y > 300)
                this.yFlag = false;
            if (this.x > 800)
                this.x -= 5;
            //this._checkBounds();
            //this.y += this._dy;
            //this.x -= this._dx;
            //this._checkBounds();
        };
        // Reset position of island to the top
        EnemyBoss.prototype.reset = function () {
            this.x = 1250;
            this.y = Math.floor(Math.random() * 400);
            this._dx = Math.floor(Math.random() * 5) + 5;
            this._dy = Math.floor(Math.random() * 5) - 2;
            this.visible = false;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        EnemyBoss.prototype._checkBounds = function () {
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
        return EnemyBoss;
    })(objects.GameObject);
    objects.EnemyBoss = EnemyBoss;
})(objects || (objects = {}));
//# sourceMappingURL=enemyBoss.js.map