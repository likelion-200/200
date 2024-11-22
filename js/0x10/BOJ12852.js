const input = require("fs").readFileSync("example.txt").toString().trim();

let n = +input;

const arr = [];
const timeline = [];

arr.push(0);
arr.push(0);
timeline.push(0);
timeline.push(0);

for (let i = 2; i <= n; i++) {
  arr.push(arr[i - 1] + 1);
  timeline.push(i - 1);
  if (i % 3 === 0 && arr[i] > arr[i / 3] + 1) {
    arr[i] = arr[i / 3] + 1;
    timeline[i] = i / 3;
  }

  if (i % 2 === 0 && arr[i] > arr[i / 2] + 1) {
    arr[i] = arr[i / 2] + 1;
    timeline[i] = i / 2;
  }
}

console.log(arr[n]);

const output = [];

while (n > 0) {
  output.push(n);
  n = timeline[n];
}

console.log(output.join(" "));
