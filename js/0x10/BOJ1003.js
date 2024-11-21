const input = require("fs").readFileSync("example.txt").toString().trim().split("\n").map(Number);

const n = input[0];

const dp = [];
dp.push([1, 0]);
dp.push([0, 1]);

for (let i = 2; i <= 40; i++) {
  dp.push([dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]]);
}

for (let i = 0; i < n; i++) {
  console.log(...dp[input[i + 1]]);
}
