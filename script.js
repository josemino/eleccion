document.addEventListener('DOMContentLoaded', function() {
  // Obtener la URL de la página actual
  var url = window.location.href;

  // Obtener la nombre de la página actual
  var page = url.substring(url.lastIndexOf('/') + 1);

  // Obtener todos los elementos del menú
  var menuItems = document.querySelectorAll('nav ul li');

  // Recorrer los elementos del menú y verificar si coincide con la página actual
  for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    var link = menuItem.querySelector('a');

    // Comparar la URL del enlace con la página actual
    if (link.getAttribute('href') === page) {
      menuItem.classList.add('active');
      break;
    }
  }
});
