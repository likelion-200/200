const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let idx = 1;
const n = +input[0];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const answer = [];

for (let i = 0; i < n; i++) {
  const [row, col] = input[idx++].split(" ").map(Number);

  const boardF = Array.from(Array(col), () => new Array(row).fill(-1));
  const boardJ = Array.from(Array(col), () => new Array(row).fill(-1));

  const queF = [];
  const queJ = [];

  let idxF = 0;
  let idxJ = 0;

  const arr = [];

  for (let j = 0; j < col; j++) {
    arr.push(input[idx++].split(""));
  }

  for (let j = 0; j < col; j++) {
    for (let k = 0; k < row; k++) {
      if (arr[j][k] === "@") {
        boardJ[j][k] = 0;
        queJ.push([j, k]);
      }
      if (arr[j][k] === "*") {
        boardF[j][k] = 0;
        queF.push([j, k]);
      }
    }
  }

  while (queF.length > idxF) {
    const [x, y] = queF[idxF++];

    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      if (nx < 0 || nx >= col || ny < 0 || ny >= row) continue;
      if (boardF[nx][ny] >= 0 || arr[nx][ny] === "#") continue;

      boardF[nx][ny] = boardF[x][y] + 1;
      queF.push([nx, ny]);
    }
  }

  let escape = false;
  while (queJ.length > idxJ && !escape) {
    const [x, y] = queJ[idxJ++];

    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      if (nx < 0 || nx >= col || ny < 0 || ny >= row) {
        answer.push(boardJ[x][y] + 1);
        escape = true;
        break;
      }
      if (boardJ[nx][ny] >= 0 || arr[nx][ny] === "#") continue;
      if (boardF[nx][ny] !== -1 && boardF[nx][ny] <= boardJ[x][y] + 1) continue;

      boardJ[nx][ny] = boardJ[x][y] + 1;
      queJ.push([nx, ny]);
    }
  }
  if (!escape) answer.push("IMPOSSIBLE");
}

console.log(answer.join("\n"));
