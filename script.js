const timeElement = document.querySelector('[data-testid="test-user-time"]');
if (timeElement) {
  function updateTime() {
    timeElement.textContent = new Date().toLocaleString();
  }
  updateTime();
  setInterval(updateTime, 1000);
}

// Contact form validation (Stage 1)
const form = document.querySelector('.contact-form');
if (form) {
  const successMessage = document.querySelector('[data-testid="test-contact-success"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const subject = document.querySelector('#subject');
    const message = document.querySelector('#message');

    const errors = {
      name: document.querySelector('#test-contact-error-name'),
      email: document.querySelector('#test-contact-error-email'),
      subject: document.querySelector('#test-contact-error-subject'),
      message: document.querySelector('#test-contact-error-message')
    };

    // Reset messages
    Object.values(errors).forEach(el => el.textContent = '');
    successMessage.textContent = '';

    let valid = true;

    if (!name.value.trim()) {
      errors.name.textContent = 'Full name is required.';
      valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
      errors.email.textContent = 'Please enter a valid email address.';
      valid = false;
    }

    if (!subject.value.trim()) {
      errors.subject.textContent = 'Subject is required.';
      valid = false;
    }

    if (message.value.trim().length < 10) {
      errors.message.textContent = 'Message must be at least 10 characters.';
      valid = false;
    }

    if (valid) {
      successMessage.textContent = 'Thank you! Your message has been successfully submitted.';
      form.reset();
    }
  });
}
