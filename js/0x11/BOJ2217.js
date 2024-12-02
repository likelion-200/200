const input = require("fs").readFileSync("example.txt").toString().trim().split("\n").map(Number);

const [n, ...arr] = input;

arr.sort((a, b) => b - a);

let answer = 0;

for (let i = 0; i < arr.length; i++) {
  answer = Math.max(answer, arr[i] * (i + 1));
}

console.log(answer);
