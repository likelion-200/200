const inputData = require("fs").readFileSync("example.txt").toString().trim().split("").map(Number);

const arr = new Array(9);
arr.fill(0);

for (let i = 0; i < inputData.length; i++) {
  let num = inputData[i];

  if (num === 9) {
    arr[6]++;
  } else {
    arr[num]++;
  }
}

arr[6] = Math.ceil(arr[6] / 2);

const max = arr.reduce((a, b) => Math.max(a, b), 0);

console.log(max);
