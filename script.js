let btns = document.body.querySelectorAll(".box");
let game_button = document.body.querySelector(".reset");
let message_h1 = document.body.querySelector("h1");
let game_window = document.body.querySelector(".game");
const winning_position = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
let player = true;
let reset_or_new = true;

function message_for_winner(winner) {
  message_h1.style.visibility = "visible";
  message_h1.style.transition = "ease 1s";
  message_h1.style.color = "rgb(120,160,131)";
  message_h1.innerText = `Congratulations: ${winner} won`;
  game_button.innerText = "New game";
}

function check_winner() {
  for (let win of winning_position) {
    let posX = 0;
    let posO = 0;
    for (let pos of win) {
      if (btns[pos].innerText == "X") {
        posX++;
      } else if (btns[pos].innerText == "O") {
        posO++;
      }
    }
    if (posX == 3) {
      return 1;
    } else if (posO == 3) {
      return 2;
    }
  }
  return 404;
}

btns.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (player == true) {
      box.style.transition = "ease 1s";
      box.style.color = "rgb(120,160,131)";
      box.innerText = "X";
      player = false;
    } else {
      box.style.transition = "ease 1s";
      box.style.color = "rgb(120,160,131)";
      box.innerText = "O";
      player = true;
    }
    box.disabled = true;
    if (check_winner() == 1 || check_winner() == 2) {
      for (let box of btns) {
        box.disabled = true;
      }
      if (check_winner() == 1) {
        message_for_winner("Player 1");
      } else {
        message_for_winner("Player 2");
      }
    }
  });
});

game_button.addEventListener("click", () => {
  message_h1.innerText = "\n";
  game_button.innerText = "Reset";
  message_h1.style.color = "rgba(120,160,131,0)";
  for (let box of btns) {
    box.style.color = "rgba(120,160,131,0.1)";
    box.innerHTML = ""
    box.disabled = false;
    player = true;
  }
});
