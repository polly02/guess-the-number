//Попробуй угадать число, полученное с помощью рандомайзера

class GuessNumber {

    number = Math.round(Math.random() * 100);

    game() {
        for (; ;) {
            let query = prompt("Do you want to play game? (yes/no, +/-) \nYou need to guess the number from 0 to 100");
            if (query === "no" || query === "-") {
                break
            } else if (query === "yes" || query === "+") {
                this.guessTheNumber(this.number)
            }
        }
    }

    guessTheNumber(number) {
        let input = +prompt("Try to guess the number");
        if (input < 100 || input > 0 || !isNaN(input)) {
            if (input === number) {
                alert(`You guessed, it is ${input}, congratulations!`);
                return number
            } else if (input < number) {
                alert("Too little, try again");
                return this.guessTheNumber(number)
            } else if (input > number) {
                alert("Too much, try again");
                return this.guessTheNumber(number)
            }
        } else {
            alert("Repeat input")
            return this.guessTheNumber(number)
        }
    }
}

const guessNumber = new GuessNumber()
guessNumber.game()
