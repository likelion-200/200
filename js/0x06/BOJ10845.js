const inputData = require("fs").readFileSync("example.txt").toString().split("\n");

let n = +inputData[0];

let arr = [];
let answer = [];

for (let i = 1; i <= n; i++) {
  let order = inputData[i].split(" ")[0];
  let num = inputData[i].split(" ")[1];

  switch (order) {
    case "push":
      arr.push(num);
      break;
    case "pop":
      if (arr.length === 0) {
        answer.push(-1);
      } else {
        answer.push(arr.shift());
      }
      break;
    case "size":
      answer.push(arr.length);
      break;
    case "empty":
      if (arr.length === 0) {
        answer.push(1);
      } else {
        answer.push(0);
      }
      break;
    case "front":
      if (arr.length === 0) {
        answer.push(-1);
      } else {
        answer.push(arr[0]);
      }
      break;
    case "back":
      if (arr.length === 0) {
        answer.push(-1);
      } else {
        answer.push(arr[arr.length - 1]);
      }
      break;
  }
}

console.log(...answer);
