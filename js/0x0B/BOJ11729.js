let input = require("fs").readFileSync("example.txt").toString().trim();
input = +input;

console.log(2 ** input - 1);

const arr = [];

function hanoi(start, end, num) {
  if (num === 1) {
    arr.push([start, end]);
    return;
  }

  hanoi(start, 6 - start - end, num - 1);
  arr.push([start, end]);
  hanoi(6 - start - end, end, num - 1);
}

hanoi(1, 3, input);

console.log(arr.map((e) => e.join(" ")).join("\n"));
