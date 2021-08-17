var redWatch = "https://i.imgur.com/PTgQlim.png";
var blackWatch = "https://i.imgur.com/iOeUBV7.png";
var blushWatch = "https://i.imgur.com/xSIK4M8.png";
var pinkWatch = "https://i.imgur.com/Zygu7I3.png";
var purpleWatch = "https://i.imgur.com/Mplj1YR.png";

var watch = document.getElementById("watch");

var redDiv = document.getElementById("red");
var blackDiv = document.getElementById("black");
var blushDiv = document.getElementById("blush");
var pinkDiv = document.getElementById("pink");
var purpleDiv = document.getElementById("purple");

redDiv.addEventListener("click", function() {
  changeWatchColor(watch, redWatch, "Red");
});

blackDiv.addEventListener("click", function() {
  changeWatchColor(watch, blackWatch, "Black");
});

blushDiv.addEventListener("click", function() {
  changeWatchColor(watch, blushWatch, "Blush");
});

pinkDiv.addEventListener("click", function() {
  changeWatchColor(watch, pinkWatch, "Pink");
});

purpleDiv.addEventListener("click", function() {
  changeWatchColor(watch, purpleWatch, "Purple");
});


function changeWatchColor(watchImage, colorSource, text) {
  watchImage.src = colorSource;
  watchImage.alt = "FitBit Smart Watch in " + text;
  watchImage.title = "FitBit Smart Watch in " + text;
}