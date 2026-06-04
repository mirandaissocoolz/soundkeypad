const keycaps = document.querySelectorAll(".keycap");

keycaps.forEach((key) => {
  key.addEventListener("click", () => {
    key.classList.add("pressed");
    window.setTimeout(() => key.classList.remove("pressed"), 120);
  });
});

const dial = document.querySelector(".dial-body");
let dialRotation = -90;

if (dial) {
  dial.addEventListener("wheel", (event) => {
    event.preventDefault();
    dialRotation += event.deltaY > 0 ? 15 : -15;
    dial.style.transform = `rotate(${dialRotation}deg)`;
  });

  dial.addEventListener("click", () => {
    dialRotation += 45;
    dial.style.transform = `rotate(${dialRotation}deg)`;
  });
}
