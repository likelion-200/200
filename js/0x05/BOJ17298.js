const inputData = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let n = +inputData[0];

let arr = inputData[1].split(" ").map(Number);

let index = [];

for (let i = 0; i < n; i++) {
  let top = arr[i];
  while (index.length > 0 && top > arr[index[index.length - 1]]) {
    arr[index.pop()] = top;
  }
  index.push(i);
}

while (index.length > 0) {
  arr[index.pop()] = -1;
}

console.log(...arr);
