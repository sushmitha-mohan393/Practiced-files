const array = ["one", "two", "three"];
console.log("array:", array);// ========================
// ARRAY STATIC METHODS
// ========================

// Array.from() – Convert iterable or array-like to array
let str = "hello";
let chars = Array.from(str, ch => ch.toUpperCase());
console.log("Array.from:", chars); // ['H','E','L','L','O']

// Array.fromAsync() – Convert async data
async function demoFromAsync() {
  const arr = await Array.fromAsync([Promise.resolve(1), Promise.resolve(2)]);
  console.log("Array.fromAsync:", arr); // [1,2]
}
demoFromAsync();

// Array.isArray() – Check if value is an array
console.log("isArray:", Array.isArray([1,2,3]), Array.isArray("test"));

// Array.of() – Create array from arguments
console.log("Array.of:", Array.of(10,20,30)); // [10,20,30]


// ========================
// ARRAY INSTANCE METHODS
// ========================

let numbers = [10, 20, 30, 40, 50];

// at()
console.log("at:", numbers.at(-1)); // 50 (last element)

// concat()
console.log("concat:", numbers.concat([60,70]));

// copyWithin()
let copyArr = [1,2,3,4,5];
copyArr.copyWithin(0,3);
console.log("copyWithin:", copyArr); // [4,5,3,4,5]

// entries()
for (let [index, value] of numbers.entries()) {
  console.log("entries:", index, value);
}

// every() – check if all pass test
console.log("every > 5:", numbers.every(x => x > 5));

// fill()
let fillArr = new Array(5).fill("x");
console.log("fill:", fillArr); // ['x','x','x','x','x']

// filter()
let big = numbers.filter(n => n > 25);
console.log("filter > 25:", big);

// find()
console.log("find > 25:", numbers.find(n => n > 25));

// findIndex()
console.log("findIndex > 25:", numbers.findIndex(n => n > 25));

// findLast() and findLastIndex()
console.log("findLast > 25:", numbers.findLast(n => n > 25));
console.log("findLastIndex > 25:", numbers.findLastIndex(n => n > 25));

// flat()
let nested = [1,[2,[3,[4]]]];
console.log("flat:", nested.flat(2)); // [1,2,3,[4]]

// flatMap()
let phrases = ["hello world", "good morning"];
console.log("flatMap:", phrases.flatMap(p => p.split(" "))); // ['hello','world','good','morning']

// forEach()
numbers.forEach(n => console.log("forEach:", n));

// includes()
console.log("includes 30:", numbers.includes(30));

// indexOf()
console.log("indexOf 30:", numbers.indexOf(30));

// join()
console.log("join:", numbers.join(" - "));

// keys()
for (let k of numbers.keys()) console.log("key:", k);

// lastIndexOf()
console.log("lastIndexOf 20:", [1,2,3,2,1].lastIndexOf(2));

// map()
let doubled = numbers.map(n => n*2);
console.log("map doubled:", doubled);

// pop() & push()
let stack = [];
stack.push(1); stack.push(2);
console.log("push:", stack);
console.log("pop:", stack.pop()); // removes 2

// reduce()
let sum = numbers.reduce((a,b) => a+b, 0);
console.log("reduce sum:", sum);

// reduceRight()
let word = ["o","l","l","e","h"].reduceRight((a,b)=>a+b);
console.log("reduceRight:", word);

// reverse()
console.log("reverse:", [...numbers].reverse());

// shift() & unshift()
let queue = [2,3];
queue.unshift(1);
console.log("unshift:", queue); // [1,2,3]
console.log("shift:", queue.shift()); // removes 1

// slice()
console.log("slice(1,3):", numbers.slice(1,3));

// some()
console.log("some > 45:", numbers.some(n=>n>45));

// sort()
let words = ["banana","apple","cherry"];
console.log("sort:", words.sort());

// splice()
let spliceArr = [1,2,3,4];
spliceArr.splice(1,2,"a","b");
console.log("splice:", spliceArr); // [1,"a","b",4]


// ========================
// OTHER MODERN METHODS
// ========================

// toLocaleString()
console.log("toLocaleString:", [1000,2000].toLocaleString()); 

// toReversed()
let rev = [1,2,3].toReversed();
console.log("toReversed:", rev);

// toSorted()
let sorted = [3,1,2].toSorted();
console.log("toSorted:", sorted);

// toSpliced()
let spliced = [1,2,3,4].toSpliced(1,2,9);
console.log("toSpliced:", spliced);

// toString()
console.log("toString:", [1,2,3].toString());

// values()
for (let v of numbers.values()) console.log("values:", v);

// with()
let withArr = [1,2,3];
console.log("with:", withArr.with(1,99)); // [1,99,3]
