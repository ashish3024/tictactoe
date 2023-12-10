let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        
        if(turnO){
            box.innerText="O";
           turnO=false; 
        } else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const resetGame=()=>{
turnO=true;
enableddbtn();
msgcontainer.classList.add("hide");

};

const enableddbtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
};
const disbaledbtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
   
};
const showwinner= (winner) => {
    msg.innerText=`congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disbaledbtn();
};
const checkwinner =()=>{
for(let patterns of winPatterns){
    let pos1val=boxes[patterns[0]].innerText;
    let pos2val=boxes[patterns[1]].innerText;
    let pos3val=boxes[patterns[2]].innerText;
    if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val&&pos2val===pos3val){
            console.log("winner",pos1val);
            showwinner(pos1val);
            
        }
    }
}
};
newGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

