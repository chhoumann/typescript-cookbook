type Person = {
	name: string;
	age: number;
};

function printPerson<T extends Person>(p: T) {
    for (const k in p) {
        console.log(k, p[k]);
    }
}
