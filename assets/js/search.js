// Obtener los elementos del botón y el icono
const btnToggleIda = document.getElementById('btnIda');
const iconIda = document.getElementById('iconIda');
const btnToggleRegreso = document.getElementById('btnToggleRegreso');
const iconToggleRegreso = document.getElementById('iconToggleRegreso');

// vuelos ida
// Agregar un evento de clic al botón
btnToggleIda.addEventListener('click', function() {
  // Verificar la clase actual del icono
  const isUp = iconIda.classList.contains('fa-chevron-up');

  // Cambiar la clase del icono según su estado actual
  if (isUp) {
    iconIda.classList.remove('fa-chevron-up');
    iconIda.classList.add('fa-chevron-down');
  } else {
    iconIda.classList.remove('fa-chevron-down');
    iconIda.classList.add('fa-chevron-up');
  }
});

// vuelos regreso
btnToggleRegreso.addEventListener('click', function() {
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