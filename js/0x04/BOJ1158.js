const inputData = require("fs").readFileSync("example.txt").toString().trim().split(" ");

const n = +inputData[0];

const k = +inputData[1];

let arr = Array.from(new Array(n), (x, i) => i + 1);
let list = [];

while (arr.length > 0) {
  for (let i = 0; i < k - 1; i++) {
    arr.push(arr.shift());
  }
  list.push(arr.shift());
}

console.log("<" + list.join(", ") + ">");
