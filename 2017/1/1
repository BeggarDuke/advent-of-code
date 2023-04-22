const fs = require("fs");
const textFile = "input.txt";
let data = fs.readFileSync(textFile, { encoding: "utf8" });

function sumMatchedNumbers() {
  const input = data.trim();
  let sum = 0;

  for (let i = 0; i < input.length - 1; i++) {
    let num = Number(input[i]);
    let nextNum = Number(input[i + 1]);

    if (Number(input[i]) == Number(input[input.length - 1]) && i == 0) {
      sum += num;
    } else if (num == nextNum) {
      sum += num;
    }
  }
  console.log(sum);
  return sum;
}
sumMatchedNumbers();
