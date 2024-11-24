const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

const n = +input[0];

const arr = [];
arr.push([0, 0]);
for (let i = 1; i <= n; i++) {
  arr[i] = [0, ...input[i].split(" ").map(Number), 0];
  for (let j = 1; j <= i; j++) {
    arr[i][j] = Math.max(arr[i - 1][j], arr[i - 1][j - 1]) + arr[i][j];
  }
}

arr[n].sort((a, b) => a - b);

console.log(arr[n][n + 1]);
