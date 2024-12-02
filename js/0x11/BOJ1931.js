const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

const [n, ...arr] = input;

let answer = 0;
let end = 0;

const time = arr
  .map((index) => index.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

time.forEach((index) => {
  if (end <= index[0]) {
    answer++;
    end = index[1];
  }
});

console.log(answer);
