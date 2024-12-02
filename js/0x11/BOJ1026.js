const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let [n, arrA, arrB] = input;

arrA = arrA.split(" ").map(Number);
arrB = arrB.split(" ").map(Number);

arrA.sort((a, b) => a - b);
arrB.sort((a, b) => b - a);

let answer = 0;

for (let i = 0; i < +n; i++) {
  answer += arrA[i] * arrB[i];
}

console.log(answer);
