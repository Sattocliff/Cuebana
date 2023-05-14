$(document).ready(function() {
  $('#formulario').submit(function(event) {
    event.preventDefault();
    var nombreyapellido = $('#txtnombreyapellido').val();
    var telefono = $('#txtNumero').val();
    var email = $('#txtemail').val();
    var ciudad = $('#cbxciudad').val();
    var regNombre = /^[a-zA-Z ]+$/;
    var regTelefono = /^\d{9}$/;
    var regEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (!regNombre.test(nombreyapellido)) {
      alert('Ingrese un nombre válido');
      return false;
    }

    if (!regTelefono.test(telefono)) {
      alert('Ingrese un número de teléfono válido');
      return false;
    }

    if (!regEmail.test(email)) {
      alert('Ingrese un email válido');
      return false;
    }

    if (ciudad == '0') {
      alert('Seleccione una ciudad');
      return false;
    }

    alert('Formulario enviado correctamente');
    $('#formulario')[0].reset(); // limpiar el formulario
  });
});


function alertita(){
    Swal.fire(
        'Nos pondremos en contacto a la brevedad',
        'Muchas gracias por tu interes en nosotros!',
        'success'
      )
}