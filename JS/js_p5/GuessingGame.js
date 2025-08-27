const max  = prompt("Enter the number between 1 to 10");
const random = Math.floor(Math.random() * max) +1 ;
console.log(random);

  let guess = prompt("Enter your guess");

  while(true){
    if (guess == "quit"){
        console.log("You quit the game");
        break;
    }
    else if (guess == random){
        console.log("You win", random);
        break;
    }

    else if (guess < random){
        guess = prompt(" Your guess was to small plese try again");
    }
    else if (guess > random){
       
        guess = prompt(" Your guess was to high plese try again");
    }
    
  }
