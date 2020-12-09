// 1. String concatenation (+)
console.log('my'+' cat');
console.log('1'+2);
console.log(`string literals:
''
1 + 2 = ${1 + 2}`);

console.log('ellie\'s \n \t book');

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operatiors (++, --)
let counter = 2;
const preIncrement = ++counter;
//counter = counter+1;
//preIncrement = counter;
console.log(`preIncrement = ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter+1;
console.log(`postIncrement = ${postIncrement}, counter: ${counter}`);

// preDecrement, postDecrement (--counter, counter--)


// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;


// 5. Comparison operators(비교)
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or)
console.log(`or: ${value1 || value2 || check()}`); //처음이 true면 바로 멈춘다.
function check(){
    for(let i = 0; i < 10; i++){
        console.log(`dd`);
    }
    return true;
}

// &&(and)
console.log(`and: ${value1 && value2 && check()}`); //처음이 false면 바로 멈춘다.
function check(){
    for(let i = 0; i < 10; i++){
        console.log(`dd`);
    }
    return true;
}
// often used to comperss long if-statement
// nullableObject && nullableObject.something
// if(nullableObject != null){
//     nullableObject.something;
// }

// !(not)
console.log(!value1);

// 7. Equality (==)
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators : if
// if, else if, else
const name = 'ellie';
if(name === 'ellie'){
    console.log('Welcome, Ellie!');
}else if(name === 'coder'){
    console.log('You ar amazing coder');
}else{
    console.log('unknown');
}

// 9. Ternary operator : ?
// condition ? value1 : value2
console.log(name === 'ellie' ? 'yes':'no');

// 10. Switch statement
const browser = 'Chrome';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;

    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;

    default:
        console.log('same all');
        break;
}

// 11. Loops
// while
let i = 3;
while (i>0){
    console.log(`while: ${i}`);
    i--;
}
//do while
do{
    console.log(`do while: ${i}`);
    i--;
}while(i>0);
//for
for(i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}
for(let i = 3; i > 0; i = i -2){
    console.log(`inline variable for: ${i}`);
}
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

//break, continue

//Q1
for(let i = 0; i<=10; i++){
    if(i%2 == 1){
        continue;
    }
    console.log(`Q1: ${i}`);
}
//Q2
for(let i = 0; i<=10; i++){
    if(i > 8){
        break;
    }
    console.log(`Q2 : ${i}`);
}