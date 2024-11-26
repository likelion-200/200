import { insertLast, getNode, getNodes } from "../lib/index.js";

const END_POINT = "https://pokeapi.co/api/v2/pokemon";

const body = getNode("body");
const ul = getNode("ul");
const button = getNodes("button");
const list = getNodes("li");

const data = ["#81C4C1", "#FBAC6E", "#85ACD7"];

async function getData(url) {
  const response = await fetch(url);

  if (response.ok) {
    response.data = await response.json();
  }
  return response;
}

/* -------------------------------------------------------------------------- */
/*                             스타팅 포켓몬 3마리 url 반환                             */
/* -------------------------------------------------------------------------- */
function getPoketmon() {
  const url = [];
  for (let i = 1; i <= 7; i += 3) {
    url.push(`${END_POINT}/${i}`);
  }
  console.log(url);
  return url;
}

/* -------------------------------------------------------------------------- */
/*                                   버튼에 렌더링                                  */
/* -------------------------------------------------------------------------- */

const url = getPoketmon();
const index = [];

function renderButton() {
  for (let i = 0; i < 3; i++) {
    console.log();

    index.push(url[i]);

    // 버튼 이미지
    getData(url[i]).then((res) => {
      insertLast(button[i], `<img class="poketmon" src="${res.data.sprites.other.showdown.front_default}" alt=""/>`);
    });
  }
}

renderButton();

/* -------------------------------------------------------------------------- */
/*                                   울음소리 반환                                  */
/* -------------------------------------------------------------------------- */
async function getCrise() {
  const crise = [];
  const audioList = [];

  for (let i = 0; i < 3; i++) {
    crise.push(url[i]);

    try {
      const res = await getData(url[i]);
      const cries = res.data.cries;
      const latestCryUrl = cries.latest;

      const audio = new Audio(latestCryUrl);
      audioList.push(audio);
    } catch {
      console.error("오류가 발생했습니다");
      alert("에러가 발생했습니다. 지연이 지속되면 문의 주시기 바랍니다. \n📞 010-0000-0000");
    }
  }

  return audioList;
}

/* -------------------------------------------------------------------------- */
/*                                   이미지 변경                                   */
/* -------------------------------------------------------------------------- */

function setImage(idx) {
  getData(url[idx - 1]).then((res) => {
    const image = getNode("img");
    image.src = `${res.data.sprites.other["official-artwork"].front_default}`;

    console.log(`../assets/bg${idx}.png`);
    body.style.backgroundColor = data[idx - 1];
    body.style.backgroundImage = "none";
    // body.style.backgroundImage = `url("../poketmon/assets/bg0${idx}.png")`;
    body.style.setProperty("--bg-image", `url("../assets/bg0${idx}.png")`);
  });
}
ul.addEventListener("click", async (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  const audioList = await getCrise();

  const index = li.dataset.index;

  console.log(index);
  console.log(audioList[index - 1]);

  const audio = audioList[index - 1];

  audio.play();

  setImage(index);

  list.forEach((li) => {
    li.classList.remove("is-active");
  });

  li.classList.add("is-active");
});
