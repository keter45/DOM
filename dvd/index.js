const section = document.querySelector("section");
const logo = document.getElementById("logo");
const chieldrens = document.querySelectorAll("path");

const FPS = 60;
section.style.height = window.innerHeight + "px";
section.style.width = window.innerWidth + "px";

// Logo moving velocity Variables
let xPosition = 10;
let yPosition = 10;
let xSpeed = 4;
let ySpeed = 4;

setInterval(() => {
  if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0) {
    xSpeed = -xSpeed;
    changeSvgColor();
  }

  if (yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0) {
    ySpeed = -ySpeed;
    changeSvgColor();
  }

  xPosition += xSpeed;
  yPosition += ySpeed;

  update();
}, 1000 / FPS);

const update = () => {
  logo.style.left = xPosition + "px";
  logo.style.top = yPosition + "px";
};

const randomColor = () => {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8).toUpperCase();

  return color;
};

const changeSvgColor = () => {
  const newColor = randomColor();
  chieldrens.forEach((child) => {
    child.style.fill = newColor;
  });
};

window.addEventListener("resize", () => {
  xPosition = 10;
  yPosition = 10;

  section.style.height = window.innerHeight + "px";
  section.style.width = window.innerWidth + "px";
});
