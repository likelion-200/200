//시간 초과 코드

// const inputData = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// let n = +inputData[0];

// let arr = inputData[1].split(" ").map(Number);
// let lazor = [];
// let index = [];

// for (let i = 0; i < n; i++) {
//   const top = arr[i];

//   while (true) {
//     let data = lazor[lazor.length - 1];
//     if (data > top) {
//       lazor.push(top);
//       index.push(arr.indexOf(data) + 1);
//       break;
//     } else {
//       lazor.pop();
//     }
//     if (lazor.length === 0) {
//       lazor.push(top);
//       index.push(0);
//       break;
//     }
//   }
// }

// console.log(...index);

const inputData = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let n = +inputData[0];

let arr = inputData[1].split(" ").map(Number);
let lazor = [];
let index = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
  const top = arr[i];

  while (lazor.length > 0 && arr[lazor[lazor.length - 1]] < top) {
    lazor.pop();
  }
  if (lazor.length > 0) {
    index[i] = lazor[lazor.length - 1] + 1;
  }

  lazor.push(i);
}

console.log(...index);
