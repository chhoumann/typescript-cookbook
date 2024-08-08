interface ComponentConstructor {
	new (): Component;
}

interface Component {
	render(): HTMLElement;
}

type Route = {
	path: string;
	component: Component;
};

function router<const T extends Route>(routes: T[]) {
	return {
		navigate(path: T["path"]) {
			// ...
		},
	};
}

const Main: Component = {
	render() {
		return document.createElement("div");
	},
};

const About: Component = {
	render() {
		return document.createElement("div");
	},
};

const rtr = router([
	{
		path: "/",
		component: Main,
	},
	{
		path: "/about",
		component: About,
	},
]);

rtr.navigate("/")