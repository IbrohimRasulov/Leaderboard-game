const getScores = async () => {
  const info = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Y4TJzkMfBJeirD2R1Zn7/scores');
  const json = await info.json();
  return json;
};

export default () => {
  const list = document.querySelector('ul');
  getScores().then((json) => {
    const infoArr = json.result;
    for (let i = 0; i < infoArr.length; i += 1) {
      list.innerHTML += `<li class="list-group-item${i % 2 === 0 ? ' secondary-list-iteam' : ''}">${infoArr[i].user}: ${infoArr[i].score}</li>`;
    }
  });
};