const btn = document.querySelector(".btn");
const hidden = document.querySelector(".hidden");
const bottomLeft = document.querySelector(".bottom-left");
const arrow = document.querySelector(".arrow-down");
const bottomRight = document.querySelector(".bottom-right");
const right = document.querySelector(".right");
const text = document.querySelector(".text");
btn.addEventListener("click", () => {
  hidden.classList.toggle("hide");
    btn.classList.toggle("reverse-mobile");
    bottomLeft.classList.toggle("hide");
    hidden.classList.toggle("hidden-mobile");
    arrow.classList.toggle("hide");
    bottomRight.classList.toggle("bottom-right-mobile");
    right.classList.toggle("right-mobile");
    text.classList.toggle("text-mobile");
});