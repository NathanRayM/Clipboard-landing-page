// button wiggle js
const buttons = document.querySelectorAll(".ios-button, .mac-button");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.classList.add("wiggle");
  });

  button.addEventListener("animationend", () => {
    button.classList.remove("wiggle");
  });
});

// logo fly in js
const img = document.getElementById("logoFly");

window.addEventListener("load", () => {
  img.classList.add("fly-in");
});
