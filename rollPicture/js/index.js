let index = 1; //记录当前图片位置
let time;

let images = document.querySelector(".images")
let imgLis = document.getElementsByTagName("li")
let leftCtrl = document.querySelector(".left-button");
let rightCtrl = document.querySelector(".right-button");
let ctrls = document.querySelectorAll(".ctrl");



function place() {
    //通过index来调节图片的位置
    images.style.cssText = `transform: translateX(-${(index-1)*900+20}px)`;
}
//注意left和right对于index范围的规定。
function left() {
    if (index > 3) {
        index = 1;
    } else {
        index++;
    }
}

function right() {
    if (index < 1) {
        index = imgLis.length;
    } else {
        index--;
    }
}

function timer() {
    time = setInterval(function() {
        console.log(index);
        index++;
        left();
        right();
        place();
    }, 3000)
}
leftCtrl.addEventListener("click", () => {
    left();
    place();
    clearInterval(time);
    timer();
})
rightCtrl.addEventListener("click", () => {
    right();
    place();
    clearInterval(time);
    timer();
})

ctrls.forEach((el, i, arr) => {
    el.addEventListener("click", () => {
        index = i + 1;
        place();
        clearInterval(time);
        timer();
    })
})

timer();