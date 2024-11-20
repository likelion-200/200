const input = require("fs").readFileSync("example.txt").toString().trim().split("\n").map(Number);

const n = input[0];

const arr = [];
arr.push([0, 0]);
arr.push([input[1], 0]);
arr.push([input[2], input[1] + input[2]]);

for (let i = 3; i <= n; i++) {
  let max1 = Math.max(arr[i - 2][0], arr[i - 2][1]) + input[i];
  let max2 = arr[i - 1][0] + input[i];

  arr.push([max1, max2]);
}

console.log(Math.max(arr[n][0], arr[n][1]));
