const secretCode = "7629";
let codeEntered = false;

function showVideo() {
  document.querySelector(".card").classList.add("open");
  document.querySelector(".video-container").classList.add("show");
  const video = document.querySelector("video");
  video.setAttribute("controls", "controls"); // Add controls attribute
}

function hideVideo() {
  document.querySelector(".card").classList.remove("open");
  document.querySelector(".video-container").classList.remove("show");
  const video = document.querySelector("video");
  video.removeAttribute("controls"); // Remove controls attribute
  video.pause();
}

function checkCode() {
  const code = prompt("Please enter your code of happiness:");

  if (code === secretCode) {
    codeEntered = true;
    showVideo();
  } else {
    alert("Incorrect code. Please try again.");
    hideVideo();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  checkCode();

  document.querySelector(".card").addEventListener("click", function () {
    if (!codeEntered) {
      alert("Please enter the secret code to access the video.");
      return;
    }

    const videoContainer = this.querySelector(".video-container");
    const video = this.querySelector("video");
    if (videoContainer.classList.contains("show")) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  });
});
