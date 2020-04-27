// block scopes
{
    // block scope
    // made with a pair of curly braces
    {
      // nested block scope
    }
}
  
if (true) {
    // block scope
}
  
for (let i = 1; i <= 10; i++) {
    // block scope
    // use let instead of var to avoid to keep variable from being accessed outside this block scope
}
  
// function sum(a, b) {
//  // function scope
//  var result = a + b;
    // unlike block scopes, variables defined here are not accessible outside this scope
// }

// sum(4 + 9);

// Scalar values
const answer = 42;
const greeting = 'Hello';
// use const when the reference assigned to a variable is meant to be a constant one

// Arrays and Objects
const numbers = [2, 4, 6];
const person = {
  firstName: 'John',
  lastName: 'Doe',
};
// const ensures that the variable is pointing to the same array or object but the content of the array or object can still be mutated

const answer1 = 42;

/*
	A big program here...
*/

answer1; // is still 42;



// vs



let answer2 = 42;

/*
	A big program here...
*/

answer2; // might have changed;

// Arrow functions vs Regular functions

const X = function() {
    // "this" here is the caller of X
  };
  
  const Y = () => {
    // "this" here is NOT the caller of Y
    // It's the same "this" found in Y's scope
  };
  
  /*
    
    Regular functions give access to their "calling" environment while arrow functions give access to their "defining" environment 
    
    
    The value of the "this" keyword inside a regular function depends on HOW the function was CALLED (the OBJECT that made the call).
    
    The value of the "this" keyword inside an arrow function depends on WHERE the function was DEFINED (the SCOPE that defined the function).
    
    */
  
  // console.log(this);
  
  const testerObj = {
    func1: function() {
      console.log('In func1', this);
    },
  
    func2: () => {
      console.log('In func2', this);
    }
  };
  
  testerObj.func1();
  testerObj.func2();
  
  // const square1 = (a) => {
  // 	return a * a;
  // };
  // const square2 = (a) => a * a;
  // const square3 = a => a * a;
  
//display.log([1, 2, 3, 4].map(a => a * a));

// object literals
  /*
      const obj = {
        key: value
      };
*/

const mystery = 'answer';
const InverseOfPI = 1 / Math.PI;

const obj = {
    p1: 10,
    p2: 20,
    f1() {},
    f2: () => {},
    [mystery]: 42,
    InverseOfPI,
};

//console.log(obj.answer);
//console.log(obj.InverseOfPI);

// destructuring
// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

// with destructuring syntax
const {PI, E, SQRT2} = Math;
// destructures (or extract) the three properties out of the righthand object into the current scope

const circle = {
  label: 'circleX',
  radius: 2,
};

const circleArea = ({radius}) => 
  (PI * radius * radius).toFixed(2);

console.log(
    circleArea(circle)
); 

const [first, ...restOfItems] = [10, 20, 30, 40];

console.log(first);
console.log(restOfItems);

// template strings
// three ways to declare strings in JavaScript
  // double quotes ""
  // single quotes ''
  // backtic character

  const yo = "Hello world";

  const anotherAnswer = '54';
  
  const html = `
    <div>
      ${Math.random()}
    </div>
  `;
  
  html
  
  // strings defined with `` are called template strings
    // support interpolation
    // can be used as templates with dynamic values
 
// Classes

class Person {
    constructor(name) {
      this.name = name;
    }
    
    greet() {
      console.log(`Hello ${this.name}!`);
    }
  }
  
  class Student extends Person {
    constructor(name, level) {
      super(name);
      this.level = level;
    }
    
    greet() {
      console.log(`Hello ${this.name} from ${this.level}`);
    }
  }
  
  const o1 = new Person("Junior");
  const o2 = new Student("Neves", "Sophomore");
  const o3 = new Student("Grace", "3rd grade");
  o3.greet = () => console.log('I matter!');
  
  o1.greet();
  o2.greet();
  o3.greet();

  // promises

// an object that might deliver data at a later point in the program 

const fetchData = () => {
    fetch('https://api.github.com').then(resp => {
      resp.json().then(data => {
        console.log(data)
      });
    });
  };
  
fetchData();

// promises

// an object that might deliver data at a later point in the program 

const fetchData = async () => {
    const resp = await fetch('https://api.github.com');
    
    const data = await resp.json();
    
    console.log(data);
  };
  
  fetchData();