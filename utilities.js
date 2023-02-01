
// var grass = '../img/grass.png';
function animate(){
    ctx1.clearRect(0,0, canvas.width, canvas.height);
    ctx2.clearRect(0,0, canvas.width, canvas.height); 
    ctx3.clearRect(0,0, canvas.width, canvas.height);
    ctx4.clearRect(0,0, canvas.width, canvas.height);
    ctx5.clearRect(0,0, canvas.width, canvas.height);
   
    // ctx2.drawImages=(background_lvl2,0,0,canvas.width, canvas.height);
    handleParticles();
    frogger.draw()
    frogger.update();

 
   handlescoreBoard();
  
    handleRipples();
    handleObstacles();
    ctx4.drawImage(grass,0,0,canvas.width, canvas.height);
    frame++;
    requestAnimationFrame(animate);

    
}
this.animate();

//event listner for keyboard keys
window.addEventListener('keydown', function(e){
    keys=[];
    keys[e.keyCode] = true;
    if(keys[37] || keys[38] || keys[39] || keys[40]){
        frogger.jump();

    }
});

window.addEventListener('keyup', function(e){
    delete keys[e.keyCode];
    frogger.moving= false;
    frogger.frameX=0;
});

function scored(){
    score++;
    gameSpeed+=0.05;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height- 40;
}

function handlescoreBoard(){
    ctx4.fillStyle="black";
    ctx4.strokeStyle = "black";
    ctx4.font="20px Verdana";
    ctx4.strokeText('Score', 265,15)
    ctx4.font ='60px Verdana';
    ctx4.fillText(score,270,65);
    ctx4.font="15px Verdana"
    ctx4.strokeText('Collisions:' + collisionsCount,10,175);
    ctx4.strokeText('game speed:' + gameSpeed.toFixed(1),10,195)
}

function Collision(first, second){
    return !( first.x > second.x  + second.width || first.x + first.width < second.x|| first.y>second.y + second.height|| first.y+ first.height < second.y);
}
function resetGame(){
    score=0;
    gameSpeed=1;
    collisionsCount++;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height- 40;

}