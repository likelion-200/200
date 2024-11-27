const input = require("fs").readFileSync("example.txt").toString().trim();

const n = +input;
const dp = [];

dp.push(BigInt(0));
dp.push(BigInt(1));

for (let i = 2; i <= n; i++) {
  dp.push(BigInt(dp[i - 1]) + BigInt(dp[i - 2]));
}

console.log(dp[n].toString());
