/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 

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


module objects {
    // ALLIEN CLASS
    export class Plane extends createjs.Bitmap {
        public width: number;
        public height: number;
        public tmpY: number;
        public timer: number;

        //public bullet: objects.Bullet;

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("plane"));

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
        public update(control) {
            // Return if game currently paused
            //alert(control.down);
            //this.bullet = tmpBullet;
            
            if (constants.MENU_STATE) {
                this.y = stage.mouseY;
                this.x = stage.mouseX;
            } else {

                if (control.down == true && this.y < 400) {
                    //console.log("down");
                    this.y += 7;
                } else if (control.up == true && this.y > 30) {
                    //console.log("up");
                    //this.tmpY = this.y;
                    //this.timer = setInterval(function () { this.jump1(this.y) }, 50); 
                    //this.y = this.tmpY;
                    this.y -= 7;
                } else if (control.left == true && this.x > 50) {
                    this.x -= 7;
                } else if (control.right == true && this.x < 600) {
                    this.x += 7;
                }


                /*else if (controls.spacebar == true) {
                    this.bullet.visible = true;
                    //this.bullet.reset();
                }
                */
            }
        }

        public reset() {
            // reset plane after colliding with enemy
            this.visible = true;
            this.x = -100;
            this.y = 240;
            flagPower = true;
            flagNewPlane = true;
            this.updateNewPlane();
        }

        public updateNewPlane() {
            this.x += 5;
            if (this.x > 100) {
                flagNewPlane = false;
            }
        }

        

        /*
        jump1(P) {
            alert("tmpY before: " + this.tmpY);
            this.tmpY = P - 5;
            alert("tmpY after: " + this.tmpY);
            if (this.tmpY<100) {
                alert("tmpY 50: " + this.tmpY);
                clearInterval(this.timer);
                alert("clear");
            }
            alert("last");
        }

        jump2(P) {
            this.tmpY = P + 10;
            alert();
        }
        */


        /*
        assignControls() {
            // Binds key actions
            window.onkeydown = this.onControlDown;
            window.onkeyup = this.onControlUp;
        }
        
        onControlDown(e) {
            // Basic switch statement to set
            // our controls to true onKeyDown
            switch (e.which) {
                case keys.LEFT:
                case keys.A:
                    controls.left = true;
                    controls.lTally++;
                    controls.rTally = 0;
                    break;
                case keys.RIGHT:
                case keys.D:
                    controls.right = true;
                    controls.rTally++;
                    controls.lTally = 0;
                    break;

                case keys.UP:
                case keys.W:
                    controls.up = true;
                    controls.rTally++;
                    controls.lTally = 0;
                    break;

                case keys.DOWN:
                case keys.S:
                    controls.down = true;
                    controls.rTally++;
                    controls.lTally = 0;
                    break;
                case keys.SPACEBAR:
                    controls.spacebar = true;
                    controls.rTally++;
                    controls.lTally = 0;
                    break;

            }
        }

        onControlUp(e) {
            // Basic switch statement to set
            // our controls to true onKeyUp
            switch (e.which) {
                case keys.LEFT:
                case keys.A:
                    controls.left = false;
                    break;
                case keys.RIGHT:
                case keys.D:
                    controls.right = false;
                    break;
                case keys.W:
                case keys.UP:
                    controls.up = false;
                    break;
                case keys.S:
                case keys.DOWN:
                    controls.down = false;
                    break;
                case keys.SPACEBAR:
                    controls.spacebar = false;
                    break;
            }
        }
        */
    }

}