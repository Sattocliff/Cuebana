$(document).ready(function() {
  $('#formulario').submit(function(event) {
    event.preventDefault();
    console.log("hola");
    if(validacioncita()!= ""){
      swal("Error de Formulario", validacioncita(), "error");
    }else{
      swal("Envio Correceto", "Nos pondremos en contacto con usted", "success");
  }
    
    
  });

  function validacioncita(){
    var html= "";
    var nombreyapellido = $('#txtnombreyapellido').val();
    var telefono = $('#txtNumero').val();
    var email = $('#txtemail').val();
    var ciudad = $('#cbxciudad').val();
    var regNombre = /^[a-zA-Z ]+$/;
    var regTelefono = /^\d{9}$/;
    var regEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (!regNombre.test(nombreyapellido)) {
      alert('Ingrese un nombre válido');
    }

    if (!regTelefono.test(telefono)) {
      alert('Ingrese un número de teléfono válido');

    }

    if (!regEmail.test(email)) {
      alert('Ingrese un email válido');
    }

    if (ciudad == "0") {
      html += "Ingrese una ciudad ";
    }
    return html;
  }

});


function alertita(){
    Swal.fire(
        'Nos pondremos en contacto a la brevedad',
        'Muchas gracias por tu interes en nosotros!',
        'success'
      )
}