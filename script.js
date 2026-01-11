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

// Adjust RSVP iframe height to fit viewport (can't read cross-origin content)
function adjustRsvpHeight() {
  const iframe = document.getElementById('rsvpForm');
  if (!iframe) return;
  // distance from top of viewport to top of iframe
  const rect = iframe.getBoundingClientRect();
  // available vertical space below the iframe top
  const available = window.innerHeight - rect.top - 20; // 20px margin
  const minHeight = 500; // fallback minimum
  // Make iframe 3x the available viewport area so the embedded form doesn't need its own scrollbar
  const desired = Math.max(available * 3, minHeight);
  // Optional clamp to avoid extremely large values on very tall screens
  const maxHeight = 4000;
  iframe.style.height = Math.min(desired, maxHeight) + 'px';
}

window.addEventListener('resize', adjustRsvpHeight);
window.addEventListener('orientationchange', adjustRsvpHeight);
window.addEventListener('load', adjustRsvpHeight);
document.addEventListener('DOMContentLoaded', adjustRsvpHeight);
