// JavaScript Document
console.log("hi");

var video = document.getElementById("background-video");

var pauseButton = document.getElementById("pause-button");

pauseButton.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        pauseButton.textContent = "⏸️";
        pauseButton.ariaLabel = "video pauzeren";
    } else {
        video.pause();
        pauseButton.textContent = "▶️";
        pauseButton.ariaLabel = "video hervatten";
    }
});

