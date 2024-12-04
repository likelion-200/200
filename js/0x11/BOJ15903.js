const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let [n, arr] = input;

n = n.split(" ").map(Number);
arr = arr.split(" ").map(Number);
for (let i = 0; i < n[1]; i++) {
  arr.sort((a, b) => a - b);

  arr[0] = arr[0] + arr[1];
  arr[1] = arr[0];
}

const answer = arr.reduce((acc, cur) => acc + cur, 0);

console.log(answer);

// 보류
