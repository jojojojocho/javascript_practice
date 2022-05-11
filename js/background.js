const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];

const choice = images[Math.floor(Math.random()*images.length)];

bgImage = document.createElement("img");
bgImage.src = `img/${choice}`;

document.body.appendChild(bgImage);




