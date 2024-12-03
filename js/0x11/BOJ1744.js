const input = require("fs").readFileSync("example.txt").toString().trim().split("\n").map(Number);

const [n, ...arr] = input;

const arrP = arr
  .filter((index) => {
    return index > 0;
  })
  .sort((a, b) => b - a);

const arrM = arr
  .filter((index) => {
    return index <= 0;
  })
  .sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < arrP.length; i += 2) {
  if (typeof arrP[i + 1] === "undefined") {
    answer += arrP[i];
    break;
  }

  if (arrP[i + 1] !== 1) {
    answer += arrP[i] * arrP[i + 1];
  } else {
    answer += arrP[i] + arrP[i + 1];
  }
}

for (let i = 0; i < arrM.length; i += 2) {
  if (typeof arrM[i + 1] === "undefined") {
    answer += arrM[i];
    break;
  } else {
    answer += arrM[i] * arrM[i + 1];
  }
}
console.log(answer);
