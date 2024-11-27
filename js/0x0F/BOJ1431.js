const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

const n = +input[0];
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}

arr.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  let sum1 = sum(a);
  let sum2 = sum(b);

  if (sum1 === sum2) return a.localeCompare(b);
  return sum1 - sum2;
});

function sum(str) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(+str.charAt(i))) {
      result += +str.charAt(i);
    }
  }
  return result;
}

console.log(arr.join("\n"));
