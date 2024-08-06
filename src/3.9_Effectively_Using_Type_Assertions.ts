type Dice = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): Dice {
	const num = Math.floor(Math.random() * 6) + 1;
	return num as Dice;
}

const result = rollDice();

type Person = {
	name: string;
	age: number;
};

const people: Person[] = await fetch("/api/people").then((res) => res.json());
const people2 = (await fetch("/api/people").then((res) =>
	res.json(),
)) as Person[];

