let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let Ship = function () {
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;
    this.speed = 7;
    this.alive = true;
    this.a = 90/180*Math.PI;
    this.r = SHIP_SIZE/2;
    this.reload = 9;
    this.isShoot = true;
    this.reloadCount = 0;
    this.ammos = [];

    this.draw = function () {
        ctx.strokeStyle = 'white';
        ctx.lineWidth = SHIP_SIZE / 20;
        ctx.beginPath();
        ctx.moveTo(
            this.x + this.r * Math.cos(this.a),
            this.y - this.r * Math.sin(this.a),
        );
        ctx.lineTo(
            this.x - this.r * (Math.cos(this.a) + Math.sin(this.a)),
            this.y + this.r * (Math.sin(this.a) - Math.cos(this.a))
        );
        ctx.lineTo(
            this.x - this.r * (Math.cos(this.a) - Math.sin(this.a)),
            this.y + this.r * (Math.sin(this.a) + Math.cos(this.a))
        );
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = 'red';
        ctx.fillRect(ship.x - 1, ship.y - 1, 2, 2);
    };
    this.collision = function () {
        if(this.x < 0- this.r){
            this.x = canvas.width + this.r;
        }else if(this.x > canvas.width + this.r){
            this.x = 0-this.r;
        }

    };
    this.shoot = function () {
            if (this.isShoot){
                this.reloadCount++;
                if(this.reloadCount>=this.reload){
                    let ammo = new Bullet();
                    this.ammos.push(ammo);
                    this.reloadCount = 0;
                }
            }for(i=0; i<this.ammos.length; i++){
               if(this.ammos[i].y < 0) {
                   this.ammos.splice(i, 1);
                   i--;
               }else {
                   this.ammos[i].draw();
                   this.ammos[i].move();
               }
        }
    }
}