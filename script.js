console.log('Hello World!');
console.log('Test!')
//Variables and DataTypes
/*
    Variables used to store and manupulate data.
*/
var variableName = 'Hello World!';
console.log(variableName);

//2nd way create variable
let varableName2 = 'Hello World!';
varableName2 = 'Hi i\'m about to go';
console.log(varableName2);
//3rd way to declear varable
const _variableName3 = 'World!';
console.log(_variableName3);
//let, var,function are reserved in Js

/*
* data types *
* bool- true or false,
* String- 'Hello',
* number- 1,2,
* null- null,
* symbol- Extremely rarely used,
* undefined-undefined ,
* object-forms the building blocks for mordern js
* */
//string-
const examplEString = 'Hello World!';
console.log(examplEString);

const backTicks = `I love it! ${examplEString}, welcome you ${2+2}`;
console.log(typeof backTicks);

//Number-
const wholeNumber = 5;
const decemalNumber = 0.5;

console.log(wholeNumber);
console.log(decemalNumber);

const firstNumber = 5;
const secondNumber = 10;

const result = firstNumber/secondNumber;

// console.log(result);

//NaN
const string = 'String';
const secondNumber2 = 10;

const result2 = string/secondNumber2;

  console.log(typeof result2);

 //Boolean
const  isCool = true;

if(isCool) {
    console.log('Hi man you\'re cool');
} else {
    console.log('try again')
}
console.log((typeof isCool));

const age = 20;
console.log(age >= 20);

//Null
const ages = null;
console.log(ages); typeof is object it's a bug

//varable not assigned value is underfined
let x;
console.log(typeof x);


//Object - collection of data for more complex entities
const person = {
    name:' John',
    age3: 25,
}

// console.log(typeof person.age3);

const date = new Date();
console.log((typeof date));

//comparson operators => return true or false
const a =5;
const b = 5;

 console.log(a < b);

console.log(a == b);  //value is equal
console.log(a != b); // not equal

//Strict equality
console.log(a===b);
Strict not-equality
console.log(a !==b);

//Strict equality vs not-Strict
console.log(5===5);
console.log('Hello' === 'Hello');

compares VALUES and DATA TYPES
 console.log(5==="5"); //false
 console.log(5=="5"); //true - does not check datatype

console.log('' == '0'); //false
console.log(false == '0'); //true
 console.log(0 == '');

console.log(true == 1); //true
console.log('5' === 5); //false

//Logical Operators
//AND && => All OPERANDS ARE TRUE =. True
// console.log(true && false);  //false
//OR(||) => Atleast one operand is true
// console.log(true || true); //true
//NOT !
// console.log(!true);  //false
// console.log(!false);  //true


const age5 = 18;
if(age5 > 20) {
    console.log('You may enter');
} else if(age5 === 18){
    console.log('Just turned to 18')
} else {
    console.log('Sorry')
}

//While loop
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}


//FOR loops
for(let i =0; i<=10; i++){
    console.log(i);
}

//Functions

//A function declearation
function square(number) {
    return number * number;
}

//A function call
const res = square(5);
// console.log(res);

//A function declearation
function name(params) {

}

//a function expression
const nam =  function (params){

}

//An Arrow function
const x1 = (params) => {

}


function sayHi(name) {
    console.log(`Hi, ${name}`);
}

sayHi('Joe');
sayHi('Jacky');


//Every function is returns undefined
function add(a, b) {
    return 'Hi';
    return a + b;
}

const sum = add(2,2);

// console.log(sum);

function test() {
    console.log(1);
    return true;
    console.log(2);
    return false;
    console.log(2);
}

const bool = test();
console.log(bool);


//Arrow Function
const x2 = (number) => {
  return number * number;
}

let resul = x2(5);

console.log(resul);



