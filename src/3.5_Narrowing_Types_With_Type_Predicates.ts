type Dice = 1 | 2 | 3 | 4 | 5 | 6;

function isDice(value: number): value is Dice {
    return [1, 2, 3, 4, 5, 6].includes(value);
}

function rollDice(input: number) {
    if (isDice(input)) {
        // Input is `Dice`
    } else {
        // Input is `number`
    }
}