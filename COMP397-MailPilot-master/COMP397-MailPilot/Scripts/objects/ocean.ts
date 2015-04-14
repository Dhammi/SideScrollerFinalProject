/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 

module objects {
    // OCEAN CLASS
    export class Ocean extends createjs.Bitmap {
        // PUBLIC INSTANCE VARIABLES
        private _dx: number = 5;

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("ocean"));

            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x -= this._dx;

            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            this.x = -50;
            this.y = 0;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            if (this.x == -900) {
                //alert(currentState);
                if (currentState = constants.GAME_PLAY_1) {
                    //alert(gamePlay1Loop);
                    gamePlay1Loop--;
                    //alert(gamePlay1Loop);
                }
                this.reset();
            }
        }

    }

}  