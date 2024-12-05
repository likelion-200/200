const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let [n, ...arr] = input;

n = n.split(" ").map(Number);

for (let i = 0; i < n[0]; i++) {
  arr[i] = arr[i].split("").map(Number).slice(0, n[1]);
}

const min = Array.from(Array(n[0]), () => new Array(n[1]).fill(Infinity));
min[0][0] = 1;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const queue = [];
queue.push([0, 0]);

while (queue.length > 0) {
  const cur = queue.shift();

  for (let dir = 0; dir < 4; dir++) {
    const nx = cur[0] + dx[dir];
    const ny = cur[1] + dy[dir];

    if (nx < 0 || nx >= n[0] || ny < 0 || ny >= n[1]) {
      continue;
    }

    if (min[nx][ny] !== Infinity || arr[nx][ny] === 0) {
      continue;
    }

    queue.push([nx, ny]);
    min[nx][ny] = Math.min(min[nx][ny], min[cur[0]][cur[1]] + 1);
  }
}

console.log(min[n[0] - 1][n[1] - 1]);
