'use strict';

console.clear();

// Array

// 1. Decalaration 선언
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['★','●'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0],fruits[1]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]); // 마지막 데이터에 접근 가능하다.

// 3. Looping over an array
// print all fruits
// a. for loop
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
// b. for of
for (let i of fruits){
    console.log(i);
}
// for (let i in fruits){
//     console.log(i);
// }
// c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, deletion, copy
// push : add an item to the end
fruits.push('＠','＆');
console.log(fruits);
// pop : remove an item from the end
fruits.pop(); // 뒤에서 하나씩 삭제함
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('＠','＆');
console.log(fruits);
// shift : remove an item to the beginning
fruits.shift(); //앞에서부터 데이터가 빠지게 된다.
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice :  remove an item by index position
fruits.push('＊','※','■');
console.log(fruits);
// fruits.splice(1);
// fruits.splice(0,1);
console.log(fruits);
fruits.splice(1,1,'▲','◁'); // 1번째에서 1개를 지우고 그 자리에 뒤에 데이터들을 넣어라.
console.log(fruits);

// Combine two arrays
const fruits2 = ['㉾','♬'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// find the index
console.clear();
console.log(fruits);
//indexOf
console.log(fruits.indexOf('★'));
console.log(fruits.indexOf('◁'));
console.log(fruits.indexOf('＃')); //없는값을 출력하면 -1이 나온다.
//includes
console.log(fruits.includes('★')); // true
console.log(fruits.includes('＃')); // false

// lastIndexOF
console.clear();
fruits.push('★');
console.log(fruits);
console.log(fruits.indexOf('★')); //같은 데이터가 두개 이상 있을 때 indexOf는 처음 만나는 것의 인덱스를 출력한다.
console.log(fruits.lastIndexOf('★')); //lastIndexOf는 마지막에 있는 별을 만났을 때 그때의 인덱스가 출력된다.

// Quiz
// 배열 읽어보기