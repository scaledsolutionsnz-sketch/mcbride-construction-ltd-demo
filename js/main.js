// McBride Construction Ltd — interactions

// Intro overlay
window.addEventListener('load', function () {
  setTimeout(function () { document.body.classList.add('intro-done'); }, 1500);
});

// Nav scroll state
var nav = document.querySelector('.nav');
if (nav && !nav.classList.contains('nav--solid')) {
  var onScroll = function () {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Mobile nav toggle
var toggle = document.querySelector('.nav__toggle');
var links = document.querySelector('.nav__links');
if (toggle && links) {
  toggle.addEventListener('click', function () { links.classList.toggle('open'); });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { links.classList.remove('open'); });
  });
}

// Rolling hero
var slides = document.querySelectorAll('.hero__slide');
if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  var i = 0;
  setInterval(function () {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 6000);
}

// Scroll reveal
var reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  reveals.forEach(function (el) { io.observe(el); });
} else {
  reveals.forEach(function (el) { el.classList.add('in'); });
}

// Footer year
var yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();
