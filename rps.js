function game() {
    var rockPaperScissors = ["Rock","Paper","Scissors"];
    var computerPick = Math.floor(Math.random() * 3);
    var playerPick = prompt("Please enter 0,1,2 for Rock, Paper, or Scissors:");

    console.log("I picked " + rockPaperScissors[computerPick]);
    console.log("You picked " + rockPaperScissors[playerPick]);

    if (computerPick - playerPick == 0)
    {
        document.write("Draw!");
    }
    else if ((computerPick - playerPick == -2) || (computerPick - playerPick == 1))
        {
            document.write("My " + rockPaperScissors[computerPick] + " beats your " + rockPaperScissors[playerPick] + "!\n");
            document.write("\nI win!  Bow before your robotic overlords!");
        }
    else 
        {
            document.write("Your " + rockPaperScissors[playerPick] + " beats my " + rockPaperScissors[computerPick] + "!\n");
            document.write("\nYou win this time meat-bag!");
        }
}
game();