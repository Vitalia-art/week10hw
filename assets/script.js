const images = [
    "assets/images/cat1.jpg",
    "assets/images/cat2.jpg",
    "assets/images/cat3.jpg"
];

let currentIndex = 0;

function updateImage() {
    const imageElement = document.getElementById("galleryImage");
    imageElement.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}