//Chapter.2.Javascript Language Fundamentals
console.time('time');
var a = 2929029 + 2829892;
var b = 39032903 + a;
var c = a + b;
var d = a * b * c;
console.log(d);
console.timeEnd('time');

const person = { firstname: 'ajay', lastname: 'kumar' };
person.lastname = 'bhatia';
console.log(person);

//primitve data types

//String
const heyname = 'ajay';
console.log(typeof heyname);
//number
const age = 293;
console.log(typeof age);
//bolean
const love = false;
console.log(typeof love);
// null {it shows object as type beacuase of a bug}
const car = null;
console.log(typeof car);
// undifiend
let character;
console.log(typeof character);
//symbol {its a new data types introduced in ES6}
const sym = Symbol();
console.log(typeof sym);

//refrence type
//array
const hobbies = ['coding', 'fucking'];
console.log(typeof hobbies);

//object
const address = { city: 'pathankot', pincode: '145001' };
console.log(typeof address);

//date

const today = new Date();
console.log(today);
console.log(typeof today);

//type conversion
let val;

//number to string

val = String(555);
val = String(true);

console.log(typeof val);

//for type conversion we can also use toString() method

val = [2, 2, 4, 4, 3].toString();
console.log(typeof val);

//string to number conversion
val = '5';
val = Number(val);
console.log(typeof val);

//parseInt and parseFloat
//parse int just parse before decimal value
val = parseInt('200.43');
console.log(val);
console.log(typeof val);

//parseFlot will parse after decimal values to
val = parseFloat('229.22');
console.log(val);
console.log(typeof val);

//Play with Math Object

val = Math.PI;
console.log(val);
//to round the number
val = Math.round(2.449);

console.log(val);

// Math ceil will make 2.3 = 3
val = Math.ceil(2.3);
console.log(val);

//Math floor will make 2.8 = 2
val = Math.floor(2.8);
console.log(val);

// square root
val = Math.sqrt(64);
console.log(val);

//absoulte number
val = Math.abs(-2267267262);
console.log(val);

//pow to find out what is 8 to the power 2 is

val = Math.pow(8, 2);
console.log(val);

//to find minimum number

val = Math.min(
  2,
  2,
  34242,
  4,
  2,
  42,
  42,
  4,
  -42424,
  2424,
  242,
  -2,
  4242442
);
console.log(val);

//to find maximum number

val = Math.max(
  2,
  2,
  34242,
  4,
  2,
  42,
  42,
  4,
  -42424,
  2424,
  242,
  -2,
  4242442
);
console.log(val);

//random number
val = Math.random();
console.log(val);

//get random number between 0 to 99
val = Math.random() * 99;
console.log(val);

//get random number between 0 to 99 without decimal

val = Math.floor(Math.random() * 99);
console.log(val);

//concatenation

val = 'Ajay' + ' ' + 'kumar';

console.log(val);

//append dnt overwrite just append a string

val = 'Krishan ';
val += 'Chand';

console.log(val);

//Length
console.log(val.length);

//concat method
val = val.concat(' ', 'bhatia');

console.log(val);

//change case to upper case
val = val.toLowerCase();

console.log(val);

//change case to LOWER case
val = val.toUpperCase();

console.log(val);

//indexOf() to search the index of an alphbet
val = val.indexOf('C');
console.log(val);

//sub string

let e = 'Ajay Kumar Bhatia';

e = e.substring(0, 4);
console.log(e);

//slice
e = e.slice(0, 4);
console.log(e);

//split
e = 'Ajay kumar bhatia';
e = e.split(' ');
console.log(e);

//replace
e = 'Ajay kumar bhatia';
e = e.replace('bhatia', 'rana');
console.log(e);

//includes it search that spefic word include in the string or not if not then it will return false if ye sthen it will return true

e = e.includes('Ajay');
console.log(e);

