let mac5 = document.querySelector("#mach5");
let body = document.querySelector("body");

let mLeft = 0;
let mTop = 0;
let speed = 10;

mach5.innerHTML =
  '<img src="./img/mach5-right.jpg" alt="mach5" style="width:110px;"></img>';

body.addEventListener("keydown", function (evento) {
  console.log(evento);
  if (evento.key === "ArrowRight") {
    moveRight();
  } else if (evento.key === "ArrowLeft") {
    moveLeft();
  } else if (evento.key === "ArrowUp") {
    moveUp();
  } else if (evento.key === "ArrowDown") {
    moveDown();
  }
});

function moveRight() {
  mach5.innerHTML =
    '<img src="./img/mach5-right.jpg" alt="mach5" style="width:110px;"></img>';
  mLeft += speed;
  console.log(mLeft);
  mach5.style.marginLeft = mLeft + "px";
}
function moveLeft() {
  mach5.innerHTML =
    '<img src="./img/mach5-left.jpg" alt="mach5" style="width:110px;"></img>';
  mLeft -= speed;
  console.log(mLeft);
  mach5.style.marginLeft = mLeft + "px";
}
function moveUp() {
  mach5.innerHTML =
    '<img src="./img/mach5-up.jpg" alt="mach5" style="height:110px;"></img>';
  mTop -= speed;
  console.log(mTop);
  mach5.style.marginTop = mTop + "px";
}
function moveDown() {
  mach5.innerHTML =
    '<img src="./img/mach5-down.jpg" alt="mach5" style="height:110px;"></img>';
  mTop += speed;
  console.log(mTop);
  mach5.style.marginTop = mTop + "px";
}
