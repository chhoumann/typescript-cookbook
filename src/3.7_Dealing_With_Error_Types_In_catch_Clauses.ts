try {
    throw new Error("Error");
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    } else if (error instanceof RangeError) {
        console.log(error.message);
    } else if (error instanceof SyntaxError) {
        console.log(error.message);
    } else if (error instanceof TypeError) {
        console.log(error.message);
    } else {
        console.log("Unknown error");
    }
}