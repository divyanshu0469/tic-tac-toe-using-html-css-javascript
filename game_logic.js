let playerText = document.getElementById('playerText');
let restartBtn = document.getElementById('restartBtn');
let boxes = Array.from(document.getElementsByClassName('box'));
 

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

console.log(spaces);

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));
}

function boxClicked(e) {
    if (playerText === `${currentPlayer} has won!`) {
        return;
    }

    const id = e.target.id;
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        if(playerHasWon(spaces)){
            playerText.innerText = `${currentPlayer} has won!`;
            spaces.fill(null);
            boxes.forEach(box => {
                box.innerText = `${currentPlayer}`;
            })
        }
        currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
        
    }
}

function playerHasWon(spaces) {
    // Horizontal
    if (
      (spaces[0] == spaces[1] && spaces[1] == spaces[2] && spaces[0] != null) ||
      (spaces[3] == spaces[4] && spaces[4] == spaces[5] && spaces[3] != null) ||
      (spaces[6] == spaces[7] && spaces[7] == spaces[8] && spaces[6] != null)
    ) {
      return true;
    }
    // Vertical
    if (
      (spaces[0] == spaces[3] && spaces[3] == spaces[6] && spaces[0] != null) ||
      (spaces[1] == spaces[4] && spaces[4] == spaces[7] && spaces[1] != null) ||
      (spaces[2] == spaces[5] && spaces[5] == spaces[8] && spaces[2] != null)
    ) {
      return true;
    }
    // Diagonal
    if (
      (spaces[0] == spaces[4] && spaces[4] == spaces[8] && spaces[0] != null) ||
      (spaces[2] == spaces[4] && spaces[4] == spaces[6] && spaces[2] != null)
    ) {
      return true;
    }
    return false;
}

restartBtn.addEventListener('click', restart);
function restart(){
    spaces.fill(null);
    boxes.forEach(box => {
        box.innerText = '';
    })
    currentPlayer = X_TEXT;
    playerText.innerText = 'Tic Tac Toe';
}
startGame();