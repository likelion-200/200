let input = require("fs").readFileSync("example.txt").toString();

input = +input;

const arr = [];

arr.push(0);
arr.push(1);
arr.push(3);

for (let i = 3; i <= input; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2] * 2) % 10007;
}

console.log(arr[input]);
