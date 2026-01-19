// Coder le jeu du juste prix
// Mettre une interface UI


// Générer un nombre aléatoire 
// Prendre les tentatives du joueurs 
// Mettre un timer 



function game(random_number){
    let guess;
    while (guess != random_number){
        guess = prompt("Take a guess: ");
        if (guess > random_number){
            alert("less");
        }
        else if (guess < random_number){
            alert("more");
        }
    }

    
}

// Gives a random interger between 0 and 1 000 000
function random_number(){
    return Math.floor(Math.random()*1000001);
}






//Input : seconds of the timer 
//Output : 1 when it is finished
function timer(seconds){
    let sec = seconds;
    console.log(sec);
    let timer = setInterval(function(){ 
    sec--;
    console.log(sec);
    if (sec <= 0){
        clearInterval(timer);
    }
},1000)
    if (sec < 0){
        return 1;
    }
}




