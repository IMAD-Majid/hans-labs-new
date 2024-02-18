const translationRange = 200;
const flowerW = 30; // flower width in pixels

document.addEventListener('DOMContentLoaded', function () {
    function createFlower(startX) {
        const flowerImages = ["flower1.png", "flower3.png", "flower5.png"];
        const randomImage = flowerImages[Math.floor(Math.random() * flowerImages.length)];

        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = startX + "px";
        flower.style.backgroundImage = `url('${location.href.includes("index") ? '' : "../"}assets/${randomImage}')`;

        // Set a random horizontal translation value
        const randomTranslateX = Math.random() * 2 * translationRange - translationRange; // Adjust the range as needed
        flower.style.setProperty('--translateX', randomTranslateX);

        // Set a random animation duration
        const randomDuration = Math.random() * 2 + 1; // Adjust the range as needed
        flower.style.animationDuration = `${randomDuration}s`;

        // Remove the flower after the animation completes
        flower.addEventListener('animationend', function () {
            flower.remove();
        });

        document.body.appendChild(flower);
    }

    document.addEventListener('click', function (event) {
        for (let f = 0; f <= Math.random() * 10; f++) {
            createFlower(event.clientX);
        }
    });
    setInterval(() => {
        createFlower(Math.random() * window.innerWidth);
    }, 500)
});