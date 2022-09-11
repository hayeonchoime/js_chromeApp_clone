const images = [
    "wolf1.jpg", "wolf2.jpg","wolf3.jpg"
];

const choseImage = images[Math.floor(Math.random()* images.length)];

// 자바스클비트에서 html 생성
const bgImage = document.createElement("img");
bgImage.src = `img/${choseImage}`;

document.body.appendChild(bgImage);
// prepend() // 가장위에 오게하는것