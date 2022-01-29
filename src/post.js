const gameID = "Y4TJzkMfBJeirD2R1Zn7";
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;

const postScore = async (user, score) => {
  const data = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const json = data.json();

  return json;
};

export default function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = document.querySelector("#name").value;
    const score = document.querySelector("#score").value;

    postScore(user, score);

    form.reset();
  });
};
