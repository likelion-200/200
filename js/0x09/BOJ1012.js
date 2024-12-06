const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let n = +input[0];
let idx = 1;

for (let i = 0; i < n; i++) {
  const [row, col, cab] = input[idx++].split(" ").map(Number);
  let que = [];

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let area = 0;

  const arr = Array.from(Array(row), () => new Array(col).fill(0));
  const chk = Array.from(Array(row), () => new Array(col).fill(false));

  for (let i = 0; i < cab; i++) {
    const [x, y] = input[idx++].split(" ").map(Number);

    arr[x][y] = 1;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (arr[i][j] === 1 && !chk[i][j]) {
        let que = [[i, j]];
        chk[i][j] = true;
        area++;

        let idxq = 0;
        while (que.length > idxq) {
          const [x, y] = que[idxq++];

          for (let dir = 0; dir < 4; dir++) {
            const nx = x + dx[dir];
            const ny = y + dy[dir];

            if (nx < 0 || nx >= row || ny < 0 || ny >= col) continue;
            if (chk[nx][ny] || arr[nx][ny] === 0) continue;

            que.push([nx, ny]);
            chk[nx][ny] = true;
          }
        }
      }
    }
  }
  console.log(area);
}
