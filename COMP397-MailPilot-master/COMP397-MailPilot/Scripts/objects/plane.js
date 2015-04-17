/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
module objects {
    // PLANE CLASS
    export class Plane extends createjs.Bitmap {
        public width: number;
        public height: number;
        // CONSTRUCTOR
        constructor() {
            
            super(assetLoader.getResult("plane"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.y = 220;
            this.x = 100;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("engine", {loop: -1});
        }

        
        // PUBLIC METHODS
        public update() {
            this.x = stage.mouseX;
            this.y = stage.mouseY;
        }

    }

}
*/
var objects;
(function (objects) {
    // ALLIEN CLASS
    var Plane = (function (_super) {
        __extends(Plane, _super);
        //public bullet: objects.Bullet;
        // CONSTRUCTOR
        function Plane() {
            _super.call(this, assetLoader.getResult("plane"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            //this.x = 50;
            //this.y = 240;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("soundtrack", { loop: -1 });
            this.reset();
            // Set up movement and controls
            //this.assignControls();
        }
        // PUBLIC METHODS
        Plane.prototype.update = function (control) {
            // Return if game currently paused
            //alert(control.down);
            //this.bullet = tmpBullet;
            if (constants.MENU_STATE) {
                this.y = stage.mouseY;
                this.x = stage.mouseX;
            }
            else {
                if (control.down == true && this.y < 400) {
                    //console.log("down");
                    this.y += 7;
                }
                else if (control.up == true && this.y > 30) {
                    //console.log("up");
                    //this.tmpY = this.y;
                    //this.timer = setInterval(function () { this.jump1(this.y) }, 50); 
                    //this.y = this.tmpY;
                    this.y -= 7;
                }
                else if (control.left == true && this.x > 50) {
                    this.x -= 7;
                }
                else if (control.right == true && this.x < 600) {
                    this.x += 7;
                }
            }
        };
        Plane.prototype.reset = function () {
            // reset plane after colliding with enemy
            this.visible = true;
            this.x = -100;
            this.y = 240;
            flagPower = true;
            flagNewPlane = true;
            this.updateNewPlane();
        };
        Plane.prototype.updateNewPlane = function () {
            this.x += 5;
            if (this.x > 100) {
                flagNewPlane = false;
            }
        };
        return Plane;
    })(createjs.Bitmap);
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map