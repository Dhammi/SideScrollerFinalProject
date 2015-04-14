/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 


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