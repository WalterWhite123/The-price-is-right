input = document.querySelector("#input");
playBtn = document.querySelector("#play");
chronoPanel = document.querySelector("#chrono");
hintPanel = document.querySelector("#hints");


let guess;
let random_number;


input.addEventListener("keyup",function(event){
    if (event.keyCode == "13"){
        guess = Number(input.value);
        input.value = null;
    }
    if (guess < random_number){
        hintPanel.textContent = "more";
    }
    else if (guess > random_number){
        hintPanel.textContent = "less";
    }
    else if (guess === random_number){
        endPanel.textContent = "You won";
        
    }
});


function game(){
// Reset
input.value = "";
chronoPanel.textContent = 90;
chronoPanel.style.cssText = "background-color: rgb(231, 228, 231);"
hintPanel.textContent = "Ready ?"; 
endPanel.textContent = "Enjoy";

//Timer
    let seconds = 90;
    let timer = setInterval(()=>{
        if (seconds == 30){
            chronoPanel.style.cssText = "background-color:#FFFF38;";
        }
        if (seconds == 10){
            chronoPanel.style.cssText = "background-color:#FF5B61;";
        }
        chronoPanel.textContent= seconds;
        seconds--; 
        if (seconds < 0 || guess == random_number){
             clearInterval(timer);
             if (guess != random_number)
                endPanel.textContent = "You lost";
              
        }
           
    },1000)
    playBtn.addEventListener("click",()=> clearInterval(timer));
}


playBtn.addEventListener("click",()=>{
    random_number = Math.floor(Math.random()*31);
    console.log(random_number);
    game();
});