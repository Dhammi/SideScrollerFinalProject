module objects {
    // SCOREBOARD CLASS ++++++++++++++++++++++++++++++++++++++++
    export class ScoreBoard {
        public score: number;
        public lives: number;
        public active: boolean;
        private _scoreLabel: createjs.Text;
        private _livesLabel: createjs.Text;

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++
        constructor(game: createjs.Container) {
            this.score = 0;
            this.lives = 5;
            this.active = true;

            this._livesLabel = new createjs.Text("Lives: ", "40px Consolas", "#ffff00");
            game.addChild(this._livesLabel);

            this._scoreLabel = new createjs.Text("Score: ", "40px Consolas", "#ffff00");
            this._scoreLabel.x = 400;
            game.addChild(this._scoreLabel);

        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        public update(): void {
            this._livesLabel.text = "Lives: " + this.lives;
            this._scoreLabel.text = "Score: " + this.score;
        }
    }
} 