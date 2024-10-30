let input = require('fs').readFileSync('example.txt').toString().split('\n');

const a = parseInt(input[0].split(' ')[0]);
const b = parseInt(input[0].split(' ')[1]);
const c = parseInt(input[1]);

const totalM = b+c;

const M = totalM % 60;

let H = a + Math.floor(totalM/60);

if(H>=24) {
  H -= 24;
}

console.log(H + " " + M);
