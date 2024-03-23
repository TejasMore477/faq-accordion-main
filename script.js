// let qns = document.querySelectorAll(".qns")
// let image = document.querySelector(".image")


// qns.forEach((elem) => {
//     elem.addEventListener("click",() => {
//         elem.classList.toggle("active")
//         if (elem.classList.contains("active")) {
//             image.innerHTML = `<img src="./assets/images/icon-minus.svg" alt="">`;
//         } else {
//             image.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="">`;
//         }
//     })
// })

//second attempt

let qns = document.querySelectorAll(".qns");

qns.forEach((elem) => {
    let image = elem.querySelector(".image"); //to Select image of clicked question

    elem.addEventListener("click", () => {
        elem.classList.toggle("active");
        if (elem.classList.contains("active")) {
            image.innerHTML = `<img src="./assets/images/icon-minus.svg" alt="">`;
        } else {
            image.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="">`;
        }
    });
});
