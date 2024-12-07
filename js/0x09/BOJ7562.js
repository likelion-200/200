const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let [n, ...arr] = input;

const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
const dy = [-1, -2, -2, -1, 1, 2, 2, 1];

let idx = 1;
for (let i = 0; i < n; i++) {
  const length = +input[idx++];
  const start = input[idx++].split(" ").map(Number);
  const end = input[idx++].split(" ").map(Number);

  const arr = Array.from(Array(length), () => new Array(length).fill(-1));

  const que = [];
  let queidx = 0;

  arr[start[0]][start[1]] = 0;

  que.push([start[0], start[1]]);

  while (que.length > queidx) {
    const [x, y] = que[queidx++];

    for (let dir = 0; dir < 8; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      if (nx < 0 || nx >= length || ny < 0 || ny >= length) continue;
      if (arr[nx][ny] >= 0) continue;

      que.push([nx, ny]);
      arr[nx][ny] = arr[x][y] + 1;
    }
  }
  console.log(arr[end[0]][end[1]]);
}
