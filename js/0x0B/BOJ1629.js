const [base, exp, divide] = require("fs").readFileSync("example.txt").toString().trim().split(" ").map(BigInt);

const calc = (exp) => {
  if (exp === 1n) {
    return base % divide;
  } else {
    let tmp = calc(exp / 2n);
    tmp = (tmp * tmp) % divide;
    if (exp % 2n === 0n) {
      return tmp;
    } else {
      return (tmp * base) % divide;
    }
  }
};

console.log(parseInt(calc(exp)));
