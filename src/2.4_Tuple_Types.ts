// Tuple type:
const person: [string, number] = ["Christian", 25];

// With labels:
type Person = [name: string, age: number];

function hello(...args: [name: string, age: number]) {
	console.log(`Hello ${args[0]}, you are ${args[1]} years old`);
}

hello("John", 30);
