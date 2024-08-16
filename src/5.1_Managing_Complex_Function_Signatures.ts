type StringLabel = {
	name: string;
};

type NumberLabel = {
	id: number;
};

// You can solve this with overloads:
function createLabel(input: number): NumberLabel;
function createLabel(input: string): StringLabel;
function createLabel(input: number | string): NumberLabel | StringLabel {
	if (typeof input === "number") {
		return { id: input };
	}

	return { name: input };
}

// But what if we can't narrow the input type beforehand?
// This errors (no overload matches this call):
// function inputToLabel(input: string | number) {
// 	return createLabel(input);
// }

// type GetLabel<T> = T extends string | StringLabel ? StringLabel : NumberLabel;

type GetLabel<T> = T extends string | StringLabel
	? StringLabel
	: T extends number | NumberLabel
		? NumberLabel
		: never;

function CreateLabel1<T extends number | string | StringLabel | NumberLabel>(
	input: T,
): GetLabel<T> {
	if (typeof input === "number") {
		return { id: input } as GetLabel<T>;
	}

	if (typeof input === "string") {
		return { name: input } as GetLabel<T>;
	}

	if ("id" in input) {
		return { id: input.id } as GetLabel<T>;
	}

	return { name: input.name } as GetLabel<T>;
}
