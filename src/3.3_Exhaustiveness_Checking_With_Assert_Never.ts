type Circle = {
    radius: number;
    kind: "circle";
}

type Square = {
    x: number;
    kind: "square";
}

type Triangle = {
    x: number;
    y: number;
    kind: "triangle";
}

type Rectangle = {
    x: number;
    y: number;
    kind: "rectangle";
}

// Errors if you include Rectangle, as it isn't handled in the switch statement
type Shape = Circle | Square | Triangle;
// type Shape = Circle | Square | Triangle | Rectangle;

function assertNever(x: never): never {
    throw new Error(`Unexpected object: ${x}`);
}

function area(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.x * shape.x;
        case "triangle":
            return shape.x * shape.y / 2;
        default: {
            // You can do:
            assertNever(shape);

            // Or you can do:
            // const _exhaustiveCheck: never = shape;
            // return _exhaustiveCheck;
        }
    }
}

// Need to excplicitly define it as `Circle` or you get an error.
// (or see 3.4!)
const c = {
    radius: 1,
    kind: "circle" as const,
};

console.log(area(c));