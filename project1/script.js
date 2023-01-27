// this is away you can create an event listener for each item

let count = document.querySelector(".count");
let subtractCount = document.querySelector(".subtract");
let buttons = document.querySelector(".buttons");
// let addCount = document.querySelector(".addition");
// let resetCount = document.querySelector(".reset");

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
