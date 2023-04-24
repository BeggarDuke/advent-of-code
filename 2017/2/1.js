const fs = require("fs");
const textFile = "input.txt";
let data = fs.readFileSync(textFile, { encoding: "utf8" }).trim();

const input = data.split("\n").map(a => a.split("\t").map(b => parseInt(b, 10)));

const output = input.reduce((sum, row) => {
  const sorted = row.sort((a, b) => a - b);
  return sum + sorted[sorted.length -1] - sorted[0];
  }, 0);
  
console.log(output);