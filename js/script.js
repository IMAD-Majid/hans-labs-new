
// changing the telegram icon from black to white whenever the user moves his cursor over the button
const contactUsBTN = document.querySelector("#input-box button");
const tgicon = contactUsBTN.querySelector("img");

// hovering
contactUsBTN.addEventListener("mouseover", () => {
  tgicon.src = "tgicon_white.png";
  contactUsBTN.classList.add("hovered")
})
// holding finger
contactUsBTN.addEventListener("touchstart", () => {
  tgicon.src = "tgicon_white.png";
  contactUsBTN.classList.add("hovered")
})

// lifted finger
contactUsBTN.addEventListener("touchend", () => {
  tgicon.src = "tgicon_black.png";
  contactUsBTN.classList.remove("hovered")
})
// left button
contactUsBTN.addEventListener("mouseleave", () => {
  tgicon.src = "tgicon_black.png";
  contactUsBTN.classList.remove("hovered")
})

document.addEventListener('DOMContentLoaded', function () {
  function createFlower(startX) {
    const flowerImages = ["flower1.png", "flower3.png", "flower5.png"];
    const randomImage = flowerImages[Math.floor(Math.random() * flowerImages.length)];

    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = startX + "px";
    flower.style.backgroundImage = `url('${randomImage}')`;

    // Set a random horizontal translation value
    const translationRange = 200
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
    for (let f=0; f<=Math.random()*10; f++){
      createFlower(event.clientX);
    }
  });
  setInterval(()=>{
    createFlower(Math.random()*window.innerWidth);
  }, 500)
});

