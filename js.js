const btn = document.querySelector(".btn")
const hidden = document.querySelector(".hidden")
btn.addEventListener("click", () => {
    hidden.classList.toggle("hide")
    btn.classList.toggle("reverse")
})
