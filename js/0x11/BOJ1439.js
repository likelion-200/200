const input0 = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(1)
  .filter((index) => index.length > 0);
const input1 = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(0)
  .filter((index) => index.length > 0);

console.log(Math.min(input0.length, input1.length));
