/* ===========================================
   ELECTRO-FRIO — JavaScript Principal
   =========================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- STICKY HEADER ---- */
  const header = document.getElementById('main-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- MOBILE MENU (Offcanvas) ---- */
  const hamburger = document.querySelector('.hamburger');
  const offcanvas  = document.getElementById('offcanvas');
  const overlay    = document.getElementById('offcanvas-overlay');
  const closeBtn   = document.querySelector('.offcanvas-close');

  function openMenu() {
    offcanvas.classList.add('open');
    overlay.classList.add('open');
    hamburger.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    offcanvas.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);
  document.querySelectorAll('.offcanvas-nav a').forEach(a => a.addEventListener('click', closeMenu));

  /* ---- HERO SWIPER ---- */
  if (typeof Swiper !== 'undefined') {
    new Swiper('.swiper-hero', {
      loop: true,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: { delay: 7500, disableOnInteraction: false },
      speed: 1000,
      pagination: {
        el: '.swiper-hero .swiper-pagination',
        clickable: true,
      },
    });

    /* ---- SERVICIOS SWIPER ---- */
    new Swiper('.swiper-servicios', {
      loop: false,
      grabCursor: true,
      speed: 600,
      navigation: {
        nextEl: '.swiper-srv-next',
        prevEl: '.swiper-srv-prev',
      },
      pagination: {
        el: '.swiper-servicios .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0:    { slidesPerView: 1.15, spaceBetween: 14, centeredSlides: true },
        600:  { slidesPerView: 2,    spaceBetween: 16, centeredSlides: false },
        1024: { slidesPerView: 3,    spaceBetween: 20, centeredSlides: false },
        1280: { slidesPerView: 3.2,  spaceBetween: 22, centeredSlides: false },
      },
    });

    /* ---- TRABAJOS SWIPER ---- */
    new Swiper('.swiper-trabajos', {
      loop: true,
      grabCursor: true,
      autoplay: { delay: 3600, disableOnInteraction: false },
      speed: 550,
      navigation: {
        nextEl: '.swiper-trb-next',
        prevEl: '.swiper-trb-prev',
      },
      pagination: {
        el: '.swiper-trabajos .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0:    { slidesPerView: 1.15, spaceBetween: 12, centeredSlides: true },
        600:  { slidesPerView: 2,    spaceBetween: 16, centeredSlides: false },
        1024: { slidesPerView: 3,    spaceBetween: 20, centeredSlides: false },
      },
    });
  }

  /* ---- FORMULARIO → WHATSAPP ---- */
  const form = document.getElementById('form-contacto');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre   = form.querySelector('[name="nombre"]')?.value?.trim()   || '';
    const telefono = form.querySelector('[name="telefono"]')?.value?.trim() || '';
    const servicio = form.querySelector('[name="servicio"]')?.value          || '';
    const mensaje  = form.querySelector('[name="mensaje"]')?.value?.trim()  || '';

    if (!nombre || !mensaje) {
      alert('Por favor completá tu nombre y el mensaje.');
      return;
    }

    let text = `Hola! Mi nombre es *${nombre}*.`;
    if (telefono) text += `\nTeléfono: ${telefono}`;
    if (servicio) text += `\nServicio consultado: *${servicio}*`;
    text += `\n\n*Mensaje:*\n${mensaje}`;

    const numero = '5493804349027';
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(text)}`, '_blank');
  });

  /* ---- FADE-IN (Intersection Observer) ---- */
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  fadeEls.forEach(el => observer.observe(el));

  /* ---- SMOOTH SCROLL con offset del header ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 76;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - offset,
          behavior: 'smooth',
        });
      }
    });
  });

  /* ---- ACTIVE NAV LINK (Scroll Spy) ---- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.main-nav a[href^="#"]');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${entry.target.id}`
            ? 'var(--neon)' : '';
        });
      }
    });
  }, { threshold: 0.45 });
  sections.forEach(s => spyObserver.observe(s));

});

