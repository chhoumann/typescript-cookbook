// biome-ignore lint/suspicious/noExplicitAny: 
function log<This, Args extends any[], Return>(
	value: (this: This, ...args: Args) => Return,
	context: ClassMethodDecoratorContext,
) {
	return function (this: This, ...args: Args) {
		console.log(`calling ${context.name.toString()}`);
		return value.call(this, ...args);
	};
}

class Toggler {
	#toggled = false;

	@log
	toggle() {
		this.#toggled = !this.#toggled;
	}
}

const toggler = new Toggler();
toggler.toggle();
