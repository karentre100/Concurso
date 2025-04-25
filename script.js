const form = document.getElementById('formRegistro');
const mailError = document.querySelector('.mail-error');

form.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = form.nombre.value.trim();
  const correo = form.correo.value.trim().toLowerCase();
  const password = form.password.value;

  // Validar Gmail
  if (correo.endsWith('@gmail.com')) {
    mailError.style.display = 'block';
    return;
  }

  // Enviar por EmailJS
  emailjs.send('TU_SERVICE_ID','TU_TEMPLATE_ID',{ nombre, correo, password })
    .then(() => {
      window.location.href = 'success.html';
    })
    .catch(() => {
      window.location.href = 'error.html';
    });
});
