window.addEventListener("load", () => {
    addObservers();
});

const addObservers = () => {
    const addSquare = () => {
        if (demo.childElementCount < 20) {
            const square = document.createElement("div")
            square.className = "square"
            square.textContent = demo.childElementCount + 1
            demo.appendChild(square)
        }
    }

    const removeSquare = () => {
        if (demo.lastElementChild) {
            demo.removeChild(demo.lastElementChild)
        }
    }
    const onSelectChange = e => {
        const classList = demo.classList
        for(const className of classList){
            if (new RegExp(e.target.id).test(className)) {
                demo.classList.remove(className)
            }
        }
        demo.classList.add(`${e.target.id}-${e.target.value}`)
    }

    document.querySelector(".add").addEventListener("click", addSquare)
    document.querySelector(".remove").addEventListener("click", removeSquare)
    const demo = document.querySelector(".demo")

    const selects = document.querySelectorAll("select")
    selects.forEach(select => select.addEventListener("change", onSelectChange))
}

