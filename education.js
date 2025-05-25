// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Toggle school details
  const toggleButtons = document.querySelectorAll('.toggle-details');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const details = this.closest('.school-info').querySelector('.school-details');
      const icon = this.querySelector('i');
      
      details.classList.toggle('active');
      
      if (details.classList.contains('active')) {
        this.querySelector('span').textContent = 'Hide Details';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
      } else {
        this.querySelector('span').textContent = 'View Details';
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
      }
    });
  });
  
  // Open map in new tab
  const mapButtons = document.querySelectorAll('.open-map');
  
  mapButtons.forEach(button => {
    button.addEventListener('click', function() {
      const mapUrl = this.getAttribute('data-map-url');
      window.open(mapUrl, '_blank');
    });
  });
  
  // Animate cards on scroll
  const observerOptions = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  const cards = document.querySelectorAll('.school-card');
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(card);
  });
});