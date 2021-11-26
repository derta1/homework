let next = document.querySelectorAll("button")[0];
let prev = document.querySelectorAll("button")[1];
let progress = document.querySelector(".progress");
let cirs = document.querySelectorAll(".circle");
//已经完成的步数
let index = 0;

next.addEventListener("click", function() {
    index++;
    progress.style.width = 33.3 * index + '%';
    for (let i = 0; i < index + 1; i++) {
        cirs[i].style.border = "solid 3px #0097e6"
    }
    if (index === 3) {
        next.setAttribute("disabled", "disabled");
    } else {
        next.removeAttribute("disabled")
    }
})

prev.addEventListener("click", function() {
    index--;
    progress.style.width = 33.3 * index + '%';
    for (let i = 3; i > index - 1; i--) {
        cirs[i].style.border = "solid 3px #7f8fa6"
    }
    if (index === 0) {
        prev.setAttribute("disabled", "disabled");
    } else {
        prev.removeAttribute("disabled");
    }
})

setInterval(function() {

    if (index === 0 | index === 3) {
        index == 0 ? prev.setAttribute("disabled", "disabled") : next.setAttribute("disabled", "disabled");
    } else {
        next.removeAttribute("disabled");
        prev.removeAttribute("disabled");
    }

})