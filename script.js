  // Obtener la URL actual
  var currentLocation = window.location.href;
  var menuItems = document.querySelectorAll("nav ul li a");

  // Recorrer los elementos del menú
  for (var i = 0; i < menuItems.length; i++) {
    // Verificar si la URL del enlace coincide con la URL actual
    if (menuItems[i].href === currentLocation) {
      // Agregar la clase "active" al elemento correspondiente
      menuItems[i].classList.add("active");
    }
  }
