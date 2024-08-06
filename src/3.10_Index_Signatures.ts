type MetricCollection = {
    [domain: string]: number;
}


type MetricCollection2 = {
    [domain in string]?: number;
}

type Throws = {
    [key in "rock" | "paper" | "scissors"]: number;
}

// OK
type ElementCollection = {
    [y: number]: HTMLElement | undefined;
    get(index: number): HTMLElement | undefined;
    length: number;
    filter(predicate: (element: HTMLElement) => boolean): ElementCollection;
}

// Not OK
// type StringDict = {
//     [index: string]: string;
//     count: number;
// }