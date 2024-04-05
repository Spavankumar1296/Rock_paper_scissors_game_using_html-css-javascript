const displayresult = document.querySelector("#name1");
const displayresult1 = document.querySelector("#name2");
const displayresult2 = document.querySelector("#name3");
const displayresult3 = document.querySelector("#name4");
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
update();

function Rock1() {
  play("rock");
}
function Paper() {
  play("paper");
}
function Sessiors() {
  play("Sessiors");
}
displayresult.addEventListener("click", Rock1);
displayresult1.addEventListener("click", Paper);
displayresult2.addEventListener("click", Sessiors);
displayresult3.addEventListener("click", reset);
function play(playmove) {
  const computermove = mymove();
  let result = "";
  if (playmove === "Sessiors") {
    if (computermove === "rock") {
      result = "you lose";
    } else if (computermove === "paper") {
      result = "you win";
    } else if (computermove === "Sessiors") {
      result = "tie";
    }
  } else if (playmove === "rock") {
    if (computermove === "rock") {
      result = "tie";
    } else if (computermove === "paper") {
      result = "you win";
    } else if (computermove === "Sessiors") {
      result = "you lose";
    }
  } else if (playmove === "paper") {
    if (computermove === "rock") {
      result = "you win";
    } else if (computermove === "paper") {
      result = "tie";
    } else if (computermove === "Sessiors") {
      result = "you lose";
    }
  }
  if (result === "you win") {
    score.wins += 1;
  } else if (result === "you lose") {
    score.losses += 1;
  } else if (result === "tie") {
    score.ties += 1;
  }
 localStorage.setItem("score", JSON.stringify(score));
 document.querySelector(".js-para").innerHTML=result;
 document.querySelector(".js-para1").innerHTML=`you picked ${playmove},computer picked ${computermove}`;
 update();
  // alert(
  //   `you picked ${playmove},computer picked ${computermove}.${result},\nlosess are ${score.losses} \nwins are ${score.wins}\nties are ${score.ties}`
  // );
}
function mymove() {
  let randomnum = Math.random();

  let computermove = "";
  if (randomnum >= 0 && randomnum < 1 / 3) {
    computermove = "Sessiors";
  } else if (randomnum >= 1 / 3 && randomnum < 2 / 3) {
    computermove = "paper";
  } else if (randomnum >= 2 / 3 && randomnum <= 1) {
    computermove = "rock";
  }
  return computermove;
}
function reset() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  update();
}
function update()
{
  document.querySelector(".js-para2").innerHTML=`wins: ${score.wins} losess :${score.losses} ties:${score.ties}`;
}