const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

const n = +input[0].split(" ")[0];
let k = +input[0].split(" ")[1];
let answer = 0;

const arr = input.slice(1);

arr.sort((a, b) => b - a);

for (let i = 0; i < n; i++) {
  if (Math.floor(k / arr[i]) > 0) {
    answer += Math.floor(k / arr[i]);

    k = k % arr[i];
  }
}

console.log(answer);
