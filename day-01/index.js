const process = require('process');
const fs = require('fs');

const spelledOutDigits = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
];

process.argv.shift(); // node
process.argv.shift(); // index.js
const inputFile = process.argv.shift();

const lines = fs.readFileSync(inputFile, "utf-8").split('\n');
let sum = 0;

for (const line of lines) {
  const numbers = Array
    .from(
      line.matchAll(/(?=([0-9]|one|two|three|four|five|six|seven|eight|nine))/g) ?? []
    )
    .map(([, str]) => {
      const spelledOutValue = spelledOutDigits.findIndex(spelledOut => spelledOut === str);
      return spelledOutValue !== -1 ? spelledOutValue : parseInt(str)
    });

  const value = numbers.length ? parseInt(`${numbers.at(0)}${numbers.at(-1)}`) : 0;
  sum += value;
}

console.log(sum);
