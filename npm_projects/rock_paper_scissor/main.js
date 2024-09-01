// let user=await inquirer .prompt([
//     {
//         name:'select',
//         type:'list',
//         message:'Select your '
//     }
// ])
// rock-paper-scissors.ts
var Choice;
(function (Choice) {
    Choice[Choice["Rock"] = 0] = "Rock";
    Choice[Choice["Paper"] = 1] = "Paper";
    Choice[Choice["Scissors"] = 2] = "Scissors";
})(Choice || (Choice = {}));
class Game {
    playerChoice;
    computerChoice;
    constructor() {
        this.playerChoice = Choice.Rock; // default choice
        this.computerChoice = this.getRandomChoice();
    }
    getRandomChoice() {
        return Math.floor(Math.random() * 3);
    }
    play(choice) {
        this.playerChoice = choice;
        this.computerChoice = this.getRandomChoice();
        this.determineWinner();
    }
    determineWinner() {
        console.log(`You chose: ${this.getChoiceString(this.playerChoice)}`);
        console.log(`Computer chose: ${this.getChoiceString(this.computerChoice)}`);
        if (this.playerChoice === this.computerChoice) {
            console.log("It's a tie!");
        }
        else if ((this.playerChoice === Choice.Rock && this.computerChoice === Choice.Scissors) ||
            (this.playerChoice === Choice.Scissors && this.computerChoice === Choice.Paper) ||
            (this.playerChoice === Choice.Paper && this.computerChoice === Choice.Rock)) {
            console.log("You win!");
        }
        else {
            console.log("Computer wins!");
        }
    }
    getChoiceString(choice) {
        switch (choice) {
            case Choice.Rock:
                return "Rock";
            case Choice.Paper:
                return "Paper";
            case Choice.Scissors:
                return "Scissors";
            default:
                return "";
        }
    }
}
const game = new Game();
console.log("Welcome to Rock-Paper-Scissors!");
console.log("Enter your choice (1 for Rock, 2 for Paper, 3 for Scissors):");
process.stdin.on("data", (data) => {
    const choice = parseInt(data.toString().trim());
    switch (choice) {
        case 1:
            game.play(Choice.Rock);
            break;
        case 2:
            game.play(Choice.Paper);
            break;
        case 3:
            game.play(Choice.Scissors);
            break;
        default:
            console.log("Invalid choice. Try again!");
    }
});
export {};
