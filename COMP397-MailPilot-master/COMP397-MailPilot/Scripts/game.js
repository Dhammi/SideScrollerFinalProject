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
var lives = 0;
var gamePlay1Loop = 5;
var flagStage1 = false;
var flagStage2 = false;
var flagStage3 = false;
var flagNewPlane = true;
var flagPower = true;
var flagBoss = false;
// Game State Variables
var currentState;
var currentStateFunction;
var stateChanged = false;
var gamePlay1;
var gamePlay2;
var gamePlay3;
var gameOver;
var gamePlay1Over;
var gamePlay2Over;
var gamePlay3Over;
var menu;
var instructions;
var manifest = [
    { id: "cloud", src: "assets/images/asteroids.png" },
    { id: "island", src: "assets/images/planet.png" },
    { id: "ocean", src: "assets/images/space.png" },
    { id: "rocket", src: "assets/images/rocket.png" },
    { id: "enemyRocket", src: "assets/images/enemyRocket.png" },
    { id: "enemyPlane1", src: "assets/images/enemyPlane1.png" },
    { id: "enemyPlane2", src: "assets/images/enemyPlane2.png" },
    { id: "enemyBoss", src: "assets/images/enemyBoss.png" },
    { id: "explosionOriginal", src: "assets/images/ExplosionSpriteSheet.png" },
    { id: "shieldSpriteSheet", src: "assets/images/shieldSpriteSheet.png" },
    { id: "stage1", src: "assets/images/stage1.png" },
    { id: "stage2", src: "assets/images/stage1.png" },
    { id: "stage3", src: "assets/images/stage1.png" },
    { id: "plane", src: "assets/images/playership.png" },
    { id: "playButton", src: "assets/images/labelPlayGame.png" },
    { id: "tryAgainButton", src: "assets/images/labelPlayAgain.png" },
    { id: "instructionsLogo", src: "assets/images/labelInstructions.png" },
    { id: "instruction", src: "assets/images/instructions.png" },
    { id: "powership", src: "assets/images/powership.png" },
    { id: "powerPlanet", src: "assets/images/powerPlanet.png" },
    { id: "labelStage2Start", src: "assets/images/labelStage2.png" },
    { id: "labelStage3Start", src: "assets/images/labelStage3.png" },
    { id: "engine", src: "assets/audio/star.ogg" },
    { id: "yay", src: "assets/audio/powerup.wav" },
    { id: "thunder", src: "assets/audio/collision.wav" },
    { id: "tFont", src: "assets/fonts/TransformersMovie.ttf" },
    { id: "blast", src: "assets/audio/Blast.mp3" }
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
            gamePlay1 = new states.GamePlay1();
            currentStateFunction = gamePlay1;
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
        case constants.GAME_PLAY_2:
            // instantiate game play 2 screen
            gamePlay2 = new states.GamePlay2();
            currentStateFunction = gamePlay2;
            break;
        case constants.GAME_PLAY_2_OVER:
            // instantiate game play 2 over screen
            gamePlay2Over = new states.GamePlay2Over();
            currentStateFunction = gamePlay2Over;
            break;
        case constants.GAME_PLAY_3:
            // instantiate game play 3 screen
            gamePlay3 = new states.GamePlay3();
            currentStateFunction = gamePlay3;
            break;
        case constants.GAME_PLAY_3_OVER:
            // instantiate game play 3 over screen
            gamePlay3Over = new states.GamePlay3Over();
            currentStateFunction = gamePlay3Over;
            break;
    }
}
//# sourceMappingURL=game.js.map