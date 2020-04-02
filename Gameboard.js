let gameBoard = function () {
    this.score = 0;
    this.control = function () {
        document.addEventListener('keydown',function (evt) {
            switch (evt.keyCode) {
                case 37:
                    ship.x -= ship.speed;
                    break;
                case 38:
                    ship.shoot();
                    break;
                case 39:
                    ship.x += ship.speed;
                    break;
            }
        })
    };
    this.guide = function () {
        ctx.font = "30px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText('Press Enter to start',200,350);
    };
    this.ballCrash = function (ball,ammo) {
        let leftBall = ball.x - ball.radius;
        let rightBall = ball.x + ball.radius;
        let topBall = ball.y - ball.radius;
        let bottomBall = ball.y + ball.radius;
        let leftAmmo = ammo.x - 2.5;
        let rightAmmo = ammo.x + 2.5;
        let topAmmo = ammo.y - 2.5;
        let bottomAmmo = ammo.y + 2.5;
        if (rightBall < leftAmmo || bottomBall < topAmmo || leftBall > rightAmmo || topBall > bottomAmmo) {
            return false;
        } else {
            return true;
        }
   } ;
    this.shipCrash = function (ship,ball) {
        let leftBall = ball.x - ball.radius;
        let rightBall = ball.x + ball.radius;
        let topBall = ball.y - ball.radius;
        let bottomBall = ball.y + ball.radius;
        let leftShip = ship.x - ship.r;
        let rightShip = ship.x + ship.r;
        let topShip = ship.y - ship.r;
        let bottomShip = ship.y + ship.r;
        if((bottomShip < topBall) || (topShip > bottomBall) || (rightShip < leftBall) || (leftShip > rightBall)){
            return false;
        } else {
            return true;
        }
    };
    this.checkBallCrash = function () {
        for (i=0; i<balls.length; i++){
            for( j=0; j<ship.ammos.length; j++){
                if(this.ballCrash(balls[i],ship.ammos[j])){
                    balls[i].alive = false;
                    ship.ammos.splice(j,1);
                }
            }if(!balls[i].alive){
                balls.splice(i,1);
                this.score ++;
            }
        }
    };
    this.checkShipCrash = function () {
        for(i=0; i<balls.length; i++) {
            if (this.shipCrash(ship, balls[i])) {
                ship.alive = false;
                balls[i].alive = false;
            }
        }
    };
    this.drawScore = function () {
        ctx.font = "30px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText('Score: '+ this.score,30,30);
    };
    this.start = function () {
        clear();
        this.control();
        ship.draw();
        ship.collision();
        createMultiBall();
        displayBall();
    }
};