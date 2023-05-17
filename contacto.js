
var consultas = [];

var form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || phone === "") {
    alert("Por favor, completa los campos obligatorios");
    return; 
  }

  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingresa un correo electrónico válido");
    return; 
  }

  var consulta = {
    name: name,
    email: email,
    phone: phone,
    message: message
  };

  consultas.push(consulta);

  form.reset();

  alert(
    `Nombre: ${consulta.name}\nCorreo electrónico: ${consulta.email}\nTeléfono: ${consulta.phone}\nMensaje: ${consulta.message}`
  );
});
