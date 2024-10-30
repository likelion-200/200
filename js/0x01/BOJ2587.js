const input = require("fs").readFileSync("example.txt").toString().split("\n");

let list = [];

let sum = 0;

for (i = 0; i < 5; i++) {
  list[i] = parseInt(input[i]);
  sum += list[i];
}

list.sort();

console.log(sum / 5);
console.log(list[2]);
