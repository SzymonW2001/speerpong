


let ball = document.getElementById("ball")
let gameWindow = document.querySelector(".pole")
let velocity = 7

let velocityLeft = 8
let velocityTop = 8
function update(time){
    velocity+=0.001
    window.requestAnimationFrame(update)
    let playerPosition = player.getBoundingClientRect();



    let random = Math.floor(Math.random() * (4)) + velocity
    let ballPosition = ball.getBoundingClientRect()
    let gameWindowPosition = gameWindow.getBoundingClientRect()
    ball.style.left=ballPosition.left + velocityLeft + "px"
    ball.style.top=ballPosition.top + velocityTop + "px"


    let computer = document.getElementById("computer")
    computer.style.top=ballPosition.top - 50 + "px"
    let computerPosition = document.getElementById("computer").getBoundingClientRect();


    ////////////////////////////////208
    if(ballPosition.bottom>gameWindowPosition.bottom){
        velocityTop=-random
    }
    if(ballPosition.right+30>gameWindowPosition.right ){
        velocityLeft=-random
    }
    if(ballPosition.top<gameWindowPosition.top){
        velocityTop=random
    }
    if(ballPosition.left-30<playerPosition.left && ballPosition.bottom<playerPosition.bottom+50 && ballPosition.top+50>playerPosition.top){
        velocityLeft=random
    }
    if(ballPosition.left<gameWindowPosition.left){
        alert("dupa")
        location.reload(true)
    }


}
window.requestAnimationFrame(update)

document.onkeydown = checkKey;

function checkKey(e) {
    let player = document.getElementById("player");
    let playerPosition = player.getBoundingClientRect().top;

    e = e || window.event;

    if (e.keyCode == '38') {
        console.log(playerPosition)
        player.style.top=playerPosition + -30 + "px"


    }
    else if (e.keyCode == '40') {
        console.log(playerPosition)
        player.style.top=playerPosition + 30 + "px"
    }
}