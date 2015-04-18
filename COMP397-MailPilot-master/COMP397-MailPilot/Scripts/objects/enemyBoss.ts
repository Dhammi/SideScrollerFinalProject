/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 

module objects {
    // ENEMY BOSS PLANE CLASS
    export class EnemyBoss extends objects.GameObject {
        public yFlag: boolean;

        // CONSTRUCTOR
        constructor() {
            super("enemyBoss");
            this.sound = "blast";
            this.yFlag = false;
            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            if (this.yFlag) {
                this.y += 3;
            } else {
                this.y -= 3;
            }

            if (this.y < 150)
                this.yFlag = true;
            if (this.y > 300)
                this.yFlag = false;
            if(this.x>800)
                this.x -= 5;

            //this._checkBounds();
            //this.y += this._dy;
            //this.x -= this._dx;

            //this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            
            this.x = 1250;
            this.y = Math.floor(Math.random() * 400);
            this._dx = Math.floor(Math.random() * 5) + 5;

            this._dy = Math.floor(Math.random() * 5) - 2;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
            /*
            if (this.y >= (480 + this.height)) {
                this.reset();
            }
            */
        }

    }

}    