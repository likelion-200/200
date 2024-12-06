const input = require("fs").readFileSync("example.txt").toString().trim().split(" ").map(Number);

const [n, m] = input;

const arr = new Array(100001).fill(0);

const que = [];

que.push(n);
arr[n] = 1;

let idx = 0;
while (que.length > idx) {
  const cur = que[idx++];

  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      nx = cur + 1;
    }
    if (i === 1) {
      nx = cur - 1;
    }
    if (i === 2) {
      nx = cur * 2;
    }
    if (nx < 0 || nx >= 100001 || arr[nx] != 0) continue;
    que.push(nx);
    arr[nx] = arr[cur] + 1;
  }
}

console.log(arr[m] - 1);
