
const giftBoxes = document.querySelector('.gift-boxes');
const images = document.querySelectorAll('.gift-boxes img');

let currentIndex = 0;
const totalImages = images.length;

function showNextImage() {

    const imageWidth = images[0].clientWidth;

    currentIndex = (currentIndex + 1) % totalImages;
    giftBoxes.style.transform = `translateX(-${imageWidth * currentIndex}px)`;
}

setInterval(showNextImage, 3000);
