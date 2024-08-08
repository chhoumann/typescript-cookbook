type URLList = {
	[key: string]: URL;
};

const languages: URLList = {
	de: new URL("https://de.wikipedia.org"),
	en: new URL("https://en.wikipedia.org"),
	pt: new URL("https://pt.wikipedia.org"),
	es: new URL("https://es.wikipedia.org"),
	fr: new URL("https://fr.wikipedia.org"),
	ja: new URL("https://ja.wikipedia.org"),
};

function foo<List extends URLList>(urls: List, key: keyof List) {
	return urls[key];
}

const site = foo(languages, "en");
console.log(site);

function bar<List extends URLList, Keys extends keyof List>(
	urls: List,
	keys: Keys[],
) {
	const r = keys.map(async (el) => {
		const res = await fetch(urls[el]);
		const data: string = await res.text();
		const entry: [Keys, typeof data] = [el, data];
		return entry;
	});

	return r;
}

const sites = bar(languages, ["en", "de"]);
console.log(sites);