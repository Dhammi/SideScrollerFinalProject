/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 
/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="constants.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="states/gameplay1.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/menu.ts" />
// Global game Variables
var canvas;
var stage;
var assetLoader;
var stats = new Stats();
var currentScore = 0;
var highScore = 0;
var gamePlay1Loop = 5;
// Game State Variables
var currentState;
var currentStateFunction;
var stateChanged = false;
var gamePlay;
var gameOver;
var gamePlay1Over;
var menu;
var instructions;
var manifest = [
    { id: "cloud", src: "assets/images/asteroids.png" },
    { id: "island", src: "assets/images/planet.png" },
    { id: "ocean", src: "assets/images/space.png" },
    { id: "plane", src: "assets/images/playership.png" },
    { id: "playButton", src: "assets/images/playGameButton.png" },
    { id: "tryAgainButton", src: "assets/images/playAgainButton.png" },
    { id: "instructionsLogo", src: "assets/images/instructionsLogo.png" },
    { id: "instruction", src: "assets/images/instructions.png" },
    { id: "powership", src: "assets/images/powership.png" },
    { id: "powerPlanet", src: "assets/images/powerPlanet.png" },
    { id: "engine", src: "assets/audio/star.ogg" },
    { id: "yay", src: "assets/audio/powerup.wav" },
    { id: "thunder", src: "assets/audio/collision.wav" }
];
function Preload() {
    assetLoader = new createjs.LoadQueue(); // create a new preloader
    assetLoader.installPlugin(createjs.Sound); // need plugin for sounds
    assetLoader.on("complete", init, this); // when assets finished preloading - then init function
    assetLoader.loadManifest(manifest);
}
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();
    currentState = constants.MENU_STATE;
    changeState(currentState);
}
function setupStats() {
    stats.setMode(0);
    // align top-left
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '450px';
    document.body.appendChild(stats.domElement);
}
function gameLoop() {
    stats.begin();
    if (stateChanged) {
        changeState(currentState);
        stateChanged = false;
    }
    else {
        currentStateFunction.update();
    }
    stats.end();
}
function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            menu = new states.Menu();
            currentStateFunction = menu;
            break;
        case constants.INSTRUCTIONS_STATE:
            //instantiate instructions screen
            instructions = new states.Instructions();
            currentStateFunction = instructions;
            break;
        case constants.GAME_PLAY_1:
            // instantiate game play screen
            gamePlay = new states.GamePlay1();
            currentStateFunction = gamePlay;
            break;
        case constants.GAME_OVER_STATE:
            // instantiate game over screen
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;
        case constants.GAME_PLAY_1_OVER:
            // instantiate game over screen
            gamePlay1Over = new states.GamePlay1Over();
            currentStateFunction = gamePlay1Over;
            break;
    }
}
//# sourceMappingURL=game.js.map