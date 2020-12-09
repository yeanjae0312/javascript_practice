//Function
//1.Function declaration
// function name(param1, param2) {body... return;}
//one function === one thing 하나의 함수는 한가지 일만 하도록 만들어야 함.
// naming: doSomething, command, verb 이름짓기
// e.b. createCardAndPoint -> createCard, createPoint 합쳐져있는 함수가 있으면 나누는 게 좋다.
// function is object in JS
'use strict';
function pringHello() {
    console.log('hello');
}
pringHello();

function log(message){
    console.log(message);
}
log('hello@');
log(1234); //숫자는 문자열로 변환돼서 출력된다.

//2. Parameters
// premitice parameters : passed by value
// object parameters : passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name:'ellie'};
changeName(ellie);
console.log(ellie);

//3.Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    // if(from === undefined){
    //     from = 'unknown';
    // }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4. Rest parameters (added in ES6) 배열(...)
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){ //for문을 간단하게 쓰는 방법
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg)); //for문을 간단하게 쓰는 방법
}
printAll('dream', 'coding', 'ellie');

// 5.Local scope 지역변수, 전역변수(?)
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    
    function pringAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); // 접근불가능. 오류
}
printMessage();

// 6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.poing > 10){
        //long upgrade logic...
    }
}
// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
}
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// 1.Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expresstion is created when the execution reaches it.
const print = function(){ //anonymous function (이름없는 함수)
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expresstion
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
const printYes = function() { // anonymous function
    console.log('yes');
}
const printNo = function print() { // named function
    console.log('no');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// Arrow function
// always anonymous
const simplePrint = function() {
    console.log('simplePrint');
};
simplePrint();

const simplePrint2 = () => console.log('simplePrint2');
simplePrint2();

const add = (a, b) => {
    // let sum = a + b;
    console.log(a + b);
    return a + b;
};
add(1,3);

// IIFE : Immediately Invoked Function Expresstion
(function hello() {
    console.log('IIFE');
})();

// QUIZ!!
// function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder
function calculate(command, a, b){
    switch(command){
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));

const cal = (command, a, b) => {
    switch(command){
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(cal('divide', 6, 3));