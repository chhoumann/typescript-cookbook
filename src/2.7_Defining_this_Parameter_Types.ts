const button = document.querySelector("button");
button?.addEventListener("click", handleToggle);

function handleToggle(this: HTMLButtonElement) {
    this.classList.toggle("active");
}

type TogglFn = typeof handleToggle;

type WithoutThis = OmitThisParameter<TogglFn>;

type TogglFnThis = ThisParameterType<TogglFn>;