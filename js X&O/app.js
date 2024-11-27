let box = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newbtn");
let msgcon = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enablebox();
    msgcon.classList.add("hide");
}

box.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
            box.classList.add("x")
        }else{
            box.innerText = "X";
            turnO = true;
            box.classList.add("o")
        }
        box.disabled = true;

        checkWinner();
    });
});

const disablebox = () => {
    for(let boxes of box) {
        boxes.disabled = true; // Corrected reference
    }
}

const enablebox = () => {
    for (let boxes of box) {
        boxes.disabled = false; // Enable the boxes
        boxes.innerText = ""; // Clear the text for each box
        boxes.classList.remove("o"); // Remove the "o" class
        boxes.classList.remove("x"); // Remove the "x" class
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulations, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disablebox();
}

const checkWinner = () => {
    for (let patten of winPattern) {
        let pos1Val = box[patten[0]].innerText;
        let pos2Val = box[patten[1]].innerText;
        let pos3Val = box[patten[2]].innerText;
        
        if(pos1Val != "" && pos2Val != ""  && pos3Val !="") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }    
    }
};


newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);