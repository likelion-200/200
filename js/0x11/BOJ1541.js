const input = require("fs").readFileSync("example.txt").toString().trim().split("-");

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split("+").map(Number);
  input[i] = input[i].reduce((acc, cur) => acc + cur, 0);
}

const result = input.reduce((acc, cur) => acc - cur);

console.log(result);
