let radios = document.querySelector(".ctrl-wrapper").getElementsByTagName("input");
let picWrapper = document.querySelector(".pic-wrapper");


for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", function() {
        picWrapper.style.transform = `translateX(-${i*20}%)`;
    })
}

// for (let i = 0; i < radios.length; i++) {
//     setInterval(function() {
//         picWrapper.style.transform = `translateX(-${i*20}%)`;
//     }, 4000)
// }