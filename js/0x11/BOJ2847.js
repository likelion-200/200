const input = require("fs").readFileSync("example.txt").toString().trim().split("\n").map(Number);

let [n, ...arr] = input;

arr = arr.reverse();

let answer = 0;

for (let i = 1; i < n; i++) {
  if (arr[i] >= arr[i - 1]) {
    answer += arr[i] - arr[i - 1] + 1;
    arr[i] = arr[i - 1] - 1;
  }
}

console.log(answer);
