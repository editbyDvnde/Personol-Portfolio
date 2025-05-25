document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi EmailJS (pastikan sudah diinisialisasi di script terpisah atau di atas ini)
  emailjs.init('1_blCvmzrt_D1XPEK'); // ganti sesuai public key kamu

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Sending...';

    emailjs.sendForm('service_fqwfp06', 'template_t0jiuch', form)
      .then(() => {
        status.textContent = 'Message sent successfully! 🎉';
        form.reset();
      })
      .catch((error) => {
        status.textContent = 'Failed to send message. Please try again.';
        console.error('EmailJS error:', error);
      });
  });
});
