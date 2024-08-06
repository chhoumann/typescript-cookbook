const i = void 2;

void (function aRecursion(i: number) {
	if (i > 0) {
		console.log(i - 1);
		aRecursion(i - 1);
	}
})(3);

// function middleware(nextCallback: () => void) {
//     if (conditionApplies()) {
//         return void nextCallback();
//     }
// }

// button.onclick = () => void doSomething();

function fetchResults(
	callback: (statusCode: number, results: number[]) => void,
) {
	callback(200, [1, 2, 3]);
}

function handleResults(statusCode: number, results: number[]): void {
	console.log(statusCode, results);
}

fetchResults(handleResults);

function handler(statusCode: number): boolean {
	// Evalate status code ...
	return true;
}

// Works, even if the return type is not void!
fetchResults(handler);