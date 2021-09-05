let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;


let imgDino = new Image();
imgDino.src = 'dinosaur.png';

// 공룡 object
let dino = {
    x : 10, //등장할 좌표 x
    y : 200, //등장할 좌표 y
    width : 64, 
    height : 64,
    draw() {
        ctx.fillStyle = 'green';
        // ctx.fillRect(this.x, this.y, this.width, this.height); // hitbox
        ctx.drawImage(imgDino, this.x, this.y);
    }
}

let imgCactus = new Image();
imgCactus.src = 'cactus.png';


// 장애물 object
class Cactus {
    constructor() {
        this.x = 1000;
        this.y = 200;
        this.width = 64;
        this.height = 64;
    }
    draw() {
        ctx.fillStyle = 'red';
        // ctx.fillRect(this.x, this.y, this.width, this.height); // hitbox
        ctx.drawImage(imgCactus, this.x, this.y);
    }
}

let timer = 0;
let cactusArray = [];
let jumpTimer = 0;
let animation;

// 프레임마다 실행할 함수 (1초에 60번 실행 - 실행횟수는 모니터 FPS에 따라 다름)
function createGame() {
    animation = requestAnimationFrame(createGame);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(timer % 120 === 0) { //2초에 한번씩 실행하기 (프레임은 모니터마다 다름)
        let cactus = new Cactus();
        cactusArray.push(cactus); //장애물이 생길때마다 배열에 담아준다.
    }
    cactusArray.forEach((a, i, o) => { //배열에 있던 장애물들을 모두 draw 해준다.
        // x좌표가 0 미만이면 장애물 제거
        if(a.x < 0) {
            o.splice(i,1);
        }
        a.x -= 5;

        isCollipse(dino, a); //충돌체크

        a.draw();
    })

    if(jump == true) { // jump가 true일 때 점프해라
        dino.y -= 5;
        jumpTimer++;
    }
    if (jump == false) {
        if (dino.y < 200) {
            dino.y += 5;
        }
    }
    if (jumpTimer > 30) { // jumpTimer가 30이 넘으면 점프를 중단해라
        jump = false;
        jumpTimer = 0;
    }

    dino.draw();
}
createGame();


// 충돌 확인 (장애물의 x좌표와 dino의 오른쪽 x좌표로 확인)
function isCollipse(dino, cactus) {
    let x축차이 = cactus.x - (dino.x + dino.width);
    let y축차이 = cactus.y - (dino.y + dino.height);
    if (x축차이 < 0 && y축차이 < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animation); // 애니메이션 중지
    }
}


var jump = false;
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
     jump = true;
    }
});