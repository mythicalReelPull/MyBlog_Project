// Show or update an error message for a field
function showError(field, message) {
    field.classList.add('input-error');
    let msg = field.nextElementSibling;
    if (msg && msg.classList.contains('error-message')) {
        msg.textContent = message;
    } else {
        msg = document.createElement('div');
        msg.className = 'error-message';
        msg.textContent = message;
        field.parentNode.insertBefore(msg, field.nextSibling);
    }
}

// Clear an existing error message on a field
function clearError(field) {
    field.classList.remove('input-error');
    const msg = field.nextElementSibling;
    if (msg && msg.classList.contains('error-message')) {
        msg.remove();
    }
}

function validateForm() {
    const form = document.getElementById('contact-form');
    let valid = true;

    // 1) Required text, email, tel, select
    form.querySelectorAll('input[required], select[required]').forEach(field => {
        clearError(field);
        const val = field.value.trim();

        if (!val) {
            valid = false;
            showError(field, 'This field is required.');
            return;
        }

        if (field.type === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(val)) {
                valid = false;
                showError(field, 'Please enter a valid email.');
            }
        }

        if (field.type === 'tel') {
            const phonePattern = /^[0-9\s()+-]+$/;
            if (val && !phonePattern.test(val)) {
                valid = false;
                showError(field, 'Please enter a valid phone number.');
            }
        }
    });

    // 2) Radio groups: gender and communication
    ['gender', 'communication'].forEach(name => {
        const radios = form.querySelectorAll(`input[name="${name}"]`);
        const anyChecked = Array.from(radios).some(r => r.checked);
        if (!anyChecked) {
            valid = false;
            showError(radios[0], 'Please make a selection.');
        } else {
            radios.forEach(r => clearError(r));
        }
    });

    // If invalid, scroll to first error
    if (!valid) {
        const firstErr = form.querySelector('.input-error');
        firstErr?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return valid;
}
