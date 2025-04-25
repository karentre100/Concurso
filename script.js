const form = document.getElementById('formRegistro');
const mailError = document.getElementById('errorMail');

form.addEventListener('submit', event => {
  event.preventDefault();
  mailError.style.display = 'none';

  const correo = form.correo.value.trim().toLowerCase();
  const nombre = form.nombre.value.trim();
  const password = form.password.value;

  // Validación de Gmail
  if (correo.endsWith('@gmail.com')) {
    mailError.style.display = 'block';
    return;
  }

  // Desactivar botón y mostrar feedback si quieres
  // form.querySelector('.btn').disabled = true;

  // Envío por EmailJS
  emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', { nombre, correo, password })
    .then(() => {
      window.location.href = 'success.html';
    })
    .catch(() => {
      window.location.href = 'error.html';
    });
});
