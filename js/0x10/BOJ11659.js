const { start } = require("repl");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const arr = [...input[1].split(" ").map(Number)];

const dp = [];
dp.push(0);
dp.push(arr[0]);

for (let i = 2; i <= n; i++) {
  dp.push(dp[i - 1] + arr[i - 1]);
}

for (let i = 0; i < m; i++) {
  const start_end = input[i + 2].split(" ").map(Number);
  const start = start_end[0];
  const end = start_end[1];

  console.log(dp[end] - dp[start - 1]);
}
