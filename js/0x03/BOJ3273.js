const inputData = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let count = 0;
let N = +inputData[0];
let result = +inputData[2];

let arr = inputData[1].split(" ").map(Number);

arr.sort((a, b) => {
  return a - b;
});

let start = 0;
let end = arr.length - 1;

while (start < end) {
  const sum = arr[start] + arr[end];

  if (sum === result) {
    count++;
  }

  if (sum <= result) {
    start++;
  } else {
    end--;
  }
}

console.log(count);
