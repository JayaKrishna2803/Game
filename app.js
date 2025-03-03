let boxes=document.querySelectorAll(".box");
let rest=document.querySelector("#reset");

let newgame=document.querySelector("#newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true;

const winning =[
    [0,1,2],
    [0,3,6], 
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const reset=()=>{
    turno=true;
    enableboxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
if(turno){
 box.innerText="O"
 turno=false
}
else{
    box.innerText="X"
    turno=true
}
box.disabled=true;
checkWinner();   
    })
}
);
const disabledboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`CONGRATULATIONS WINNER IS ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes();
}
const checkWinner=()=>{
    for(let pattern of winning){

        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2&&pos2===pos3){
            showWinner(pos1);
        }
    }
    }
}
newgame.addEventListener("click",reset);
rest.addEventListener("click",reset);