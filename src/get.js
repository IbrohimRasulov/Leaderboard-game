const getScores = async () => {
  const info = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Y4TJzkMfBJeirD2R1Zn7/scores');
  const json = await info.json();
  return json;
};

export default () => {
  getScores().then((json) => {
    const scoresArr = json.result;
    const arrangedList = scoresArr.sort((a, b) => b.score - a.score);
    for (let i = 0; i < arrangedList.length; i += 1) {
      const list = document.querySelector('ul');
      list.innerHTML += `<li>${arrangedList[i].user}: ${arrangedList[i].score}</li>`;
    }
  });
};