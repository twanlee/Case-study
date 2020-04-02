function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
let ship = new Ship();
let game = new gameBoard();
let ball = new Ball();
game.start();
game.control();
game.drawScore();
