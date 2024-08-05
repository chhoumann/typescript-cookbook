type Person = {
	name: string;
	age: number;
};

function getPersonTyped(): Person {
	return {
		name: "John",
		age: 30,
	};
}

function getPersonNotTyped() {
	return {
		name: "John",
		age: 30,
	};
}

function printPerson(person: Person) {
	console.log(person.name, person.age);
}

// Both OK!
printPerson(getPersonTyped());
printPerson(getPersonNotTyped());