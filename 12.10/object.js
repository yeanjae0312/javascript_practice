'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = {key : value}; object는 key와 value의 집합체이다.

// 1. Literals and properties
const name = 'ellie';
const age = 4;
print(name, age);
function print(name, age){
    console.log(name);
    console.log(age);
}

const obj1 = {} //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax
function print1(person){
    console.log(person.name);
    console.log(person.age);
}
const ellie = {name: 'ellie', age: 4}; // new가 없어도 object를 만들 수 있다.
print1(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties 계산된 프로퍼티
// key should be always string 키는 string('')타입으로 지정해서 받아와야 한다.
console.log(ellie.name); //
console.log(ellie['name']); // []를 이용해 배열을 가져오는 것처럼 프로퍼티를 가져온다.
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj.key); //undefined로 출력
    console.log(obj[key]); //정상적으로 출력
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Constructor function
function Person(name, age){
    // return{
    //     name: name,
    //     age, // shorhand에서는 key와 value값이 같으면 :을 생략할 수 있다.
    // };
    this.name = name;
    this.age = age;
}

// 5. in operator: property existence check(key in obj) 해당하는 키가 해당하는 object에 있는지 체크한다.
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj) 모든 키를 받아오고 싶을 때 사용
console.clear();
for (let key in ellie) {
    console.log(key);
}

// for (value of iterable) 배열리스트
const array = [1,2,4,5];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
for(let value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assing(dest, [ojb1, obj2, obj3...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {}; //빈 오브젝트를 만들고
for (let key in user){ 
    user3[key] = user[key];
}
console.log(user3);

const user4 = {}; // 둘이 같은내용. const user4 = Object.assign({}, user);
Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 나오는 프로퍼티가 앞에 있는 프로퍼티를 덮어 씌운다.
console.log(mixed.color);
console.log(mixed.size);