let Bullet = function () {
    this.x = ship.x - 2 + ship.r * Math.cos(ship.a);
    this.y = ship.y - 2 - ship.r * Math.sin(ship.a);
    this.speed = 4;
    this.draw = function () {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, BULLET_HEIGHT, BULLET_WIDTH)
    };
    this.move = function () {
        this.y -= this.speed;
    }
}