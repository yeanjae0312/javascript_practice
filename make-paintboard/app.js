const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const saveBtn = document.getElementById('jsSave');

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 500;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = 'white';
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWith = 2.5;


let painting = false;
let filling = false;

function startPainting() {
    painting = true;
}

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX; //캔버스 안에서의 좌표를 가져오기 위해 offset사용
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath(); // 하위 경로 목록을 비워 새 경로를 시작
        ctx.moveTo(x, y); // 주어진 좌표로 지정된 지점에서 새로운 하위 경로를 시작
    } else {
        ctx.lineTo(x, y); // 하위 경로의 마지막 지점을 지정된 좌표에 연결하여 현재 하위 경로에 직선을 추가
        ctx.stroke(); // 선의 종류를 지정
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick() {
    if(filling === true) {
        filling = false;
        mode.innerText = 'Paint';
    } else {
        filling = true;
        mode.innerText = 'FILL';
    }
}

function handleCanvasClick() {
    if(filling) {
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
}

function handleCM(event) {
    event.preventDefault(); //마우스 우클릭 안됨 - contextmenu
}

function handleSaveClick(event) {
    const image = canvas.toDataURL('image/png'); // 지정된 형식의 이미지 표현을 포함하는 데이터 URL 타입을 반환
    const link = document.createElement('a');
    link.href = image;
    link.download = 'PaintJS[EXPort]';
    link.click();
}

if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('click',handleCanvasClick);
    canvas.addEventListener('contextmenu', handleCM);
}

Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick));

if(range) {
    range.addEventListener('input', handleRangeChange);
}

if(mode) {
    mode.addEventListener('click',handleModeClick);
}

if(saveBtn) {
    saveBtn.addEventListener('click',handleSaveClick);
}