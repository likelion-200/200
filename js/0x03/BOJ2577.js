const inputData = require("fs").readFileSync("example.txt").toString().trim().split("\n").map(Number);

let result = Number(inputData[0] * inputData[1] * inputData[2]);
const arr = new Array(10).fill(0);

while (result !== 0) {
  const num = result % 10;
  arr[num]++;

  result = Math.floor(result / 10);
}

console.log(arr.join("\n"));
