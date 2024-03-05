let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#newbtn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

let turn0 = true;//player0

const winPatterns = [
    [0,1,2],
    [0,3,6,],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

//resetGame
const restGame = () =>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

//for loop
boxes.forEach((box) => {
box.addEventListener("click", () => {

    if(turn0==true) //PLAYER 0
    {
        box.innerText = "0";
        turn0=false;
    }
    else{//PLAYER X
        box.innerText = "X";
        turn0=true;
    }
    box.disabled=true;

    checkWinner();
});

});

//disable buttons
const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
}
};

//enable buttons
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
}
};

//show winner
const showWinner = (winner) => {
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes(); 
};

//check winner
checkWinner = () => {
for(let pattern of winPatterns)
{
let posVal1 = boxes[pattern[0]].innerText;
let posVal2 = boxes[pattern[1]].innerText;
let posVal3 = boxes[pattern[2]].innerText;

if(posVal1!="" && posVal2!="" && posVal3!="")
{
    if(posVal1 === posVal2 && posVal2=== posVal3)
    {
        console.log("winner",posVal1);
           
        showWinner(posVal1);
    }
}
}
};

//calling eventlistener on new and reset button
newbtn.addEventListener("click",restGame);
resetbtn.addEventListener("click",restGame);