const fullImgBox = document.getElementById('fullImgBox');
const fullImg = document.getElementById('fullImg');
const imgTitle = document.getElementById('imgTitle');
const images = document.querySelectorAll('.img-gallery img');
let currentIndex = 0;

function openFullImg(index) {
    currentIndex = index;
    fullImg.src = images[currentIndex].src;
    imgTitle.textContent = images[currentIndex].getAttribute('data-title');
    fullImgBox.style.display = "flex";
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

function prevImg() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    fullImg.src = images[currentIndex].src;
    imgTitle.textContent = images[currentIndex].getAttribute('data-title');
}

function nextImg() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    fullImg.src = images[currentIndex].src;
    imgTitle.textContent = images[currentIndex].getAttribute('data-title');
}

window.onclick = function(event) {
    if (event.target == fullImgBox) {
        closeFullImg();
    }
}

document.addEventListener('keydown', function(event) {
    if (fullImgBox.style.display === "flex") {
        if (event.key === "ArrowLeft") {
            prevImg();
        } else if (event.key === "ArrowRight") {
            nextImg();
        } else if (event.key === "Escape") {
            closeFullImg();
        }
    }
});