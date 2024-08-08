// Instead of doing this:
function check<T>(obj: T): obj is T & { checked: true } {
	(obj as T & { checked: boolean }).checked = true;
	return true;
}

const person = {
	name: "John",
	age: 20,
};

if (check(person)) {
	// checked is true
	console.log(person.checked);
}

// We can use assertion signatures:
function assert(condition: unknown, msg?: string): asserts condition {
	if (!condition) throw new Error(msg);
}

function yell(str: unknown) {
	assert(typeof str === "string", "str must be a string");
	// str is a string
	console.log(str.toUpperCase());
}

// With the example earlier:
function check2<T>(obj: T): asserts obj is T & { checked: true } {
	(obj as T & { checked: boolean }).checked = true;
}

() => {
	const person = {
		name: "John",
		age: 20,
	};

	check2(person);
	console.log(person.checked);
};