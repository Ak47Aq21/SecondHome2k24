const secretCode = "2304";
let codeEntered = false;

function showVideo() {
  document.querySelector(".card").classList.add("open");
  document.querySelector(".video-container").classList.add("show");
}

function checkCode() {
  const code = prompt("Please enter your code of happiness:");

  if (code === secretCode) {
    codeEntered = true;
    showVideo();
  } else {
    alert("Incorrect code. Please try again.");
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
    if (videoContainer.classList.contains("show")) {
      const video = this.querySelector("video");
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
    videoContainer.classList.toggle("show");
  });
});
