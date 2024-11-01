const inputData = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let n = inputData[0];
let k = 1;

let arr = [];
let list = [];

for (let i = 1; i < n + 1; i++) {
  let num = inputData[i];

  while (k <= n + 1) {
    if (arr.length === 0) {
      arr.unshift(k);
      k++;
      list.push("+");
    } else if (num === arr[0]) {
      arr.shift();
      list.push("-");
      break;
    } else {
      arr.unshift(k);
      k++;
      list.push("+");
    }
  }
}

if (arr.length !== 0) {
  console.log("NO");
} else {
  console.log(list.join("\n"));
}
