/// Vineet Dhammi | 300808585 | Last Modified: 20/03/2015 
/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    var GamePlay3 = (function () {
        function GamePlay3() {
            this.rocket = [];
            this.enemyRocket = [];
            this.clouds = [];
            this.flagRocket = false; //used to set delay between 2 rockets
            this.shield = false;
            this.explosions = [];
            // Instantiate Game Container
            this.game = new createjs.Container();
            this.flagRepeat = 0;
            //flagNewPlane = true;
            //Stage2 background
            this.stage3 = new objects.Stage3();
            this.game.addChild(this.stage3);
            //Island object
            this.island = new objects.Island();
            this.game.addChild(this.island);
            //power planet object
            this.powerPlanet = new objects.PowerPlanet();
            this.game.addChild(this.powerPlanet);
            //Plane object
            this.plane = new objects.Plane();
            this.game.addChild(this.plane);
            for (var cloud = 2; cloud >= 0; cloud--) {
                this.clouds[cloud] = new objects.Cloud();
                this.game.addChild(this.clouds[cloud]);
            }
            //Enemy plane 1 object
            this.enemyPlane1 = new objects.EnemyPlane1();
            this.game.addChild(this.enemyPlane1);
            //Enemy plane 2 object
            this.enemyPlane2 = new objects.EnemyPlane2();
            this.game.addChild(this.enemyPlane2);
            this.enemyBoss = new objects.EnemyBoss();
            this.game.addChild(this.enemyBoss);
            // Instantiate Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game, currentScore, lives);
            this.explosionImg = assetLoader.getResult('explosionOriginal');
            // Add Game Container to Stage
            stage.addChild(this.game);
            this.assignControls();
        } // Constructor
        // DISTANCE CHECKING METHOD
        GamePlay3.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }; //Distance Method
        // CHECK COLLISION METHOD
        GamePlay3.prototype.checkCollision = function (collider) {
            if (this.scoreboard.active) {
                var planePosition = new createjs.Point(this.plane.x, this.plane.y);
                var objectPosition = new createjs.Point(collider.x, collider.y);
                var theDistance = this.distance(planePosition, objectPosition);
                if (theDistance < ((this.plane.height * 0.5) + (collider.height * 0.5))) {
                    if (collider.isColliding != true) {
                        if (collider.name == "cloud") {
                            if (flagPower)
                                flagPower = false;
                            else {
                                createjs.Sound.play(collider.sound);
                                this.scoreboard.lives--;
                                //show explosion
                                //alert("");
                                var explosion = new Explosion(this.explosionImg);
                                explosion.x = this.plane.x;
                                explosion.y = this.plane.y;
                                this.plane.reset();
                                //alert(explosion.x);
                                this.explosions.push(explosion);
                                this.game.addChild(explosion);
                            }
                        }
                        if (collider.name == "island") {
                            createjs.Sound.play(collider.sound);
                            this.scoreboard.score += 100;
                            this.island.visible = false;
                        }
                        if (collider.name == "powerPlanet") {
                            createjs.Sound.play(collider.sound);
                            flagPower = true;
                            this.powerPlanet.visible = false;
                        }
                        if (collider.name == "enemyPlane1" && this.enemyPlane1.visible) {
                            if (flagPower)
                                flagPower = false;
                            else {
                                createjs.Sound.play(collider.sound);
                                //show explosion
                                this.scoreboard.lives--;
                                var explosion = new Explosion(this.explosionImg);
                                explosion.x = this.plane.x;
                                explosion.y = this.plane.y;
                                this.enemyPlane1.visible = false;
                                this.plane.reset();
                                this.explosions.push(explosion);
                                this.game.addChild(explosion);
                            }
                        }
                        if (collider.name == "enemyPlane2" && this.enemyPlane2.visible) {
                            if (flagPower)
                                flagPower = false;
                            else {
                                //show explosion
                                createjs.Sound.play(collider.sound);
                                this.scoreboard.lives--;
                                var explosion = new Explosion(this.explosionImg);
                                explosion.x = this.plane.x;
                                explosion.y = this.plane.y;
                                this.enemyPlane2.visible = false;
                                this.plane.reset();
                                this.explosions.push(explosion);
                                this.game.addChild(explosion);
                            }
                        }
                    }
                    collider.isColliding = true;
                }
                else {
                    collider.isColliding = false;
                }
            }
        }; // checkCollision Method
        // CHECK COLLISION OF ROCKET WITH ENEMY PLANE METHOD
        GamePlay3.prototype.checkRocketCollisionWithEnemyPlane = function (collider) {
            if (this.scoreboard.active) {
                for (var tmpRocket = 0; tmpRocket < this.rocket.length; tmpRocket++) {
                    if (collider.visible) {
                        var rocketFire = new createjs.Point(this.rocket[tmpRocket].x, this.rocket[tmpRocket].y);
                        var objectPosition = new createjs.Point(collider.x, collider.y);
                        var theDistance = this.distance(rocketFire, objectPosition);
                        if (theDistance < ((this.rocket[tmpRocket].height * 0.5) + (collider.height * 0.5))) {
                            if (collider.isColliding != true) {
                                createjs.Sound.play(collider.sound);
                                this.scoreboard.score += 200;
                                //Write code here for collossion of rocket with enemy.
                                collider.visible = false;
                                var explosion = new Explosion(this.explosionImg);
                                explosion.x = this.rocket[tmpRocket].x;
                                explosion.y = this.rocket[tmpRocket].y - 20;
                                this.game.removeChild(this.rocket[tmpRocket]);
                                //var index = this.rocket.indexOf(thtmpRocket);
                                this.rocket.splice(tmpRocket, 1);
                                //alert(explosion.x);
                                this.explosions.push(explosion);
                                this.game.addChild(explosion);
                            }
                            collider.isColliding = true;
                        }
                        else {
                            collider.isColliding = false;
                        }
                    }
                }
            }
        }; // checkCollision of rocket With Enemy plane Method
        // CHECK PLANE COLLISION OF WITH ENEMY ROCKET METHOD
        GamePlay3.prototype.checkPlaneCollisionWithEnemyRocket = function (collider) {
            if (this.scoreboard.active) {
                for (var tmpRocket = 0; tmpRocket < this.enemyRocket.length; tmpRocket++) {
                    if (collider.visible) {
                        var rocketFire = new createjs.Point(this.enemyRocket[tmpRocket].x, this.enemyRocket[tmpRocket].y);
                        var objectPosition = new createjs.Point(collider.x, collider.y);
                        var theDistance = this.distance(rocketFire, objectPosition);
                        if (theDistance < ((this.enemyRocket[tmpRocket].height * 0.5) + (collider.height * 0.5))) {
                            if (collider.isColliding != true) {
                                if (flagPower)
                                    flagPower = false;
                                else {
                                    //show explosion
                                    createjs.Sound.play(collider.sound);
                                    this.scoreboard.lives--;
                                    var explosion = new Explosion(this.explosionImg);
                                    explosion.x = this.plane.x;
                                    explosion.y = this.plane.y;
                                    this.enemyPlane2.visible = false;
                                    this.plane.reset();
                                    this.game.removeChild(this.enemyRocket[tmpRocket]);
                                    this.enemyRocket.splice(tmpRocket, 1);
                                    this.explosions.push(explosion);
                                    this.game.addChild(explosion);
                                }
                            }
                            collider.isColliding = true;
                        }
                        else {
                            collider.isColliding = false;
                        }
                    }
                }
            }
        }; // checkCollisionWithEnemy Method
        GamePlay3.prototype.update = function () {
            //stage 3 loop finish show boss and remove astroids and enemy planes
            if (flagStage3) {
                this.game.removeChild(this.enemyPlane1);
                this.game.removeChild(this.enemyPlane2);
                this.island.update();
                this.powerPlanet.update();
                if (flagNewPlane)
                    this.plane.updateNewPlane();
                else
                    this.plane.update(controls);
                if (controls.spacebar == true) {
                    if (this.flagRepeat == 0) {
                        this.rocket.push(new objects.Rocket(this.plane.x, this.plane.y));
                        this.game.addChild(this.rocket[this.rocket.length - 1]);
                        this.flagRocket = true;
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
                if (this.flagRocket) {
                    for (var i = 0; i < this.rocket.length; i++) {
                        this.rocket[i].update();
                    }
                }
                for (var cloud = 2; cloud >= 0; cloud--) {
                    this.game.removeChild(this.clouds[cloud]);
                }
                this.checkCollision(this.island);
                this.checkCollision(this.powerPlanet);
                //show enemy boss
                this.enemyBoss.update();
                stage.update();
            }
            else {
                this.stage3.update();
                this.island.update();
                //alert("y" +this.plane.y);
                //this.bullet.update(this.plane.x,this.plane.y);
                this.powerPlanet.update();
                if (flagNewPlane)
                    this.plane.updateNewPlane();
                else
                    this.plane.update(controls);
                //spacebar firing start
                if (controls.spacebar == true) {
                    if (this.flagRepeat == 0) {
                        this.rocket.push(new objects.Rocket(this.plane.x, this.plane.y));
                        this.game.addChild(this.rocket[this.rocket.length - 1]);
                        this.flagRocket = true;
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
                if (this.flagRocket) {
                    for (var i = 0; i < this.rocket.length; i++) {
                        this.rocket[i].update();
                    }
                }
                //enemy rocket firing at random number
                if (this.enemyPlane2.visible) {
                    var x = Math.floor((Math.random() * 100) + 1);
                    if (x == 1) {
                        this.enemyRocket.push(new objects.EnemyRocket(this.enemyPlane2.x, this.enemyPlane2.y));
                        this.game.addChild(this.enemyRocket[this.enemyRocket.length - 1]);
                    }
                }
                if (this.enemyPlane1.visible) {
                    if (x == 15) {
                        this.enemyRocket.push(new objects.EnemyRocket(this.enemyPlane1.x, this.enemyPlane1.y));
                        this.game.addChild(this.enemyRocket[this.enemyRocket.length - 1]);
                    }
                }
                for (var i = 0; i < this.enemyRocket.length; i++) {
                    this.enemyRocket[i].update();
                }
                for (var cloud = 2; cloud >= 0; cloud--) {
                    this.clouds[cloud].update();
                    this.checkCollision(this.clouds[cloud]);
                }
                this.enemyPlane1.update();
                this.enemyPlane2.update();
                this.checkRocketCollisionWithEnemyPlane(this.enemyPlane1);
                this.checkRocketCollisionWithEnemyPlane(this.enemyPlane2);
                this.checkCollision(this.island);
                this.checkCollision(this.powerPlanet);
                this.checkCollision(this.enemyPlane1);
                this.checkCollision(this.enemyPlane2);
                this.scoreboard.update();
                //stage3 complete
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
                for (var i = 0; i < this.explosions.length; i++) {
                    var explosion = this.explosions[i];
                    if (explosion.currentAnimationFrame == explosion.LastFrame) {
                        this.removeElement(explosion, this.explosions);
                    }
                }
                stage.update(); // Refreshes our stage
            }
        }; // Update Method
        GamePlay3.prototype.removeElement = function (el, arr) {
            this.game.removeChild(el);
            var index = arr.indexOf(el);
            arr.splice(index, 1);
        };
        GamePlay3.prototype.assignControls = function () {
            // Binds key actions
            window.onkeydown = this.onControlDown;
            window.onkeyup = this.onControlUp;
        };
        GamePlay3.prototype.onControlDown = function (e) {
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
        };
        GamePlay3.prototype.timeLoop = function () {
            //alert(this.flagRepeat);
            this.flagRepeat++;
            //alert(this.flagRepeat);
            if (this.flagRepeat == 1) {
                //  alert(this.flagRepeat);
                clearInterval(this.timer);
                this.flagRepeat = 0;
            }
        };
        GamePlay3.prototype.onControlUp = function (e) {
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
        };
        return GamePlay3;
    })();
    states.GamePlay3 = GamePlay3; // GamePlay Class
})(states || (states = {})); // States Module  
//# sourceMappingURL=gamePlay3.js.map