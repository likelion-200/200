const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let [n, ...arrN] = input;

arrN = arrN.map((index) => index.split(""));

const arrS = Array.from(Array(+n), () => new Array(+n).fill(" "));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arrN[i][j] === "R" || arrN[i][j] === "G") {
      arrS[i][j] = "R";
    } else {
      arrS[i][j] = "B";
    }
  }
}

let areaN = 0;
let areaS = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const chkN = Array.from(Array(+n), () => Array(+n).fill(false));
const chkS = Array.from(Array(+n), () => Array(+n).fill(false));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const queN = [];
    let ch;

    if (!chkN[i][j]) {
      chkN[i][j] = true;
      areaN++;
      queN.push([i, j]);
      ch = arrN[i][j];
    }

    let idx = 0;

    while (queN.length > idx) {
      const [x, y] = queN[idx++];

      for (let dir = 0; dir < 4; dir++) {
        const nx = x + dx[dir];
        const ny = y + dy[dir];

        if (nx < 0 || nx >= +n || ny < 0 || ny >= +n) continue;
        if (chkN[nx][ny] || arrN[nx][ny] !== ch) continue;

        queN.push([nx, ny]);
        chkN[nx][ny] = true;
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const queS = [];
    let ch;

    if (!chkS[i][j]) {
      chkS[i][j] = true;
      areaS++;
      queS.push([i, j]);
      ch = arrS[i][j];
    }

    let idx = 0;

    while (queS.length > idx) {
      const [x, y] = queS[idx++];

      for (let dir = 0; dir < 4; dir++) {
        const nx = x + dx[dir];
        const ny = y + dy[dir];

        if (nx < 0 || nx >= +n || ny < 0 || ny >= +n) continue;
        if (chkS[nx][ny] || arrS[nx][ny] !== ch) continue;

        queS.push([nx, ny]);
        chkS[nx][ny] = true;
      }
    }
  }
}

console.log(areaN, areaS);
