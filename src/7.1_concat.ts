// This is a tuple type:
type PersonProps = [string, number];

// This is a variadic tuple type:
type Foo<T extends unknown[]> = [string, ...T, number];

type T1 = Foo<[boolean]>; // [string, boolean, number]
type T2 = Foo<[number, number]>; // [string, number, number, number]
type T3 = Foo<[]>; // [string, number]

// And this is also a variadic tuple type:
type Bar<T extends unknown[], U extends unknown[]> = [...T, string, ...U];

function concat<T extends unknown[], U extends unknown[]>(
	arr1: [...T],
	arr2: [...U],
): [...T, ...U] {
	return [...arr1, ...arr2];
}

const test = concat([1, 2, 3], [6, 7, "a"]);