//template literals
const student = 'Ajay';
const wage = 22000;
const job = 'Software Developer';
const city = 'Pathankot';
let para;

//without template strings (Es5)
para =
  '<ul> <li> Name:' +
  student +
  '</li> <li> Age:' +
  wage +
  '</li> <li> Job: ' +
  job +
  '</li> <li> City:' +
  city +
  '</li> </ul>';

//using template string

function wish() {
  return 'good morning';
}

para = `
<ul>
<li>Name : ${student} </li>
<li>Wage : ${wage} </li>
<li>Working as : ${job} </li>
<li>City: ${city} </li>
<li> Ternary operator: ${
  wage > 24000 ? 'good developer' : 'bad developer'
} </li>

<li>simple function: ${wish()} </li>
</ul>`;

document.body.innerHTML = para;
console.log(para);

//arrays
const num = [324, 24, 24, 2442, 2424555];
const num2 = new Array(323, 242, 42, 4242, 4255);
const fruits = ['apple', 'banana', 'orange'];
const mixed = [
  22,
  'ehllo',
  false,
  undefined,
  null,
  { a: 1, b: 2 },
  new Date(),
];
console.log(mixed);
//operations on arrays
//length of array
let operations;
operations = mixed.length;
console.log(operations);

//check if it is a array {if it is array it will return true}
operations = Array.isArray(mixed);
console.log(operations);

//return the value on the 4th index
operations = mixed[4];
console.log(operations);

//Insert into array

mixed[0] = 420;
console.log(mixed);

//find index of value
operations = mixed.indexOf(null);
console.log(operations);

//Mutate array
//push method {push always add in end}

mixed.push('add this');
console.log(mixed);

// add in the front of array
//unshift method

mixed.unshift('add front');
console.log(mixed);

//delete elements from end
//pop method
mixed.pop();
console.log(mixed);

//delete elements from front
//shift method
mixed.shift();
console.log(mixed);

//splice value from array
mixed.splice(0, 2);
console.log(mixed);

//reverse
mixed.reverse();
console.log(mixed);

//concatenate array
const girls = ['reema', 'sheela', 'roshni', 'priyanka', 'shefali'];
operations = mixed.concat(girls);
console.log(operations);

//sorting array {with alphabetical order}

operations = girls.sort();
console.log(operations);

//sorting array {with number order 0 to 100}
//use compare funtion for this

operations = num.sort(function (a, b) {
  return a - b;
});
console.log(operations);
//sorting array {with number order 100 to 1}

operations = num.sort(function (a, b) {
  return b - a;
});
console.log(operations);

//find number below 20

const newNum = [23, 22, 3, 1, 4, 25, 4, 56, 5, 43];
function below20(newNum) {
  return newNum > 20;
}
operations = newNum.find(below20);
console.log(operations);

//object literals
const teachers = {
  math: 'gurnam',
  age: 46,
  email: 'gurnam@math.com',
  hobbies: ['slap', 'punch'],
  address: {
    city: 'sujanpur',
    state: 'punjab',
  },
  getBirthYear: function () {
    return 2022 - this.age;
  },
};

let value;
value = teachers;
console.log(value);

// spefic value
value = teachers.math;
console.log(value);

//or u can use this

value = teachers['math'];
console.log(value);

//u have to use this keyword to access the age from inside the object
value = teachers.getBirthYear();
console.log(value);

//for loop on objects

const besties = [
  { name: 'Jitik', age: 22 },
  { name: 'Sahil', age: 25 },
  { name: 'Thapa', age: 26 },
  { name: 'Lalotra', age: 2 },
];

//loop all the objects in array
for (let i = 0; i < besties.length; i++) {
  console.log(besties[i]);
}

// loop a spefic key value pair in objects

for (let i = 0; i < besties.length; i++) {
  console.log(besties[i].name);
}

//Date and time

const date = new Date();
value = date;
console.log(value);

//how to see which day was on u birthday

