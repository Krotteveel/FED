// JavaScript Document
console.log("hi");

var video = document.getElementById("background-video");

var pauseButton = document.getElementById("pause-button");

pauseButton.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        pauseButton.textContent = "⏸";
        pauseButton.ariaLabel = "video pauzeren";
    } else {
        video.pause();
        pauseButton.textContent = "▶";
        pauseButton.ariaLabel = "video hervatten";
    }
});




// var menuButton = document.querySelector("header > button");
// var hetMenu = document.querySelector("nav");

// menuButton.onclick = toggleMenu;

// function toggleMenu (){
//   hetMenu.classList.toggle ("open");
// }