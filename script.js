let boxes = document.querySelectorAll(".box");
let resetGamebtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

let winPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        checkWinner();
    });
});

const checkWinner = () => {
    let winnerFound = false;
    for(let patterns of winPatterns){
        let posVal1 = boxes[patterns[0]].innerText;
        let posVal2 = boxes[patterns[1]].innerText; 
        let posVal3 = boxes[patterns[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                winnerFound = true
                showWinner(posVal1);
                return;
            }
        }
    }
    if(count === 9 && !winnerFound){
        drawGame();
    }
};

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText=`Congartulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};
const drawGame = () => {
    msg.innerText="Game was drawn";
    msgContainer.classList.remove("hide");
    disabledBoxes();
};
const resetgame = () =>{
    count = 0;
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click",resetgame);
resetGamebtn.addEventListener("click",resetgame);