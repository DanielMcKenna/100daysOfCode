# 100daysOfCode

The purpose of this is to try to be coding and working on a project every day for 100 days and see how many projects I can complete starting with not knowing anything.

Day1 - created a counter project. Added the ability to change the color of the counter. I also created a grid to put other projects as I do my 100 day code challenge.

Day2 -Created a similar counter app but instead I added random number generator. One issue I ran into is from my event listeners I tried to add the functionality to do a random number to the random count number via the:
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

The issue I ran into here was even when I added an elseif targeting the reset button and to change the randomCount number it would not register so I ended up giving new classes created a new set of buttons. not sure why it wouldnt work though because the random numbers do have a buttons class.
