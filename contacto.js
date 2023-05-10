const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = {}; // Creamos un objeto vacío para guardar los valores del formulario

  if (nameInput.value === "") {
    showError(nameInput, "El nombre es requerido");
  } else {
    showSuccess(nameInput);
    data.name = nameInput.value; // Asignamos el valor del campo "name" al objeto "data"
  }

  if (emailInput.value === "") {
    showError(emailInput, "El correo electrónico es requerido");
  } else if (!isValidEmail(emailInput.value)) {
    showError(emailInput, "Ingrese un correo electrónico válido");
  } else {
    showSuccess(emailInput);
    data.email = emailInput.value; // Asignamos el valor del campo "email" al objeto "data"
  }

  if (phoneInput.value === "") {
    showError(phoneInput, "El teléfono es requerido");
  } else if (!isValidPhone(phoneInput.value)) {
    showError(phoneInput, "Ingrese un teléfono válido");
  } else {
    showSuccess(phoneInput);
    data.phone = phoneInput.value; // Asignamos el valor del campo "phone" al objeto "data"
  }

  if (messageInput.value === "") {
    showError(messageInput, "El mensaje es requerido");
  } else {
    showSuccess(messageInput);
    data.message = messageInput.value; // Asignamos el valor del campo "message" al objeto "data"
  }

  console.log(data); // Imprimimos el objeto "data" en la consola
  alert(
    `Nombre: ${data.name}\nCorreo electrónico: ${data.email}\nTeléfono: ${data.phone}\nMensaje: ${data.message}`
  );
});

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const errorMessage = formControl.querySelector("small");
  errorMessage.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isValidEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}

function isValidPhone(phone) {
  return /^\d+$/.test(phone);
}
