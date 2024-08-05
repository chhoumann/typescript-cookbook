type CallbackFn = () => void;

// Types
function task(name: string, dependencies: string[]): void;
function task(name: string, callback: CallbackFn): void;
function task(name: string, dependencies: string[], callback: CallbackFn): void;

// Implementation
function task(
	name: string,
	param2?: string[] | CallbackFn,
	param3?: CallbackFn,
) {
	let dependencies: string[] = [];
	let callback: CallbackFn | undefined;

	if (Array.isArray(param2)) {
		dependencies = param2;
	} else if (typeof param2 === "function") {
		callback = param2;
	}

	if (typeof param3 === "function") {
		callback = param3;
	}

	console.log(
		`Running task ${name} with dependencies ${dependencies.join(", ")}`,
	);
	callback?.();
}

task("default", ["scripts", "styles"]);
task("scripts", ["lint"], () => {
	console.log("Done running scripts.");
});
task("styles", () => {
	console.log("Running styles.");
});
