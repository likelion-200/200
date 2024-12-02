const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let [n, arr] = input;

arr = arr
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let sum = arr.reduce((acc, cur, index) => {
  return acc + cur * (index + 1);
}, 0);

console.log(sum);
