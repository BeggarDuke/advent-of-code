const fs = require("fs");
const textFile = "input.txt";
let data = fs.readFileSync(textFile, { encoding: "utf8" }).trim();

const input = data.split("\n").map(a => a.split("\t").map(b => parseInt(b, 10)));

const output = input.reduce((sum, row) => {
    const sorted = row.sort((a, b) => b - a);
    let quotient = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
      for (let j = i + 1; j < sorted.length - 1; j++) {
        quotient = sorted[i] / sorted[j];
        if (Number.isInteger(quotient)) {
          return sum + quotient;
        }
      }  
    }
  }, 0);

console.log(output);