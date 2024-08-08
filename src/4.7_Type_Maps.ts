function createElement<T extends keyof HTMLElementTagNameMap>(
    tag: T,
    props?: Partial<HTMLElementTagNameMap[T]>,
): HTMLElementTagNameMap[T] {
    const element = document.createElement(tag);
    return Object.assign(element, props);
}