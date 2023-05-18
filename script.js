// Obtener la URL de la página actual
var url = window.location.href;

// Obtener el nombre del archivo de la URL
var filename = url.substring(url.lastIndexOf('/') + 1);

// Obtener el nombre del archivo sin la extensión
var page = filename.split('.')[0];

// Agregar la clase "active" al elemento del menú correspondiente
document.getElementById(page).classList.add('active');
