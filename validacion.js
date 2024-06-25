document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.formcontato__form');
    const nombreInput = form.querySelector('input[name="nombre"]');
    const emailInput = form.querySelector('input[name="email"]');
    const asuntoInput = form.querySelector('input[name="asunto"]');
    const mensajeTextarea = form.querySelector('textarea[name="mensaje"]');
    const enviarBoton = form.querySelector('.formcontato__botao');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            console.log('Formulario válido, enviado exitosamente');
        } else {
            console.log('Formulario inválido, corrige los errores para enviar');
        }
    });

    function validateForm() {
        let isValid = true;

        if (!nombreInput.value.trim()) {
            isValid = false;
            showError(nombreInput, 'El campo Nombre no puede estar vacío');
        } else if (nombreInput.value.length > 50) {
            isValid = false;
            showError(nombreInput, 'El campo Nombre debe tener máximo 50 caracteres');
        } else {
            clearError(nombreInput);
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            isValid = false;
            showError(emailInput, 'El campo Email no puede estar vacío');
        } else if (!emailPattern.test(emailInput.value.trim())) {
            isValid = false;
            showError(emailInput, 'Ingrese un formato de correo electrónico válido');
        } else {
            clearError(emailInput);
        }

        if (!asuntoInput.value.trim()) {
            isValid = false;
            showError(asuntoInput, 'El campo Asunto no puede estar vacío');
        } else if (asuntoInput.value.length > 50) {
            isValid = false;
            showError(asuntoInput, 'El campo Asunto debe tener máximo 50 caracteres');
        } else {
            clearError(asuntoInput);
        }

        if (!mensajeTextarea.value.trim()) {
            isValid = false;
            showError(mensajeTextarea, 'El campo Mensaje no puede estar vacío');
        } else if (mensajeTextarea.value.length > 300) {
            isValid = false;
            showError(mensajeTextarea, 'El campo Mensaje debe tener máximo 300 caracteres');
        } else {
            clearError(mensajeTextarea);
        }

        enviarBoton.disabled = !isValid;

        return isValid;
    }

    function showError(input, message) {
        const parent = input.parentElement;
        const error = parent.querySelector('.error-message');
        if (error) {
            error.textContent = message;
        } else {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = message;
            parent.appendChild(errorDiv);
        }
    }

    function clearError(input) {
        const parent = input.parentElement;
        const error = parent.querySelector('.error-message');
        if (error) {
            parent.removeChild(error);
        }
    }

    nombreInput.addEventListener('input', function() {
        validateForm();
    });

    emailInput.addEventListener('input', function() {
        validateForm();
    });

    asuntoInput.addEventListener('input', function() {
        validateForm();
    });

    mensajeTextarea.addEventListener('input', function() {
        validateForm();
    });

    validateForm();
});