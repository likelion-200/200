const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let [num, ...arr] = input;

let [n, m] = num.split(" ").map(Number);

arr = arr.map((idx) => idx.split(""));

const boardF = Array.from(Array(n), () => new Array(m).fill(-1));
const boardJ = Array.from(Array(n), () => new Array(m).fill(-1));

const queF = [];
const queJ = [];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let idxF = 0;
let idxJ = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === "J") {
      queJ.push([i, j]);
      boardJ[i][j] = 0;
    }
    if (arr[i][j] === "F") {
      queF.push([i, j]);
      boardF[i][j] = 0;
    }
  }
}

while (queF.length > idxF) {
  const [x, y] = queF[idxF++];

  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (boardF[nx][ny] >= 0 || arr[nx][ny] === "#") continue;

    queF.push([nx, ny]);
    boardF[nx][ny] = boardF[x][y] + 1;
  }
}

while (queJ.length > idxJ) {
  const [x, y] = queJ[idxJ++];

  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
      console.log(boardJ[x][y] + 1);
      return;
    }

    if (boardF[nx][ny] !== -1 && boardF[nx][ny] <= boardJ[x][y] + 1) {
      continue;
    }
    if (boardJ[nx][ny] >= 0 || arr[nx][ny] === "#") {
      continue;
    }

    queJ.push([nx, ny]);
    boardJ[nx][ny] = boardJ[x][y] + 1;
  }
}

console.log("IMPOSSIBLE");
