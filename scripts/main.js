const body = document.querySelector("body");
const h1 = document.querySelector('h1');
const p = document.querySelector('p');

// body styling
body.style.textAlign = "center";
body.style.fontFamily = "sans-serif";

// h1 styling
h1.innerHTML = `<span id="text">STUFF HERE<span>`
let year = document.querySelector("#text");
let color;
const chameleon = () => {
    let random1 = Math.floor(Math.random() * 255)
    let random2 = Math.floor(Math.random() * 255)
    let random3 = Math.floor(Math.random() * 255)
    color = `rgb(${random1},${random2},${random3})`
    year.style.color = color;
}
setInterval(chameleon, 1000)