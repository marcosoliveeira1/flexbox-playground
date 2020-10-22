window.addEventListener("load", () => addThemeObserver());

const addThemeObserver = () => {

    const switchTheme = () => {
        const body = document.querySelector("body");
        if (themeSwitch.checked) {
            body.classList.remove('dark-mode')
        } else {
            body.classList.add('dark-mode')
        }
    }

    const themeSwitch = document.querySelector("input[id=switch]");

    themeSwitch.addEventListener("click", switchTheme)
}