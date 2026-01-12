// Timeline Animation beim Scrollen
document.addEventListener('DOMContentLoaded', function() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  // Intersection Observer für Scroll Animation
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  timelineItems.forEach(item => {
    observer.observe(item);
  });

  // Smooth Scroll für Browser die das nicht unterstützen
  document.documentElement.style.scrollBehavior = 'smooth';
});

/*Observer für Fade-In-Effekte*/
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });



window.addEventListener('resize', adjustRsvpHeight);
window.addEventListener('orientationchange', adjustRsvpHeight);
window.addEventListener('load', adjustRsvpHeight);
document.addEventListener('DOMContentLoaded', adjustRsvpHeight);
