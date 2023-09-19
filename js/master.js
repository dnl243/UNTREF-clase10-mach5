// Recepción - instrucciones
Swal.fire({
  title: 'Bienvenido',
  text: 'Selecciona un icono de la barra superior para elegir tu vehículo',
  confirmButtonText: '<i class="bi bi-hand-thumbs-up-fill"></i>',
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire('Para mover debes usar las teclas w-a-s-d', 'NO salgas de la pantalla o regresarás en ambulancia!!')
  }
})
// Captura de elementos
const car = document.querySelector("#car");
const body = document.querySelector("body");
const btnMeteoro = document.querySelector("#meteoro");
const btnPolicia = document.querySelector("#policia");
const btnAmbulancia = document.querySelector("#ambulancia");
const selectCar = localStorage.getItem('car');
// Variables de posición
let mLeft = 0;
let mTop = 0;
let speed = 1;
// Elemento en espera
car.innerHTML =
'<img src="./img/en-espera.jpg" alt="en-espera"></img>';
// Selección  de vehículos
btnMeteoro.addEventListener("click", function(){
  car.innerHTML ='<img src="./img/mach5.jpg" alt="meteoro"></img>';
  localStorage.setItem('car','meteoro')});
btnPolicia.addEventListener("click", function(){
  car.innerHTML ='<img src="./img/policia.jpg" alt="policia"></img>';
  localStorage.setItem('car','policia')});
btnAmbulancia.addEventListener("click", function(){
  car.innerHTML ='<img src="./img/ambulancia.jpg" alt="ambulancia"></img>';
  localStorage.setItem('car','ambulancia')});

if(selectCar === 'meteoro'){
  car.innerHTML ='<img src="./img/mach5.jpg" alt="meteoro"></img>';
}else if (selectCar === 'policia'){
  car.innerHTML ='<img src="./img/policia.jpg" alt="policia"></img>';
}else if (selectCar === 'ambulancia'){
  car.innerHTML ='<img src="./img/ambulancia.jpg" alt="ambulancia"></img>'; 
};

// Movimiento de vehículo con límite de pantalla
body.addEventListener("keydown", function (evento) {
  if (mLeft < 99 && evento.key === "d") {
    moveRight();
  } else if (mLeft > -6 && evento.key === "a") {
    moveLeft();
  } else if (mTop > -3 && evento.key === "w") {
    moveUp();
  } else if (mTop < 73 && evento.key === "s") {
    moveDown();
  } 
  console.log(evento);
  if (mLeft == 99 || mLeft == -6 || mTop == -3 || mTop == 73) {
    gameOver();
    body.removeEventListener("keydown");
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
// Game Over
function gameOver() {
  car.innerHTML =
  '<img src="./img/fuego.gif" alt="fuego"></img>';
  car.classList.remove("left");
  car.classList.remove("up");
  car.classList.remove("down");
  car.classList.add("right");
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
    });
}
// movimiento de vehículo
function moveRight() {
  car.classList.remove("left");
  car.classList.remove("up");
  car.classList.remove("down");
  car.classList.add("right");
  mLeft += speed;
  console.log(mLeft);
  car.style.marginLeft = mLeft + "%";
}
function moveLeft() {
  car.classList.remove("right");
  car.classList.remove("up");
  car.classList.remove("down");
  car.classList.add("left");
  mLeft -= speed;
  console.log(mLeft);
  car.style.marginLeft = mLeft + "%";
}
function moveUp() {
  car.classList.remove("left");
  car.classList.remove("right");
  car.classList.remove("down");
  car.classList.add("up");
  mTop -= speed;
  console.log(mTop);
  car.style.marginTop = mTop + "%";
}
function moveDown() {
  car.classList.remove("left");
  car.classList.remove("up");
  car.classList.remove("right");
  car.classList.add("down");
  mTop += speed;
  console.log(mTop);
  car.style.marginTop = mTop + "%";
}

// Modo claro/oscuro
// Captura de elementos
const btnLightMode = document.querySelector("#lightMode");
const btnDarkMode = document.querySelector("#darkMode");
const navbar = document.querySelector("#navbar");
const changeMode = localStorage.getItem('mode');
// Modo claro por defecto
btnLightMode.addEventListener('click', function(){
  navbar.classList.remove('bg-dark', 'text-light');
  localStorage.removeItem('mode', 'black');
  navbar.classList.add('bg-body-tertiary');
  localStorage.setItem('mode', 'white');
});

// Modo oscuro
btnDarkMode.addEventListener('click', function(){
  navbar.classList.remove('bg-body-tertiary');
  localStorage.removeItem('mode', 'white');
  navbar.classList.add('bg-dark', 'text-light');
  localStorage.setItem('mode', 'black');
});

if (changeMode === 'white'){
  navbar.classList.remove('bg-dark', 'text-light');
  navbar.classList.add('bg-body-tertiary');
} else if (changeMode === 'black'){
  navbar.classList.remove('bg-body-tertiary');
  navbar.classList.add('bg-dark', 'text-light');
}
 

// pablo mencionó en la clase anterior que se pierde el autito cuando reiniciamos la página, ya lo resolvimos












