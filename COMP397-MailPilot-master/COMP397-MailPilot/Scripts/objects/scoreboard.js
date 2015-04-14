var objects;
(function (objects) {
    // SCOREBOARD CLASS ++++++++++++++++++++++++++++++++++++++++
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++
        function ScoreBoard(game, score, lives) {
            this.score = score;
            this.lives = lives;
            this.active = true;
            this._livesLabel = new createjs.Text("Lives: ", "40px Consolas", "#ffff00");
            game.addChild(this._livesLabel);
            this._scoreLabel = new createjs.Text("Score: ", "40px Consolas", "#ffff00");
            this._scoreLabel.x = 400;
            game.addChild(this._scoreLabel);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        ScoreBoard.prototype.update = function () {
            this._livesLabel.text = "Lives: " + this.lives;
            this._scoreLabel.text = "Score: " + this.score;
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map