import { createBuilderStatusReporter } from "typescript";

type EventName = `on${string}`;

type EventObject<T> = {
	val: T;
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type Callback<T = any> = (event: EventObject<T>) => void;

type Events = {
	[x: EventName]: Callback[] | undefined;
};

class EventSystem {
	events: Events;

	constructor() {
		this.events = {};
	}

	defineEventHandler(event: EventName, cb: Callback): void {
		this.events[event] = this.events[event] ?? [];
		this.events[event]?.push(cb);
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	trigger(event: EventName, value: any) {
		const callbacks = this.events[event];
		if (callbacks) {
			for (const callback of callbacks) {
				callback({ val: value });
			}
		}
	}
}


const system = new EventSystem();

// @ts-expect-error
system.defineEventHandler("click", () => {});

system.defineEventHandler("onClick", () => {});
system.defineEventHandler("onchange", () => {});