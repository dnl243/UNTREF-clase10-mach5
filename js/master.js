// Recepción - instrucciones
Swal.fire({
  title: 'Bienvenido',
  text: 'Selecciona un icono de la barra superior para elegir tu vehículo',
  confirmButtonText: '<i class="bi bi-hand-thumbs-up-fill"></i>',
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire('Para mover debes usar las teclas w-a-s-d', 'NO salgas de la pantalla o regresaras en ambulancia!!')
  }
})
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
// Elemento en espera
car.innerHTML =
  '<img src="./img/en-espera.jpg" alt="en-espera"></img>';
// Selección  de vehículos
btnMeteoro.addEventListener("click", () =>
car.innerHTML =
  '<img src="./img/mach5.jpg" alt="meteoro"></img>');
btnPolicia.addEventListener("click", () =>
car.innerHTML =
'<img src="./img/policia.jpg" alt="policia"></img>');
btnAmbulancia.addEventListener("click", () =>
car.innerHTML =
'<img src="./img/ambulancia.jpg" alt="ambulancia"></img>');
// Movimiento de vehículo con límite de pantalla
body.addEventListener("keydown", function (evento) {
  console.log(evento);
  if (evento.key === "d" && mLeft < 1100) {
    moveRight();
  } else if (evento.key === "a" && mLeft > -80) {
    moveLeft();
  } else if (evento.key === "w" && mTop > -10) {
    moveUp();
  } else if (evento.key === "s" && mTop < 540) {
    moveDown();
  } else if ((mLeft = 540) || (mLeft = -80) || (mTop = -10) || (mTop = 540)) {
    gameOver();
  }
});
// variable Alerta (hecha por sweetalert con bootstrap)
const anotherChance = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})
// Game Over Alertas
function gameOver() {
  car.innerHTML =
  '<img src="./img/fuego.gif" alt="fuego"></img>';
  car.classList.remove("left");
  car.classList.remove("up");
  car.classList.remove("down");
  car.classList.add("right");
  setTimeout(() => {       
    anotherChance.fire({
      title: 'Te lo dije!!',
      text: "¿Queres jugar denuevo?",
      imageUrl: 'https://media.tenor.com/yp62lkWc5I4AAAAM/muttley-laughing.gif',
      imageWidth: 200,
      imageHeight: 175,
      imageAlt: 'Patan',
      showCancelButton: true,
      confirmButtonText: 'SI!',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        anotherChance.fire({
          title: 'Genial!',
          text: "Intentalo una vez más!",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: '<i class="bi bi-hand-thumbs-up-fill"></i>'
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        })
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        anotherChance.fire({
          title: 'Saludos!',
          text: 'Mejor suerte la próxima!',
          imageUrl: 'https://i.gifer.com/A0cF.gif',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'ambulancia',
          confirmButtonColor: '#3085d6',
          confirmButtonText: '<i class="bi bi-door-open"></i>'
        }).then((result) => {
          if (result.isConfirmed) {
            window.close();
          }
        })
      }
    })
    }, 800);
}
// movimiento de vehículo
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
