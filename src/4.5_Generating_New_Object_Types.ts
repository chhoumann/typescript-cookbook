type Group1<
	Collection extends Record<string, any>,
	Selector extends keyof Collection,
> = {
	[x in Collection[Selector]]: Collection[];
};

type Group2<Collection, Selector extends keyof Collection> = {
	[k in Collection[Selector] extends string
		? Collection[Selector]
		: never]?: Collection[];
};

type ToyBase = {
	name: string;
	description: string;
	minimumAge: number;
};

type BoardGame = ToyBase & {
	kind: "boardgame";
	players: number;
};

type Puzzle = ToyBase & {
	kind: "puzzle";
	pieces: number;
};

type Toy = BoardGame | Puzzle;
type GroupedToys = Partial<Group2<Toy, "kind">>;

function groupToys(toys: Toy[]): GroupedToys {
	const groups: GroupedToys = {};

	for (const toy of toys) {
		groups[toy.kind] = groups[toy.kind] ?? [];
		groups[toy.kind]?.push(toy);
	}

	return groups;
}
