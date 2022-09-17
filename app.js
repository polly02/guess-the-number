//Загадай число, пусть программа попробует угадать его

for (; ;) {
    let query = prompt("Do you want to play game? (yes/no, +/-)");
    if (query === "no" || query === "-") {
        break;
    } else if (query === "yes" || query === "+") {
        let number = +prompt("Enter the number from 0 to 100");
        guessTheNumber(number);
    }
}

function guessTheNumber(num) {
    let start = 0;
    let end = 100;
    let middle = Math.floor((start + end) / 2);
    for (let i = 0; i <= 100; i++) {
        if (middle === num) {
            let question = prompt(`Is it ${middle}?`);
            if (question === "yes") {
                alert(`We guessed it, congratulations`);
                return num;
            } else {
                alert("Let's try again");
                break;
            }
        } else {
            let input = prompt(`Have you entered a number greater than ${middle}? (yes/no, +/-)`);
            if (input === "yes" || input === "+") {
                alert("Let's try again");
                start = middle + 1;
            } else if (input === "no" || input === "-") {
                alert("Let's try again");
                end = middle - 1;
            }
            middle = Math.floor((start + end) / 2);
        }
    }
    return middle;
}