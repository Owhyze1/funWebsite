var divMouseover = document.getElementById("div-mouseover");
var textMouseover = document.querySelector("#div-mouseover > #div-amount");
// console.log(secondMouseover);

var mouseovers = 0;
divMouseover.addEventListener("mouseover", function() {
  // console.log("mouseover event");
  mouseovers += 1;
  textMouseover.innerHTML = mouseovers;
});


var divMouseenter = document.getElementById("div-mouseenter");
var textMouseenter = document.querySelector("#div-mouseenter > #div-amount");
// console.log(textMouseenter);

var mouseenters = 0;
divMouseenter.addEventListener("mouseenter", function() {
  mouseenters += 1;
  textMouseenter.innerHTML = mouseenters;
});


var divMousemove = document.getElementById("div-mousemove");
var textMousemove = document.querySelector("#div-mousemove > #div-amount");

var mousemoves = 0;
divMousemove.addEventListener("mousemove", function() {
  mousemoves += 1;
  textMousemove.innerHTML = mousemoves;
});


var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function() {
  mouseovers = 0;
  mouseenters = 0;
  mousemoves = 0;

  textMouseover.innerHTML = 0;
  textMouseenter.innerHTML = 0;
  textMousemove.innerHTML = 0;
});