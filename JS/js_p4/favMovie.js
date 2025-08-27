const favmovie = "avangers";

let guess = prompt("Guess my favorite movie: ");

while ((guess !== favmovie) && (guess !== "quit")) {
    if (guess == "quit") {
        console.log("You quit the game.");
        break;
    }
    guess = prompt("Wrong guess, try again! (or type 'quit' to exit");
}

if (guess === favmovie) {
    console.log("Congratulations!!..");
} 
console.log("Game Over!");








let i = 1 ;
while (i <= 10) {
    if (i == 3){
        break; // Exit the loop when i is 3
    }
        console.log(i);
        i++;
    }