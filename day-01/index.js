const process = require('process');
const fs = require('fs');

process.argv.shift(); // node
process.argv.shift(); // index.js
const inputFile = process.argv.shift();

const lines = fs.readFileSync(inputFile, "utf-8").split('\n');
let sum = 0;

for (const line of lines) {
  const numbers = line.match(/[0-9]/g);
  const value = numbers ? parseInt(`${numbers.at(0)}${numbers.at(-1)}`) : 0;
  sum += value;
}

console.log(sum);
