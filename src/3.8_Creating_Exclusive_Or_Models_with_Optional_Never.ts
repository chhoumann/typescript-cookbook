type SelectBase = {
	options: string[];
};

type SingleSelect = SelectBase & {
	value: string;
    values?: never;
};

type MultiSelect = SelectBase & {
	values: string[];
    value?: never;
};

type SelectProperties = SingleSelect | MultiSelect;

function selectCallback(params: SelectProperties) {
	if ("value" in params) {
		// single case
	} else if ("values" in params) {
		// multi case
	}
}

selectCallback({
	options: ["a", "b", "c"],
	value: "a",
});

selectCallback({
	options: ["a", "b", "c"],
	values: ["a", "b"],
});
