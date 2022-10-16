// alert("welcome");

document.addEventListener("DOMContentLoaded", () => {
  // this is an event listener, which listens for the browser's DOMContentLoaded event, which signifies that the HTML body is completely loaded and parsed. The JavaScript inside this block will not run until after that event is fired
});

function fun() {
  /* function definition 1*/
  console.log("nice");
}

document.querySelector("h2").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
  /*function defintion 2
  functions with no identifier is called anonymous fucntions*/
});

//image changer
let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "../images/async-defer.jpg") {
    myImage.setAttribute("src", "../images/js.png");
  } else {
    myImage.setAttribute("src", "../images/async-defer.jpg");
  }
};

//personalised welcome message
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    // for if the prompt is returned with null
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "the user is " + myName;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "the new user is " + storedName;
}
myButton.onclick = function () {
  setUserName();
};

fun();

