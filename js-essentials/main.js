import randomNum from './getRandom';

// 산술 연산자(arithmetic operator)

console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(5 / 2)
console.log(5 % 7)

// 할당 연산자(assignment operator)
const a = 2
let b = 3
b += 1

console.log(b);

// 비교 연산자(comparison operator)
const aa = 1
const bb = 1
// console.log(aa === bb)
// console.log(aa !== b)

function isEqual(x, y) {
    return x === y
}

console.log(isEqual(1, 1));
console.log(isEqual(2, '2'));

// 논리 연산자(logical operator)
const aaa = 1 === 1
const bbb = 'AB' === 'ABC'
const ccc = true

console.log(aaa);
console.log(bbb);
console.log(ccc);

console.log('&&: ',aaa && bbb && ccc);
console.log('||: ',aaa || bbb || ccc);
console.log('!: ',!aaa );

// 삼항 연산자(ternary operator)
const aaaa  = 1 < 2
if (aaaa) {
    console.log('참');
} else {
    console.log('거짓');
}

console.log(aaaa ? '참' : '거짓');

// 조건문 (if statement)
// console.log(randomNum());
const num = randomNum()
if(num === 0) {
    console.log('a is 0');
} else if(num === 2) {
    console.log('a is 2');
} else {
    console.log('rest...');
}

switch (num) {
    case 0:
        console.log('a is 0');
        break
    case 2:
        console.log('a is 2');
        break
    default:
        console.log('rest...');
}

// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}
const ulEl = document.querySelector('ul')
for (let i = 0; i < 10; i += 1) {
    const li = document.createElement('li')
    li.textContent = `list-${i + 1}`
    if((i + 1) % 2 === 0) {
        li.addEventListener('click', function() {
            console.log(li.textContent);
        })
    }
    ulEl.appendChild(li)
}

// 변수 유효범위(Variable Scope)
// var, let, const
// let, const는 블록레벨의 유효범위를 가짐
// var는 함수범위의 유효범위를 가짐

function scope() {
    console.log(valScope);
    if(true) {
        var valScope = 123
        // let valScope = 123
        // const valScope = 123
    }
}
scope()

// 형 변환(Type conversion)
// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

if(0) {
    console.log(123);
}
