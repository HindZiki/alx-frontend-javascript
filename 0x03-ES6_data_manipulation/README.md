1. ES6 Array Methods:
map(): Creates a new array by applying a function to each element.
js
Copier le code
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
filter(): Filters the elements of an array based on a condition.
js
Copier le code
[1, 2, 3, 4].filter(x => x > 2); // [3, 4]
reduce(): Reduces an array to a single value.
js
Copier le code
[1, 2, 3].reduce((acc, val) => acc + val, 0); // 6
2. Object Manipulation:
Destructuring: Extracts values from an object.
js
Copier le code
const { name, age } = { name: "Hind", age: 25 };
Spread Operator (...): Copies or merges objects.
js
Copier le code
const person = { name: "Hind" };
const personWithAge = { ...person, age: 25 };
3. Template Literals:
Allows variables to be embedded in a string.

js
Copier le code
const greeting = `Hello, ${name}!`;
4. Promises:
Simplifies handling asynchronous operations.

js
Copier le code
const promise = new Promise((resolve) => resolve("Done"));
promise.then(console.log); // "Done"
That's the key information for data manipulation in ES6!
