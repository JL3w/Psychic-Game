
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
console.log(computerChoice)


var psychic = {
    wins: 0,
    losses: 0,
    guessesLeft: 10,
    guessesSoFar: [],

    gameReset: function() {
        this.guessesLeft = 10;
        this.guessesSoFar = [];
        computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    }
}

var html =
          "<H2>Wins: " + psychic.wins + "</h2>" +
          "<h2>Losses: " + psychic.losses + "</h2>" +
          "<h2>Guesses Left: " + psychic.guessesLeft + "</h2>" +
          "<h2>Guessed so far: " + psychic.guessesSoFar + "<h2>";

        document.querySelector("#game-content").innerHTML = html;

document.onkeyup = function(event) {
    var guessedLetter = event.key.toLowerCase();
    console.log(guessedLetter);
    console.log(computerChoice);
    if (guessedLetter === computerChoice) {
        psychic.wins++;
        alert("Congrats you're an Indigo, you selected " + guessedLetter + " and you picked correctly with " + [psychic.guessesLeft] + " guesses left!" );
        psychic.gameReset();

    }

    else {
        psychic.guessesLeft--;
        psychic.guessesSoFar.push(guessedLetter)
        if (psychic.guessesLeft < 1) {
            psychic.losses++;
            alert("You done goofed, you guessed " + [psychic.guessesSoFar] + " and you still couldn't get it, total Normie.");
            psychic.gameReset();
        }
    }

    var html =
          "<H2>Wins: " + psychic.wins + "</h2>" +
          "<h2>Losses: " + psychic.losses + "</h2>" +
          "<h2>Guesses Left: " + psychic.guessesLeft + "</h2>" +
          "<h2>Guessed so far: " + psychic.guessesSoFar + "<h2>";

        document.querySelector("#game-content").innerHTML = html;
}

