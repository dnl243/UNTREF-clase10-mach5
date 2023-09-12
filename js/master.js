// Captura de elementos
let car = document.querySelector("#car");
let body = document.querySelector("body");
let btnMeteoro = document.querySelector("#meteoro");
let btnPolicia = document.querySelector("#policia");
let btnAmbulancia = document.querySelector("#ambulancia")
// Variables de posición
let mLeft = 0;
let mTop = 0;
let speed = 10;
// Insertar incógnita
car.innerHTML =
  '<img src="../img/en-espera.jpg" alt="en-espera"></img>';
// Selección  de vehículos
btnMeteoro.addEventListener("click", () =>
car.innerHTML =
  '<img src="../img/mach5-right.jpg" alt="meteoro"></img>');
btnPolicia.addEventListener("click", () =>
car.innerHTML =
'<img src="../img/policia-right.jpg" alt="policia"></img>');
btnAmbulancia.addEventListener("click", () =>
car.innerHTML =
'<img src="../img/ambulancia-right.jpg" alt="ambulancia"></img>');
// Movimiento de vehículo
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
  car.classList.remove("left");
  car.classList.remove("up");
  car.classList.remove("down");
  car.classList.add("right");
  mLeft += speed;
  console.log(mLeft);
  car.style.marginLeft = mLeft + "px";
}
function moveLeft() {
  car.classList.remove("right");
  car.classList.remove("up");
  car.classList.remove("down");
  car.classList.add("left");
  mLeft -= speed;
  console.log(mLeft);
  car.style.marginLeft = mLeft + "px";
}
function moveUp() {
  car.classList.remove("left");
  car.classList.remove("right");
  car.classList.remove("down");
  car.classList.add("up");
  mTop -= speed;
  console.log(mTop);
  car.style.marginTop = mTop + "px";
}
function moveDown() {
  car.classList.remove("left");
  car.classList.remove("up");
  car.classList.remove("right");
  car.classList.add("down");
  mTop += speed;
  console.log(mTop);
  car.style.marginTop = mTop + "px";
}
