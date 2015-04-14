/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 
 
/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/label.ts" />
/*
module states {

    export class GamePlay1 {
        // Game Objects 
        public game: createjs.Container;
        public scoreboard: objects.ScoreBoard;
        public plane: objects.Plane;
        public island: objects.Island;
        public powerPlanet: objects.PowerPlanet;
        public clouds: objects.Cloud[] = [];
        public ocean: objects.Ocean;

        public shield: boolean = false;

        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();


            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            //Island object
            this.island = new objects.Island();
            this.game.addChild(this.island);

            //power planet object
            this.powerPlanet = new objects.PowerPlanet();
            this.game.addChild(this.powerPlanet);

            //Plane object
            this.plane = new objects.Plane();
            this.game.addChild(this.plane);

            //Cloud object
            for (var cloud = 2; cloud >= 0; cloud--) {
                this.clouds[cloud] = new objects.Cloud();
                this.game.addChild(this.clouds[cloud]);
            }
            


            // Instantiate Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor


        // DISTANCE CHECKING METHOD
        public distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        } //Distance Method

        // CHECK COLLISION METHOD
        public checkCollision(collider: objects.GameObject) {
            if (this.scoreboard.active) {
                var planePosition: createjs.Point = new createjs.Point(this.plane.x, this.plane.y);
                var objectPosition: createjs.Point = new createjs.Point(collider.x, collider.y);
                var theDistance = this.distance(planePosition, objectPosition);
                if (theDistance < ((this.plane.height * 0.5) + (collider.height * 0.5))) {
                    if (collider.isColliding != true) {
                        createjs.Sound.play(collider.sound);
                        if (collider.name == "cloud") {
                            this.scoreboard.lives--;
                        }
                        if (collider.name == "island") {
                            this.scoreboard.score += 100;
                            this.island.visible = false;
                            
                        }

                        if (collider.name == "powerPlanet") {
                            this.scoreboard.lives++;
                            this.powerPlanet.visible = false;

                        }
                    }
                    collider.isColliding = true;
                } else {
                    collider.isColliding = false;
                }
            }
        } // checkCollision Method

        public update() {

            this.ocean.update();

            this.island.update();

            this.powerPlanet.update();

            this.plane.update();

            for (var cloud = 2; cloud >= 0; cloud--) {
                this.clouds[cloud].update();

                this.checkCollision(this.clouds[cloud]);
            }



            this.checkCollision(this.island);
            this.checkCollision(this.powerPlanet);

            this.scoreboard.update();

            if (this.scoreboard.lives < 1) {
                this.scoreboard.active = false;
                createjs.Sound.stop();
                currentScore = this.scoreboard.score;
                if (currentScore > highScore) {
                    highScore = currentScore;
                }
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }

            stage.update(); // Refreshes our stage

        } // Update Method

    } // GamePlay Class


} // States Module



*/



module states {

    export class GamePlay1 {
        // Game Objects 
        public game: createjs.Container;
        public scoreboard: objects.ScoreBoard;
        public plane: objects.Plane;
        public island: objects.Island;
        //public bullet: objects.Bullet[] = [];
        public powerPlanet: objects.PowerPlanet;
        public clouds: objects.Cloud[] = [];
        public stage1: objects.Stage1;
        public flagBullet: boolean = false;
        public shield: boolean = false;
        public flagRepeat: number;
        public timer: number;

        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            this.flagRepeat = 0;
            

            //Stage1 background object
            this.stage1 = new objects.Stage1();
            this.game.addChild(this.stage1);

            //Island object
            this.island = new objects.Island();
            this.game.addChild(this.island);


            //power planet object
            this.powerPlanet = new objects.PowerPlanet();
            this.game.addChild(this.powerPlanet);

            //Plane object
            this.plane = new objects.Plane();
            this.game.addChild(this.plane);
            /*
            //Bullet object
            this.bullet = new objects.Bullet();
            this.game.addChild(this.bullet);
            this.bullet.visible = false;
            */

            //Cloud object
            for (var cloud = 2; cloud >= 0; cloud--) {
                this.clouds[cloud] = new objects.Cloud();
                this.game.addChild(this.clouds[cloud]);
            }
            


            // Instantiate Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game, 0, 3);

            // Add Game Container to Stage
            stage.addChild(this.game);

            this.assignControls();
        } // Constructor


