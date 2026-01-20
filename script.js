input = document.querySelector("#input");
playBtn = document.querySelector("#play");
chronoPanel = document.querySelector("#chrono");
hintPanel = document.querySelector("#hints");


let guess;
let random_number = 30;

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
    let seconds = 10;
    let timer = setInterval(()=>{
        chronoPanel.textContent= seconds;
        seconds--; 
        if (seconds < 0 || guess == random_number){
             clearInterval(timer);
             if (guess != random_number)
                endPanel.textContent = "You lost";
        }
           

    },1000)
}


game();