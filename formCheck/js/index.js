let tLogin = document.getElementsByClassName("tel-login")[0];
let eLogin = document.getElementsByClassName("email-login")[0];
let submit = document.querySelector("[type='submit']");
let wrapper = document.querySelector(".input-wrapper");
let user = document.querySelector(".left").getElementsByTagName("input")[0];
let pwd = document.querySelector(".left").getElementsByTagName("input")[1];
eLogin.addEventListener("click", function() {
    wrapper.style.cssText = "transform: translateX(-50%);"
    eLogin.classList.toggle("active");
    tLogin.classList.toggle("active");
})
tLogin.addEventListener("click", function() {
    wrapper.style.cssText = "transform: translateX(0);"
    eLogin.classList.toggle("active");
    tLogin.classList.toggle("active");
})
submit.addEventListener("click", function() {
    if (user.value === "root" && pwd.value.toString() === "123456") {
        alert("欢迎回来，root！");
    } else {
        alert("账号或密码有误！");
    }
})