        // DISTANCE CHECKING METHOD
        public distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        } //Distance Method

        // CHECK COLLISION METHOD
        public checkCollision(collider: objects.GameObject) {
            if (this.scoreboard.active) {
                var planePosition: createjs.Point = new createjs.Point(this.plane.x, this.plane.y);

                var objectPosition: createjs.Point = new createjs.Point(collider.x, collider.y);
                var theDistance = this.distance(planePosition, objectPosition);
                if (theDistance < ((this.plane.height * 0.5) + (collider.height * 0.5))) {
                    if (collider.isColliding != true) {
                        createjs.Sound.play(collider.sound);
                        if (collider.name == "cloud") {
                            this.scoreboard.lives--;
                        }

                        if (collider.name == "island") {
                            this.scoreboard.score += 100;
                            this.island.visible = false;

                        }

                        if (collider.name == "powerPlanet") {
                            this.scoreboard.lives++;
                            this.powerPlanet.visible = false;

                        }
                    }
                    collider.isColliding = true;
                } else {
                    collider.isColliding = false;
                }
            }
        } // checkCollision Method




        // CHECK COLLISION WITH ENEMY METHOD
        public checkCollisionWithEnemy(collider: objects.GameObject) {
            if (this.scoreboard.active) {
                for (var cloud = 2; cloud >= 0; cloud--) {
                    var cloudPosition: createjs.Point = new createjs.Point(this.clouds[cloud].x, this.clouds[cloud].y);

                    var objectPosition: createjs.Point = new createjs.Point(collider.x, collider.y);
                    var theDistance = this.distance(cloudPosition, objectPosition);
                    if (theDistance < ((this.clouds[cloud].height * 0.5) + (collider.height * 0.5))) {
                        if (collider.isColliding != true) {
                            createjs.Sound.play(collider.sound);
                            //Write code here for collossion of rocket with enemy.
                        }
                        collider.isColliding = true;
                    } else {
                        collider.isColliding = false;
                    }
                }
            }
        } // checkCollisionWithEnemy Method



        public update() {
            
            this.stage1.update();

            this.island.update();
            //alert("y" +this.plane.y);
            //this.bullet.update(this.plane.x,this.plane.y);

            this.powerPlanet.update();

            this.plane.update(controls);
            

            //spacebar firing start
            /*
            if (controls.spacebar == true) {
                if (this.flagRepeat == 0) {
                    console.log("spacebar");
                    this.bullet.push(new objects.Bullet(this.plane.x, this.plane.y));
                    this.game.addChild(this.bullet[this.bullet.length - 1]);
                    this.flagBullet = true;
 
                    this.flagRepeat = 1;
                }
                else if (this.flagRepeat > 30) {
                    this.flagRepeat = 0;
                }
                else
                    this.flagRepeat++;
            }
 
            if (controls.spacebar == false && this.flagRepeat < 30) {
                this.flagRepeat++;
            }
 
            if (this.flagBullet) {
                for (var i = 0; i < this.bullet.length; i++) {
                    this.bullet[i].update();
                    this.checkCollisionWithEnemy(this.bullet[i]);
                }
            }
            //spacebar firing end
            */
            //this.plane.update(this.bullet);

            for (var cloud = 2; cloud >= 0; cloud--) {
                this.clouds[cloud].update();

                this.checkCollision(this.clouds[cloud]);
            }



            this.checkCollision(this.island);
            this.checkCollision(this.powerPlanet);


            this.scoreboard.update();
            /*
            if (this.scoreboard.score == 200) {
                createjs.Sound.stop();
                currentScore = this.scoreboard.score;
                if (currentScore > highScore) {
                    highScore = currentScore;
                }
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.GAME_PLAY_1_OVER;
                stateChanged = true;
            }
            */

            //stage 1 complete
            if (flagStage1) {
                createjs.Sound.stop();
                currentScore = this.scoreboard.score;
                lives = this.scoreboard.lives;
                if (currentScore > highScore) {
                    highScore = currentScore;
                }
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.GAME_PLAY_1_OVER;
                stateChanged = true;
            }

            if (this.scoreboard.lives < 1) {
                this.scoreboard.active = false;
                createjs.Sound.stop();
                currentScore = this.scoreboard.score;
                if (currentScore > highScore) {
                    highScore = currentScore;
                }
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }

            stage.update(); // Refreshes our stage
        
        } // Update Method



        assignControls() {
            // Binds key actions
            window.onkeydown = this.onControlDown;
            window.onkeyup = this.onControlUp;
        }

        public onControlDown(e) {
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

        public timeLoop() {
            
            //alert(this.flagRepeat);
            this.flagRepeat++;
            alert(this.flagRepeat);
            if (this.flagRepeat == 1) {
                alert(this.flagRepeat);
                clearInterval(this.timer);
                this.flagRepeat = 0;
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
                    this.flagRepeat = 0;
                    break;
            }
        }

    } // GamePlay Class


} // States Module