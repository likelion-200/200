let input = require("fs").readFileSync("example.txt").toString();
input = +input;

const arr = [];

arr.push(BigInt(0));
arr.push(BigInt(1));
arr.push(BigInt(1));

for (let i = 3; i <= input; i++) {
  arr[i] = BigInt(arr[i - 1] + arr[i - 2]);
}

console.log(arr[input].toString());
