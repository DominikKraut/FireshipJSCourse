// // Variables

// const a = null;
// let b = "string";

// // Data Types

// ("string");
// number = 6;
// null;
// (Boolean = true), false;

//Object literal, prototype chaining, každý objekt má maximálně jeden prototyp, poslední prototyp, respektive konec chainu má hodnotu NULL

const animal = {
  dna: 123,
  legs: {
    front: 2,
    back: 2,
  },
  sleep() {
    console.log("zzz");
  },
};

const dog = {
  bark() {
    console.log("woof");
  },
};

// 
Object.setPrototypeOf(dog, animal);
console.log(dog.dna);

const prototype1 = Object.getPrototypeOftotypeOf(animal);
console.log(prototype1);

const prototype2 = Object.getPrototypeOf(prototype1);
console.log(prototype2);

// Object destructuring
const person = {
  name: "John",
  age: 32,
  city: "New York",
  country: "USA",
};

const { name, age } = person;
console.log({ name, age });

// Object destructuring with alias

const { name: firstName, age: years } = person;
console.log({ name: firstName, age: years });
console.log({ firstName, years });
// Array destructuring
const fruits = ["apple", "banana", "orange"];
const [first, second, third] = fruits;

// Spreading

const obj = { 
  foo: 1, 
  bar: 2, 
  baz: 3 
};
const newObj = {
  foo: 4
  ...obj,
};
console.log(newObj); // { foo: 1, bar: 2, baz: 3 }

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

// Optional chaining - pokud volám properties objektů tak to často hodíl error protože objekt může být undefined, to nechceme, proto můžu použít Optional chaining a to error nehodí ikdyž to bude undefined

const person = { };

const dude = person.name;
console.log(foo); // Uncaught TypeError: Cannot read property 'bar' of undefined

const dude = person?.name; // undefined

// Nullish coalescing - Nullish coalescing is a relativly new operator that was introduced in ES2020. It is similar to the logical OR operator ||, but it only returns the right-hand side if the left-hand side is null or undefined.

const foo = null ?? 'bar';
console.log(foo); // 'bar'

const foo = 0 ?? 'bar';
console.log(foo); // 0