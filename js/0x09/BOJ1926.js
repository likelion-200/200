const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let [n, ...arr] = input;
n = n.split(" ").map(Number);

const board = [];
const queue = [];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let cnt = 0;
let area = 0;
let max = 0;

const check = Array.from(Array(n[0]), () => new Array(n[1]).fill(false));

for (let i = 0; i < n[0]; i++) {
  board.push(arr[i].split(" ").map(Number));
}

for (let i = 0; i < n[0]; i++) {
  for (let j = 0; j < n[1]; j++) {
    if (board[i][j] === 1 && check[i][j] === false) {
      queue.push([i, j]);
      check[i][j] = true;
      cnt++;
      area = 0;
    }

    while (queue.length > 0) {
      area++;
      const cur = queue.pop();

      for (let dir = 0; dir < 4; dir++) {
        const nx = cur[0] + dx[dir];
        const ny = cur[1] + dy[dir];

        if (nx < 0 || nx >= n[0] || ny < 0 || ny >= n[1]) {
          continue;
        }

        if (check[nx][ny] || board[nx][ny] === 0) {
          continue;
        }

        queue.push([nx, ny]);
        check[nx][ny] = true;
      }
    }
    if (area > max) max = area;
  }
}

console.log(cnt);
console.log(max);
