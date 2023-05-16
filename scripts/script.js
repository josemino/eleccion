var users = {
  "usuario1": "contrasena1",
  "usuario2": "contrasena2",
  "usuario3": "contrasena3"
};

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function checkPassword() {
  var username = document.getElementById("usernameInput").value;
  var password = document.getElementById("passwordInput").value;

  if (username === "" || password === "") {
    alert("Por favor, ingresa el usuario y la contraseña.");
    return;
  }

  if (verifyCredentials(username, password)) {
    var accessed = getCookie(username + "_accessed");

    if (accessed === "true") {
      document.getElementById("usernameInput").value = "";
      document.getElementById("passwordInput").value = "";
      document.getElementById("message").style.display = "block";
      document.getElementById("loginForm").style.display = "none";
      return;
    }

    setCookie(username + "_accessed", "true", 365);

    document.getElementById("protectedSection").style.display = "block";
    document.getElementById("passwordForm").style.display = "none";
  } else {
    alert("Datos de ingreso inválidos. Intenta ingresar de nuevo.");
  }
}

function verifyCredentials(username, password) {
  return users.hasOwnProperty(username) && users[username] === password;
}

