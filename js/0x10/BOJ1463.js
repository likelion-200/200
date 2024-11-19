let n = require("fs").readFileSync("example.txt").toString().trim();
n = +n;
const arr = [];
arr.push(0);
arr.push(0);
for (let i = 2; i <= n; i++) {
  arr.push(arr[i - 1] + 1);

  if (i % 3 === 0) {
    arr[i] = Math.min(arr[i], arr[i / 3] + 1);
  }
  if (i % 2 === 0) arr[i] = Math.min(arr[i / 2] + 1, arr[i]);
}

console.log(arr[n]);
