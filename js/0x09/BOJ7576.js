const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let [n, ...arr] = input;

n = n.split(" ").map(Number);

arr = arr.map((index) => {
  return index.split(" ").map(Number);
});

const dist = [...Array(n[1])].map(() => Array(n[0]).fill(0));

const queue = [];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let max = 0;
let idx = 0;

for (let i = 0; i < n[1]; i++) {
  for (let j = 0; j < n[0]; j++) {
    if (arr[i][j] === 1) {
      queue.push([i, j]);
    }

    if (arr[i][j] === 0) {
      dist[i][j] = -1;
    }
  }
}

while (queue.length > idx) {
  const cur = queue[idx++];

  for (let dir = 0; dir < 4; dir++) {
    const nx = cur[0] + dx[dir];
    const ny = cur[1] + dy[dir];

    if (nx < 0 || nx >= n[1] || ny < 0 || ny >= n[0]) {
      continue;
    }
    if (dist[nx][ny] >= 0) continue;

    dist[nx][ny] = dist[cur[0]][cur[1]] + 1;
    queue.push([nx, ny]);
  }
}

for (let i = 0; i < n[1]; i++) {
  for (let j = 0; j < n[0]; j++) {
    if (dist[i][j] === -1) {
      console.log(-1);
      return;
    }
    max = Math.max(dist[i][j], max);
  }
}

console.log(max);
