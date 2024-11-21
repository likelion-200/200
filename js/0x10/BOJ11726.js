const input = require("fs").readFileSync("example.txt").toString().trim();

const n = +input;
const mod = 10007;

const arr = [];
arr.push(1);
arr.push(2);

for (let i = 2; i < n; i++) {
  arr.push((arr[i - 1] + arr[i - 2]) % mod);
}

console.log(arr[n - 1]);
