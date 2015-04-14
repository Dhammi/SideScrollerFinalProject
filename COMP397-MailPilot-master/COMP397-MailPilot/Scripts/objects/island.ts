/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 

module objects {
    // ISLAND CLASS
    export class Island extends objects.GameObject{
        
        // CONSTRUCTOR
        constructor() {
            super("island");
            this.sound = "yay";
            this._dx = 5;

            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x -= this._dx;

            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            this.visible = true;
            this.x = 1000 + this.width;
            this.y = Math.floor(Math.random() * 430);
            /*
            this.y = -this.height;
            this.x = Math.floor(Math.random() * 640);
            */
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            if (this.x <= (0- this.width)) {
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