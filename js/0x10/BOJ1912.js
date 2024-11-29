const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);

for (let i = 1; i < arr.length; i++) {
  if (arr[i - 1] < 0) {
    continue;
  }
  arr[i] += arr[i - 1];
}

arr.sort((a, b) => b - a);

console.log(arr[0]);
