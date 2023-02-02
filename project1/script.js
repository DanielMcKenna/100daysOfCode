// this is away you can create an event listener for each item

// variables for the counter app
let count = document.querySelector(".count");
let buttons = document.querySelector(".buttons");
// let subtractCount = document.querySelector(".subtract");
// let addCount = document.querySelector(".addition");
// let resetCount = document.querySelector(".reset");

// variables for random number app
let randomCount = document.querySelector(".random-count");
// let randomButton = document.querySelector(".random-num");
let randomButtons = document.querySelector(".random-buttons");

// variables for random hex card
let randomHexValue = document.querySelector(".random-hex-value");
let randomHexButtons = document.querySelector(".random-hex-buttons");

// addCount.addEventListener("click", () => {
//   count.innerHTML++;
// });

// subtractCount.addEventListener("click", () => {
//   count.innerHTML--;
// });

// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// });

// THIS IS A DIFFERENT WAY TO DO IT A BETTER WAY:

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("addition")) {
    count.innerHTML++;
    setColor();
  } else if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor();
  } else {
    count.innerHTML = 0;
    setColor();
  }
});

randomButtons.addEventListener("click", (e) => {
  if (e.target.classList.contains("random-num")) {
    randomCount.innerHTML = Math.floor(Math.random() * 100) + 1;
  } else {
    randomCount.innerHTML = 0;
  }
});

randomHexButtons.addEventListener("click", (e) => {
  if (e.target.classList.contains("random-hex")) {
    randomHexValue.innerHTML =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    hexColor();
  } else if (e.target.classList.contains("hex-reset")) {
    randomHexValue.innerHTML = "#ffffff";
    hexColor();
  }
});

//color

let setColor = () => {
  if (count.innerHTML < 0) {
    count.style.color = "var(--green)";
  } else if (count.innerHTML > 0) {
    count.style.color = "var(--blue)";
  } else {
    count.style.color = "white";
  }
};

let hexColor = () => {
  if (randomHexValue.innerHTML !== "#ffffff") {
    randomHexValue.style.color = `${randomHexValue.innerHTML}`;
  } else {
    randomHexValue.style.color = "white";
  }
};
