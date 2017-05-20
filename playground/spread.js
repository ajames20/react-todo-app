// Spread Operator

function add(a, b) {
  return a + b;
}

console.log('Basic : ' + add(3, 1));
console.log('...........');
//How to Call with an Array
let todAdd = [3, 7];
console.log('Array: ' + add(todAdd[0], todAdd[1]));
console.log('...........');

//Using the ... Operator
console.log('Spread: ' + add(...todAdd));

let groupA = ['Jen', 'Cory'];
let groupB = ['Sunny'];
let final = [3, groupA]; // no spread will add an array into the array
let finalSpread = [3, ...groupA]; // spread will make a single array of all elements
let finalsSpeardAll = [...groupB, 3, ...groupA];
console.log(final);
console.log('...........');
console.log(finalSpread);
console.log('...........');
console.log(finalsSpeardAll);
console.log('...........');

// CHALLENGE 1
let person = ['Andrew', 35];
let person2 = ['Sid', 55];

function greeter(name, age) {
  console.log('Hello ' + name + ' you are ' + age + ' years old.');
}

greeter(...person);
console.log('...........');
greeter(...person2);
console.log('...........');

// CHALLENGE 2

let names = ['Mike', 'John'];
let finalNames = ['Andrew', ...names];

console.log(finalNames);
console.log('...........');

finalNames.forEach(name => {
  console.log('Hi ' + name);
});
console.log('...........');
