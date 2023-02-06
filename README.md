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

Day3 - I did a random hex generator. Issues I ran into was leaving out the # so I couldnt figure out why the color value was not changing to the hex value for about 20min until I realized it was taking the string value and not the #. So on my hexColor function I added a # to the value. everything worked great.Then I realized the UI on the HTML didnt show a # so I added one there and everything broke. it took me about 5 min more than I want to admit that Iwas then having 2 # causing the issue to break. but figured it out and now everything is working.

Day4-7 -