const birthday = new Date('7-4-1996');
console.log(birthday.getDay());

const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let day = weekday[birthday.getDay()];
console.log(day);

//if , if else, comparison conditions

// single = , means assiging
// double == , means comparing
// triple === , means comparing data types

const id = 100;
//equal to
if (id == 102) {
  console.log('right');
} else {
  console.log('wrong');
}

//not equal to
if (id != 102) {
  console.log('right');
} else {
  console.log('wrong');
}
//equal to value and type
if (id === 100) {
  console.log('right');
} else {
  console.log('wrong');
}

//not equal to value and type
if (id !== 100) {
  console.log('right');
} else {
  console.log('wrong');
}

//if undefiend
//let rollno = 239;
if (typeof rollno !== 'undefined') {
  console.log(`the roll number is ${rollno}`);
} else {
  console.log('no roll number is not available');
}

//greater or less then
// >= greater then or equal to
// <= less then or equal to

//if else if

let color = 'green';
if (color === 'red') {
  console.log('color is red');
} else if (color === 'blue') {
  console.log('color is blue');
} else {
  console.log('color is not of my choice');
}

//test more then on thing {using logical operator}

const pm = 'Prime minister';
const pmAge = 100;

//AND , && AND make sure both of them are true

if (pmAge > 0 && pmAge <= 25) {
  console.log(`we have strong ${pm}`);
} else if (pmAge >= 26 && pmAge <= 80) {
  console.log(`we have weak ${pm}`);
} else {
  console.log(`not applicable to become ${pm}`);
}
//OR , || if one of them are true

if (pmAge == 20 || pmAge == 60) {
  console.log(`${pm} can drive by himself`);
} else {
  console.log(`${pm} have to carry a driver`);
}
//ternary operator
console.log(pmAge === 100 ? 'correct' : 'incorrect');

//in js u can write if conditions WITHOUT BRACES

if (pmAge === 100) console.log('Correct');
else console.log('Incorrect');

//switches condiion {use switch when we have alot of case}
switch (color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is not red or blue');
    break;
}
//functions {a block of code which can be define and later called}
//function declarations

function greet() {
  console.log('hello good morning');
}

greet();

//return function
function greetReturn() {
  return 'hello good morning';
}
console.log(greetReturn());

//function which can take parameter and arguments
function greetParameter(name) {
  return `hello good morning ${name}`;
}
console.log(greetParameter('AJAY'));

//function which can take multiple parameter
function greetMulti(name, friendName) {
  return `hello good morning ${name} and ${friendName}`;
}
console.log(greetMulti('AJAY', 'Vijay'));

//function with default parameters
function greetDefault(name = 'rahul', friendName = 'roshan') {
  return `hello good morning ${name} and ${friendName}`;
}
console.log(greetDefault());

//Function expression {putting a function as variable}

const Square = function (x) {
  return x * x;
};
console.log(Square(8));

//IIFEs - Imedeatily invokeble function expresssion
(function () {
  console.log('IIFEs running');
})();

//Function inside the objects {it called method}

const todo = {
  add: function () {
    console.log('adding todo');
  },
  edit: function (id) {
    console.log(`edditing todo with the id of ${id}`);
  },
};
todo.add();
todo.edit(37);

//we can also assign functin for todo object outside of it
todo.delete = function () {
  console.log('deleting todo');
};

todo.delete();

//loop and iteration. loop - it is a instruction which repeat itself until a spefic condition is reached

//General loops

//For loop
for (let i = 0; i < 31; i++) {
  console.log(`${i} July 2022`);
}

//For loop {do smthg special when iteration 4 hits}
//to skip the rest of iteration when i =4 hits and happy birthday get printed we have to use continue
for (let i = 0; i < 31; i++) {
  if (i === 4) {
    console.log(`Happy Birthday Ajay`);
    continue;
  }
  console.log(`${i} July 2022`);
}

