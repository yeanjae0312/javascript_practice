const images = ["0.JPG","1.PNG","2.jpg",];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

// bgImage.src = 'img/'+ chosenImage;
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);