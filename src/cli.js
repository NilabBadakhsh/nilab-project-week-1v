
// // Run: node src/cli.js

// // ---------------- Variables and Strings ----------------
const name = "Nilab";
const ageText = "23";

console.log(`Hello, ${name}. You are ${ageText} years old.`);

const ageNumber = Number(ageText);
const nextAge = ageNumber + 1;
console.log(`Next year you will be ${nextAge}.`);

// // ---------------- Arrays ----------------
const numbers = [2, 4, 6, 8, 10];
numbers.push(12);
numbers.pop();

let sum = 0;
for (const n of numbers) {
  sum += n;
}
const avg = numbers.length ? sum / numbers.length : 0;

console.log("numbers:", numbers);
console.log("sum:", sum);
console.log("avg:", avg);

// // ---------------- Loops and Conditions ----------------
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

const arr = [2, 5, 7, 1, 9, 3, 6];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 5) {
    count++;
  }
}
console.log("count >= 5:", count);

let value = 12;
while (value > 0) {
  value -= 3;
}
console.log("value after loop:", value);

// // ---------------- Objects ----------------
const person = {
  name: "Nilab",
  age: 23,
  city: "Badakhshan"
};
console.log("name:", person.name);
person.age = 24;
person.role = "Intern";
console.log("person:", person);

// // ---------------- Functions ----------------
function add(a, b) {
  return a + b;
}
function average(nums) {
  let sum = 0;
  for (const n of nums) {
    sum += n;
  }
  return sum / nums.length;
}
function isAdult(age) {
  return age >= 18;
}
console.log("add:", add(3, 4));
console.log("average:", average([2, 4, 6, 8]));
console.log("isAdult:", isAdult(17), isAdult(21));

// // ----------------  Files ----------------
const { readFileSync } = require("node:fs");
const text = readFileSync("data/people.csv", "utf8");
const lines = text.trim().split(/\r?\n/);
const dataRowCount = lines.length - 1;
console.log("lines:", lines.length);
console.log("data rows:", dataRowCount);
// ---------------- CLI Arguments ----------------
const args = process.argv.slice(2);
const cliName = args[0] || "friend";
console.log(`Hello, ${cliName}!`);
