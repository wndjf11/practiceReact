const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

const bgImage = document.createElement("img");
// console.log(bgImage);
bgImage.src = `img/${chosenImage}`;

console.log(chosenImage);

document.body.appendChild(bgImage);