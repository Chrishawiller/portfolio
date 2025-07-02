ScrollReveal().reveal('.hero-left', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 300
});
ScrollReveal().reveal('.hero-right', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 500
});
ScrollReveal().reveal('.navbar', {
  origin: 'top',
  distance: '20px',
  duration: 800,
  delay: 200
});
ScrollReveal().reveal('.about-img', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 200
});
ScrollReveal().reveal('.about-content', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 300
});
ScrollReveal().reveal('.contact-section', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 300
});
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.hover-container');
  const lines = document.querySelectorAll('.hover-line');
  let interval;
  let index = 0;

  container.addEventListener('mouseenter', () => {
    index = 0;
    showLine();
    interval = setInterval(() => {
      index = (index + 1) % lines.length;
      showLine();
    }, 1000); // 5 seconds
  });

  container.addEventListener('mouseleave', () => {
    clearInterval(interval);
    lines.forEach(line => line.style.opacity = 0);
  });

  function showLine() {
    lines.forEach((line, i) => {
      line.style.opacity = i === index ? 1 : 0;
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const overlayQuotes = document.querySelectorAll('.hover-quote');
  let i = 0;
  setInterval(() => {
    overlayQuotes.forEach((el, index) => {
      el.style.opacity = index === i ? 1 : 0;
    });
    i = (i + 1) % overlayQuotes.length;
  }, 5000);
});
function showThankYouAlert() {
    alert("Thank you! Your message has been sent.");
    return true; 
  }