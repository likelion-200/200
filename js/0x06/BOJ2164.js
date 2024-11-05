let inputData = require("fs").readFileSync("example.txt").toString().trim().split("\n");
let n = Number(inputData[0]);

let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = i + 1;
}

// while (true) {
//   if (arr.length === 1) {
//     break;
//   }

//   arr.shift();
//   arr.push(arr.shift());
// }

// console.log(arr[0]);

let i = 0;

while (i < arr.length - 1) {
  if (i % 2 == 0) {
    i++;
  } else {
    arr.push(arr[i++]);
  }
}

console.log(arr[i]);
