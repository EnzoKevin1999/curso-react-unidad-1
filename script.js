function contacto() {
  var nombre = document.forms[0].nombre.value;
  var apellido;

  apellido = document.formulario.apellido.value;
  var dni = document.getElementById("dni").value;
  var email = document.getElementById("email").value;

  if (nombre == "") {
    document.getElementById("nombre_error").innerHTML =
      "El Campo Nombre es Obligatorio";
  }

  document.getElementById("mensaje").innerHTML = "Gracias por Contactarse";
}

function getTipoSeguro() {
  var tiposeguro = document.getElementById("tiposeguro").value;

  if (tiposeguro == 1) {
    document.getElementById("valortiposeguro").innerHTML = "$500 Básico";
  } else if (tiposeguro == 2) {
    document.getElementById("valortiposeguro").innerHTML = "$1000 Intermedio";
  } else {
    document.getElementById("valortiposeguro").innerHTML = "$1500 Premium";
  }
}

getTipoSeguro();
contacto();
