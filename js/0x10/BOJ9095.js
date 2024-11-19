const input = require("fs").readFileSync("example.txt").toString().trim().split("\n").map(Number);

const n = input[0];

const arr = [];
arr.push(0);
arr.push(1);
arr.push(2);
arr.push(4);

for (let i = 4; i <= 11; i++) {
  arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
}

for (let i = 1; i <= n; i++) {
  console.log(arr[input[i]]);
}
