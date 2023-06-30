// Obtener los elementos del botón y el icono
const btnTogglegoTo = document.getElementById('btngoTo');
const icongoTo = document.getElementById('icongoTo');
const btnToggleRegreso = document.getElementById('btnToggleRegreso');
const iconToggleRegreso = document.getElementById('iconToggleRegreso');
const btnModalIda = document.getElementById('btnModalIda');
const iconModalIda = document.getElementById('iconModalIda');
const btnModalRegreso = document.getElementById('btnModalRegreso');
const iconModalRegreso = document.getElementById('iconModalRegreso');
// vuelos goTo
// Agregar un evento de clic al botón
btnTogglegoTo.addEventListener('click', function () {
  // Verificar la clase actual del icono
  const isUp = icongoTo.classList.contains('fa-chevron-up');

  // Cambiar la clase del icono según su estado actual
  if (isUp) {
    icongoTo.classList.remove('fa-chevron-up');
    icongoTo.classList.add('fa-chevron-down');
  } else {
    icongoTo.classList.remove('fa-chevron-down');
    icongoTo.classList.add('fa-chevron-up');
  }
});

// vuelos regreso
btnToggleRegreso.addEventListener('click', function () {
  // Verificar la clase actual del icono
  const isUp = iconToggleRegreso.classList.contains('fa-chevron-up');

  // Cambiar la clase del icono según su estado actual
  if (isUp) {
    iconToggleRegreso.classList.remove('fa-chevron-up');
    iconToggleRegreso.classList.add('fa-chevron-down');
  } else {
    iconToggleRegreso.classList.remove('fa-chevron-down');
    iconToggleRegreso.classList.add('fa-chevron-up');
  }
});

// modal ida
btnModalIda.addEventListener('click', function () {
  // Verificar la clase actual del icono
  const isUp = iconModalIda.classList.contains('fa-chevron-up');

  // Cambiar la clase del icono según su estado actual
  if (isUp) {
    iconModalIda.classList.remove('fa-chevron-up');
    iconModalIda.classList.add('fa-chevron-down');
  } else {
    iconModalIda.classList.remove('fa-chevron-down');
    iconModalIda.classList.add('fa-chevron-up');
  }
});

// modal regreso
btnModalRegreso.addEventListener('click', function () {
  // Verificar la clase actual del icono
  const isUp = iconModalRegreso.classList.contains('fa-chevron-up');

  // Cambiar la clase del icono según su estado actual
  if (isUp) {
    iconModalRegreso.classList.remove('fa-chevron-up');
    iconModalRegreso.classList.add('fa-chevron-down');
  } else {
    iconModalRegreso.classList.remove('fa-chevron-down');
    iconModalRegreso.classList.add('fa-chevron-up');
  }
});


//funcion para cambiar el border y color de fuente de los botones superiores
function highlightButton(event) {
  // Obtener el elemento <a> más cercano en la jerarquía del DOM
  const button = event.target.closest('.btn');

   // Verificar si el botón ya tiene la clase 'active-button'
   const isActive = button.classList.contains('botones--active-button');

  // Obtener todos los botones dentro del carrusel
  const buttons = document.querySelectorAll('.swiper-wrapper .btn');

  // Eliminar la clase 'active-button' de todos los botones
  buttons.forEach(btn => {
      btn.classList.remove('botones--active-button');
  });

  // Agregar o elimina la clase 'active-button' al botón clicado
  if (!isActive){
  button.classList.add('botones--active-button');
  }

}