//Break in For loop
//Break just break out of the loop if if statement get executed

for (let i = 0; i < 31; i++) {
  if (i === 28) {
    console.log(`Sorry this febuarary is leap year`);
    break;
  }
  console.log(`${i} Feburary 2022`);
}

//while loop

let k = 0;
while (k < 60) {
  console.log(`Roll number ${k}`);
  k++;
}

//do while loop
//Note in do while loop do always run once even if while condition is not meet

let s = 0;

do {
  console.log('s is equal to ' + s);
  s++;
} while (s < 100);

//loop through array using for loop

const cars = ['jeep', 'mahindra', 'Maruti suzuki', 'Tata', 'Toyta'];
for (i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//forEach array loop

cars.forEach(function (car, index, array) {
  console.log(` PB0${index} :: ${car}`);
  console.log(array);
});

//Map Method {Use to return smthg diffrent in array}

const users = [
  {
    id: 1,
    name: 'John Cena',
  },
  { id: 2, name: 'Ajay Kumar' },
  { id: 3, name: 'Manhoor lal ' },
];

// here map is used to return new array of just ids
const ids = users.map(function (user) {
  return user.id;
});
console.log(ids);

//for in loop {use for object}

let Lovers = {
  firstname: 'Shivali',
  lastname: 'Sharma',
  age: 28,
};
for (let x in Lovers) {
  console.log(`${x} : ${Lovers[x]}`);
}

//Window Object =  js run in window env
//alert , fetch , document all these methods which we use are in Windows Object

//Window methods / Objects/ Prooperties

//Alert
//window.alert('Danger');

//or we can also write it as
//alert('danger ahead');

//Prompt is same as Alert it just lil change it takes input

//const input = prompt();
//console.log(input);

//Confirm

// if (confirm('Are you a adult?')) {
//   console.log('Porn Loading....');
// } else {
//   console.log('Dont Load Porn');
// }

//Get outerheight
let height = window.outerHeight;
console.log(height);

//Get outerWidth
let width = window.outerWidth;
console.log(width);

//Get Innerheight
let innerHeight = window.innerHeight;
console.log(innerHeight);

//Get InnerWidth
let innerWidth = window.innerWidth;
console.log(innerWidth);

//ScrollPoints
let scrollVertical = window.screenY;
console.log(scrollVertical);

let scrollHorizontal = window.screenX;
console.log(scrollHorizontal);

//Location Object

let temp;
temp = window.location;
console.log(temp);

// hostname

temp = window.location.hostname;
console.log(temp);

//search tell us the seach after hostname /

temp = window.location.search;
console.log(temp);

//Redirect
//window.location.href = 'http://www.google.com';

//Reload Page
//window.location.reload();

//History object {-1 = will redirect u to the last website u visited, and -2 will redirect to 2nd last}

//window.history.go(-1);

//Navigator Object {Give information about the browser}

temp = window.navigator;
console.log(temp);

//types of scope

//Gloabal Scope
var friday = 1;
let saturday = 2;
const sunday = 3;

console.log(
  'Gloabal scope ' + friday + ' ' + saturday + ' ' + sunday
);

//functional Scope
function testing() {
  var friday = 4;
  let saturday = 5;
  const sunday = 6;

  console.log(
    'Functional scope ' + friday + ' ' + saturday + ' ' + sunday
  );
}

testing();

//Loop OR Block Scope
if (true) {
  var friday = 7;
  let saturday = 8;
  const sunday = 9;

  console.log(
    'Block scope ' + friday + ' ' + saturday + ' ' + sunday
  );
}

//for loop scope {Hence the value of friday changed in for loop scope thats y we dnt use var }
for (let a = 0; a < 10; a++) {
  console.log(
    'ForLoop scope ' + friday + ' ' + saturday + ' ' + sunday
  );
}

//Chapter.3.DOM Manipulation & Events
