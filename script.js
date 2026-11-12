'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
// Content remains visible if JavaScript or animation dependencies are unavailable.
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    gsap.from('.name-line', { y: 35, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out', clearProps: 'all' });
    gsap.utils.toArray('.reveal').forEach(element => {
      gsap.from(element, { y: 20, opacity: 0, duration: 0.7, ease: 'power2.out', clearProps: 'all', scrollTrigger: { trigger: element, start: 'top 94%', once: true } });
    });
  });
}
