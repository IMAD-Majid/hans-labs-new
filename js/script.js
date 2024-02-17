const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

// difference = deadline - current date
const diff = new Date("2024-02-25").getTime() - new Date().getTime();

// when the deadline is already passed, the values are set to 0
if (diff <= 0) {
  seconds.textContent = 0;
  minutes.textContent = 0;
  hours.textContent = 0;
  days.textContent = 0;
} else {
  // setting values of the countdown based on the difference
  let secValue = Math.floor((diff / 1000) % 60),
    minValue = Math.floor(((diff / 1000) / 60) % 60),
    hourValue = Math.floor(((diff / 1000) / 60 / 60) % 60),
    dayValue = Math.floor(((diff / 1000) / 60 / 60) / 24);

  const timeFunction = setInterval(() => {
    secValue--;

    if (secValue === 0) {
      minValue--;
      secValue = 60;
    }
    if (minValue === 0) {
      hourValue--;
      minValue = 60;
    }
    if (hourValue === 0) {
      dayValue--;
      hourValue = 24;
    }

    if (dayValue === 0) {
      clearInterval(timeFunction);
    }
    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
    minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
    hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
    days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
  }, 1000); //1000ms = 1s
}

// changing the telegram icon from black to white whenever the user moves his cursor over the button
const contactUsBTN = document.querySelector("#input-box button");

contactUsBTN.addEventListener("mouseover", () => {
  contactUsBTN.querySelector("img").src = "tgicon_white.png";
})
contactUsBTN.addEventListener("mouseleave", () => {
  contactUsBTN.querySelector("img").src = "tgicon_black.png";
})
