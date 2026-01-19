// Coder le jeu du juste prix
// Mettre une interface UI


// Générer un nombre aléatoire 
// Prendre les tentatives du joueurs 
// Mettre un timer 


// Gives a random interger between 0 and 1 000 000
function random_number(){
    return Math.floor(Math.random()*1000001);
}

// console.log(random_number());



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

game(random_number());