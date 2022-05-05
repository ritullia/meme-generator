let imgUrl = document.querySelector(".photo");
let textUp = document.getElementById("firstText");
let textBottom = document.getElementById("secondText");
let form = document.querySelector("form")

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let upText = e.target.elements.textVirs.value;
    textUp.textContent = upText;
    let bText = e.target.elements.textBot.value;
    textBottom.textContent = bText;
    let urlText = e.target.elements.link.value;
    imgUrl.setAttribute("src", urlText);
})
