let j = Math.floor(Math.random()*700) + 100;
function showNum(){
   
    for(let i=0; i<4 ;i++){
        let randomNum = document.querySelectorAll("#middleBoxes h1")[i];
        let random = Math.floor(Math.random()*10) + 1;
        j = j + random;
        
        randomNum.textContent = j;

    }

}
setInterval(showNum,3000);


let k = Math.floor(Math.random()*50) + 1;
function showNew(){
   
    for(let a=0; a<8 ;a++){
        let randomNew = document.querySelectorAll("#smallbox-bottom h2")[a];
        let nume = Math.floor(Math.random()*5) + 1;
        k = k + nume;
        
        randomNew.textContent = k;

    }

}
setInterval(showNew,5000); 

const nightMode = document.querySelector("#right-button>#theme-switcher");
const modeCircle = document.querySelector("#theme-switcher>div");
const Body = document.querySelector("body");
const bigBoxes = document.querySelectorAll("#bigBoard>#boxes");
const smallBoxes = document.querySelectorAll("#smallBoard>#smallBoxes");

function nightModeOn(){
    
if(modeCircle.style.float==="left"){
    nightMode.style.background = "linear-gradient(red,darkblue) ";
    modeCircle.style.background = "white";
    modeCircle.style.border ="white";
    modeCircle.style.float = "right";
    Body.style.color="white";
    Body.style.background="black";
    for(let p=0;p<bigBoxes.length;p++){
    bigBoxes[p].style.background = "#152238";
    }
    for(let q=0;q<smallBoxes.length;q++){
    smallBoxes[q].style.background = "#152238";
    }
 
}else{
    nightMode.style.background = "grey ";
    modeCircle.style.background = "white";
    modeCircle.style.float = "left";
    Body.style.background = "#fafafa";
    Body.style.color="black";
    for(let p=0;p<bigBoxes.length;p++){
        bigBoxes[p].style.background = "#f3f3f3";
        }
    for(let q=0;q<smallBoxes.length;q++){
        smallBoxes[q].style.background = "#f3f3f3";
        }
}
}

nightMode.addEventListener("click",nightModeOn);