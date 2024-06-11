const images = [
    'photo9.jpg', // Add paths to your images here
    'photo10.jpg',
    'photo11.jpg',
    'photo12.jpg',
    'photo13.jpg',
    'photo14.jpg'
];

let currentImageIndex = 0;

const slideshow = document.getElementById('slideshow');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showImage(index) {
    if (index >= 0 && index < images.length) {
        slideshow.src = images[index];
    }
}

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
});

// Automatically change image every 5 seconds
setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}, 5000);
