/* ===========================================
   ELECTRO-FRIO — JavaScript Principal Optimizado
   =========================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- AÑO DINÁMICO EN FOOTER ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- STICKY HEADER ---- */
  const header = document.getElementById('main-header');
  let isScrolled = false;
  const onScroll = () => {
    const shouldScroll = window.scrollY > 60;
    if (shouldScroll !== isScrolled) {
      isScrolled = shouldScroll;
      header?.classList.toggle('scrolled', shouldScroll);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- MOBILE MENU (Offcanvas) ---- */
  const hamburger = document.querySelector('.hamburger');
  const offcanvas  = document.getElementById('offcanvas');
  const overlay    = document.getElementById('offcanvas-overlay');
  const closeBtn   = document.querySelector('.offcanvas-close');

  function openMenu() {
    offcanvas?.classList.add('open');
    overlay?.classList.add('open');
    hamburger?.classList.add('is-open');
    hamburger?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    offcanvas?.classList.remove('open');
    overlay?.classList.remove('open');
    hamburger?.classList.remove('is-open');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);
  document.querySelectorAll('.offcanvas-nav a').forEach(a => a.addEventListener('click', closeMenu));

  /* ---- CARGA DIFERIDA DEL VIDEO HERO (Evita bloqueo de LCP móvil) ---- */
  const heroVideo = document.querySelector('.hero-video[data-src]');
  if (heroVideo) {
    let videoLoaded = false;
    const initHeroVideo = () => {
      if (videoLoaded) return;
      videoLoaded = true;
      const src = heroVideo.getAttribute('data-src');
      if (src) {
        heroVideo.src = src;
        heroVideo.load();
        heroVideo.play().catch(() => {});
      }
      ['scroll', 'touchstart', 'mousemove', 'keydown'].forEach(evt =>
        window.removeEventListener(evt, initHeroVideo)
      );
    };
    ['scroll', 'touchstart', 'mousemove', 'keydown'].forEach(evt =>
      window.addEventListener(evt, initHeroVideo, { passive: true, once: true })
    );
  }

  /* ---- CARGA DIFERIDA DE SWIPER (Galería #trabajos) ---- */
  const trabajosSection = document.getElementById('trabajos');
  if (trabajosSection) {
    let swiperLoaded = false;
    const initSwiperCarousel = () => {
      if (swiperLoaded) return;
      swiperLoaded = true;

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/assets/vendor/swiper-bundle.min.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = '/assets/vendor/swiper-bundle.min.js';
      script.async = true;
      script.onload = () => {
        if (typeof Swiper !== 'undefined') {
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
      };
      document.body.appendChild(script);
    };

    const swiperObserver = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) {
        initSwiperCarousel();
        swiperObserver.disconnect();
      }
    }, { rootMargin: '500px 0px' });
    swiperObserver.observe(trabajosSection);
  }

  /* ---- FORMULARIO → WHATSAPP ---- */
  const form = document.getElementById('form-contacto');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre   = form.querySelector('[name="nombre"]')?.value?.trim()   || '';
    const servicio = form.querySelector('[name="servicio"]')?.value          || '';
    const mensaje  = form.querySelector('[name="mensaje"]')?.value?.trim()  || '';

    if (!nombre || !mensaje) {
      alert('Por favor completá tu nombre y el mensaje.');
      return;
    }

    let text = `Hola! Mi nombre es *${nombre}*.`;
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
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 76,
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

  /* ---- FAQ ACCORDION ---- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      faqItems.forEach(other => {
        if (other !== item && other.classList.contains('active')) {
          other.classList.remove('active');
          other.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
          const otherAnswer = other.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        question.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ---- CARGA DIFERIDA DE ELFSIGHT GOOGLE REVIEWS ---- */
  const testimoniosSection = document.getElementById('testimonios');
  if (testimoniosSection) {
    let elfsightLoaded = false;
    const loadElfsight = () => {
      if (elfsightLoaded) return;
      elfsightLoaded = true;
      const s = document.createElement('script');
      s.src = 'https://static.elfsight.com/platform/platform.js';
      s.async = true;
      document.body.appendChild(s);
    };
    const elfsightObserver = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) {
        loadElfsight();
        elfsightObserver.disconnect();
      }
    }, { rootMargin: '600px 0px' });
    elfsightObserver.observe(testimoniosSection);
  }

});
