const input = require("fs").readFileSync("example.txt").toString().trim().split("\r\n");

const n = Number(input[0]);

const input1 = input[1].split(" ").map(Number);
const input2 = input[2].split(" ").map(Number);
const input3 = input[3].split(" ").map(Number);

const rgb = [[...input1], [...input2], [...input3]];
const arr = [];

arr.push([rgb[0][0], rgb[0][1], rgb[0][2]]);

for (let i = 1; i < n; i++) {
  let r = Math.min(arr[i - 1][1], arr[i - 1][2]) + rgb[i][0];
  let g = Math.min(arr[i - 1][0], arr[i - 1][2]) + rgb[i][1];
  let b = Math.min(arr[i - 1][0], arr[i - 1][1]) + rgb[i][2];

  arr.push([r, g, b]);
}

const min = Math.min(arr[n - 1][0], arr[n - 1][1], arr[n - 1][2]);
console.log(min);

// const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const [n, ...nums] = input.map((v) => v.split(" ").map(Number));

// const rgb = nums;

// for (let i = 1; i < n; i++) {
//   rgb[i][0] = Math.min(rgb[i - 1][1], rgb[i - 1][2]) + rgb[i][0];
//   rgb[i][1] = Math.min(rgb[i - 1][0], rgb[i - 1][2]) + rgb[i][1];
//   rgb[i][2] = Math.min(rgb[i - 1][0], rgb[i - 1][1]) + rgb[i][2];
// }

// const min = Math.min(rgb[n - 1][0], rgb[n - 1][1], rgb[n - 1][2]);

// console.log(min);
