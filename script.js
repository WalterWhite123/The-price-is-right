// Coder le jeu du juste prix
// Mettre une interface UI


let guess = 10;

function game(random_number){
    let sec = 10;
    chrono = document.querySelector("#chrono");
    endPanel = document.querySelector("#endPanel");
    hint = document.querySelector("#hints");
    console.log(sec);
    let timer = setInterval(function(){ 
    sec--;
    
    chrono.textContent = sec;
    if (sec <= 0){
        console.log("you lost, no more time ! :)")
        endPanel.textContent = "You lost, no more time !";
        clearInterval(timer);
    }
},1000)
// input
input = document.querySelector("#input");
input.addEventListener("keyup",function(e){
    if (e.keyCode === 13){
        guess = input.value;
        input.value = "";
        if (guess > random_number ){
            hint.textContent = "less";
        console.log("less");
    }
    else if (guess < random_number){
        console.log("more");
        hint.textContent = "more";
    }
    else{
        clearInterval(timer);
        console.log("you won");
        endPanel.textContent = "You won";
        chrono.textContent = "0";
    }
    }
})
//timer 

//règle
    
}

playBtn = document.querySelector("#play");
 playBtn.addEventListener("click",()=> {
    endPanel = document.querySelector("#endPanel");
    hint = document.querySelector("#hints");

    hint.textContent = "Take a guess";
    endPanel.textContent = "Enjoy";
    game(30)});





// Gives a random interger between 0 and 1 000 000
function random_number(){
    return Math.floor(Math.random()*1000001);
}






//Input : seconds of the timer 
//Output : 1 when it is finished
// function timer(seconds){
//     let sec = seconds;
//     console.log(sec);
//     let timer = setInterval(function(){ 
//     sec--;
//     console.log(sec);
//     if (sec <= 0){
//         clearInterval(timer);
//     }
// },1000)
//     if (sec < 0){
//         return -1;
//     }
// }








