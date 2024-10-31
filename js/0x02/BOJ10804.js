const inputData = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let arr = new Array(20);
let list = new Array(20);

for (let i = 0; i < 20; i++) {
  arr[i] = i + 1;
}

for (let i = 0; i < 10; i++) {
  let start = +inputData[i].split(" ")[0];
  let end = +inputData[i].split(" ")[1];

  for (let j = start - 1; j < end - 1; j++) {
    for (let k = j + 1; k < end; k++) {
      let tmp = arr[j];
      arr[j] = arr[k];
      arr[k] = tmp;
    }
  }
}

console.log(...arr);
