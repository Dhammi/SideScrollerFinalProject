/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 

/// <reference path="../constants.ts" />

module objects {
    // BUTTON CLASS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Button extends objects.GameObject {
        constructor(x:number, y:number, buttonIDString: string) {
            super(buttonIDString);
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }

        public setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        public onButtonOver() {
            this.alpha = 0.8;
        }

        public onButtonOut() {
            this.alpha = 1;
        }
    }
} 