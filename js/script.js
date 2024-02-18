const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

// difference = deadline - current date
const diff = new Date("2024-02-25").getTime() - new Date().getTime();

// when the deadline is already passed, the values are set to 0
if (diff <= 0) {
  seconds.textContent = '00';
  minutes.textContent = '00';
  hours.textContent = '00';
  days.textContent = '00';
} else {
  // setting values of the countdown based on the difference
  let secValue = Math.floor(diff / 1000) % 60,
    minValue = Math.floor(diff / 1000 / 60) % 60,
    hourValue = Math.floor(diff / 1000 / 60 / 60) % 24,
    dayValue = Math.floor(diff / 1000 / 60 / 60 / 24);

  const updateCountdown = () => {
    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
    minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
    hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
    days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;

    if (secValue === 0) {
      secValue = 60;
      if (minValue === 0) {
        minValue = 60;
        if (hourValue === 0) {
          hourValue = 24;
          
          dayValue--;
        }
        hourValue--;
      }
      minValue--;
    }
    secValue--;
  }
  // updating the countdown now to not feel a delay
  updateCountdown()

  // updatting the countdown every second
  const timeFunction = setInterval(()=>{
    updateCountdown()
    // stoping the countdown update
    if (secValue === 0 && minValue === 0 && hourValue === 0 && dayValue === 0) {
      clearInterval(timeFunction);
    }
  }, 1000); //1000ms = 1s
}

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
  const flowerContainer = document.getElementById('flower-container');

  document.addEventListener('touchstart', function (e) {
    const flower = document.createElement('img');
    flower.src = Math.random() > 0.5 ? 'flower1.png' : 'flower3.png';
    flower.classList.add('flower');

    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;

    const randomTranslateX = (Math.random() - 0.5) * 2; 
    flower.style.setProperty('--translateX', randomTranslateX);

    flower.style.left = `${x}px`;
    flower.style.top = `${y}px`;

    flowerContainer.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 2000); // Remove the flower after 2 seconds
  });
});
