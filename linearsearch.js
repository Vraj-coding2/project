let parent = document.getElementsByClassName("boxes")[0];
let lengthNum = document.getElementById("lengthInput");
let disVal = document.getElementById("answerInput");
const inputval = document.getElementById("inputval");
let values = [];

inputval.addEventListener("click",function getInput(){
let inputval = document.getElementById("lengthInput").value;
for(let i = 1;i <= inputval;i++){
 let div = document.createElement("input");
    div.classList.add("val");
    parent.appendChild(div);
 }
 let button = document.createElement("button");
 button.classList.add(".btn");
 button.textContent = "Submit";
 button.classList.add("btn");
 parent.appendChild(button);
 button.addEventListener("click",storeValues);
 button.addEventListener("click",findvalues);
});


function storeValues(){
    values = [];
    let inputsval = document.querySelectorAll(".boxes input");
    inputsval.forEach(input => {
        values.push(Number(input.value));
    })
}
let findval = document.getElementById("findval");
function findvalues(){
    let target = Number(document.getElementById("targetInput").value);
    let valuelen = values.length;
    let found = false;
    for(let i = 0;i < valuelen;i++){
        if(values[i] === target){
            disVal.textContent =  `your value is ${i}`;
            found = true;
            break;
          }
    }
    if(!found)  disVal.textContent = "you enter wrong value :";
}
findval.addEventListener("click",findvalues);


document.addEventListener("keydown",function(event) {
let inputs = document.querySelectorAll("input");
 let activeElement = document.activeElement;
let currentindex = Array.from(inputs).indexOf(activeElement);

if((event.key === "ArrowRight" || event.key === "ArrowDown") && currentindex < inputs.length-1){
  inputs[currentindex + 1].focus();
}

if((event.key === "ArrowLeft" || event.key === "ArrowUp") && currentindex < inputs.length-1){
    inputs[currentindex - 1].focus();
 }
  });

