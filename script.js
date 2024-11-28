let boxes= document.querySelectorAll(".box");

let turn0=true;


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }

        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    })
}

);

const checkwinner=()=>{
    
}