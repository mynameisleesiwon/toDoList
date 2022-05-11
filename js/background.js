const images = [
    "0.png",
    "1.png",
    "2.png",
    "3.png"
];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img"); // html에 img태그 형성, 아직 반영 X

bgImage.src = `img/${chosenImage}`


// appendChild : body의 가장 뒤에 html 추가
// prepend : body의 가장 위에 html 추가
document.body.appendChild(bgImage);
// document.body.prepend(bgImage);
