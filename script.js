document.getElementById('formRegistro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const correo = document.getElementById('correo').value;
    let intentos = localStorage.getItem('intentos') || 0;

    // Validación de Gmail
    if (correo.toLowerCase().includes('@gmail.com')) {
        document.querySelector('.error-email').style.display = 'block';
        return;
    }

    // Sistema de 2 intentos
    localStorage.setItem('intentos', parseInt(intentos) + 1);
    
    if (intentos < 1) {
        window.location.href = 'error.html';
    } else {
        localStorage.removeItem('intentos');
        window.location.href = 'success.html';
    }

    // Aquí iría la integración con EmailJS
    // emailjs.send("service_id", "template_id", { ...datos });
});
