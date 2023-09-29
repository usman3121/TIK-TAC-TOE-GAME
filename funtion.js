const boxes = Array.from(document.getElementsByClassName("box"));

const reset = document.getElementById("resetbtn");
reset.addEventListener("click", resetb);
const headerText = document.getElementById("header");

const areas = [null, null, null, null, null, null, null, null, null];
const o_text = "o";
const x_text = "x";
let currentPlayer = o_text;
let winboxesIds = [];

function bindClickEvent() {
  boxes.forEach((box) => {
    box.addEventListener("click", handleClick);
  });
}

bindClickEvent();

function handleClick(e) {
  // alert(e.target.id);
  if (winboxesIds.length > 0) {
    return;
  }

  const id = e.target.id;
  if (!areas[id]) {
    areas[id] = currentPlayer;
    e.target.innerHTML = currentPlayer;

    if (playerwin(currentPlayer)) {
      headerText.innerHTML = `${currentPlayer} has won the match!!`;

      headerText.style.background = "lightgreen";

      changeWinBoxColor();
      return;
    }

    currentPlayer = currentPlayer === o_text ? x_text : o_text;
  }
}

function playerwin(cPlayer) {
  if (areas[0] === cPlayer) {
    if (areas[1] === cPlayer && areas[2] === cPlayer) {
      winboxesIds = [0, 1, 2];
      return true;
    }
    if (areas[3] === cPlayer && areas[6] === cPlayer) {
      winboxesIds = [0, 3, 6];
      return true;
    }
    if (areas[4] === cPlayer && areas[8] === cPlayer) {
      winboxesIds = [0, 4, 8];
      return true;
    }
  }
  if (areas[4] === cPlayer) {
    if (areas[1] === cPlayer && areas[7] === cPlayer) {
      winboxesIds = [4, 1, 7];
      return true;
    }
    if (areas[3] === cPlayer && areas[5] === cPlayer) {
      winboxesIds = [4, 3, 5];
      return true;
    }
    if (areas[2] === cPlayer && areas[6] === cPlayer) {
      winboxesIds = [4, 2, 6];
      return true;
    }
    if (areas[0] === cPlayer && areas[8] === cPlayer) {
      winboxesIds = [4, 0, 8];
      return true;
    }
  }
  if (areas[8] === cPlayer) {
    if (areas[2] === cPlayer && areas[5] === cPlayer) {
      winboxesIds = [8, 2, 5];
      return true;
    }
    if (areas[6] === cPlayer && areas[7] === cPlayer) {
      winboxesIds = [8, 6, 7];
      return true;
    }
    if (areas[0] === cPlayer && areas[4] === cPlayer) {
      winboxesIds = [8, 0, 4];
      return true;
    }
  }
}
function changeWinBoxColor() {
  winboxesIds.forEach((id) => {
    boxes[id].style.background = "lightgreen";
  });
  boxes.forEach((box) => {
    box.style.cursor = "not-allowed";
  });
}

function resetb() {
  winboxesIds = [];
  areas.forEach((val, index) => {
    areas[index] = null;
  });
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.style.background = "";
    box.style.cursor = "pointer";
  });
  headerText.innerHTML = "LETS START THE GAME Again..!";
  headerText.style.background = "";
}
