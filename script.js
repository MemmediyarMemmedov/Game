let ball = document.getElementById("ball");
let bar = document.getElementById("bar");
let scor = document.getElementById("score");

let barX = 0;
let ballX = 0;
let ballY = 0;
let score = 0;
let speedX = 3;
let speedY = 3;
let dx = 3;
let dy = 3;

let interval = setInterval(ballMove, 40);


function ballMove() {
    if (ballX < 0 || ballX > 750) { dx *= -1; }
    if (ballY < 0 || ballY >= 530) { dy *= -1; }

    if (ballY >= 530) {
        if (ballX > (barX - 50) && ballX < (barX + 100)) {
            score++;
            scor.innerHTML = "Score:" + score;

            if (score % 2 == 0) {
                speedY++;
                speedX++;
            } else if (score >= 25) {
                speedY += 2;
                speedX += 2;

            }

        } else {
            clearInterval(interval);
            alert("Uduzdun");
            location.reload();
        }
    }





    ballX += Math.floor(dx * speedX) / 3;
    ballY += Math.floor(dy * speedY) / 3;


    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";

}






function barMove() {
    bar.style.left = barX + "px";
}

addEventListener("keypress", function(event) {

    let key = event.key;
    if (key == "a" || key == "A") {
        if (barX > 0) { barX -= 10; }
    }

    if (key == "d" || key == "D") {
        if (barX < 700) { barX += 10; }
    }

    barMove();
});


document.getElementById("game").addEventListener("mousemove", function(event) {
    if (event.offsetX < 700) {
        barX = event.offsetX;

        bar.style.left = event.offsetX + 'px';

    }


});