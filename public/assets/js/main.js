/* ===========================================
   ELECTRO-FRIO — JavaScript Principal
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
  onScroll();

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

  /* ---- REPRODUCCIÓN INMEDIATA DEL VIDEO HERO (Desktop y Celular) ---- */
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    const ensureVideoPlayback = () => {
      if (heroVideo.paused) {
        heroVideo.play().catch(() => {});
      }
    };
    ensureVideoPlayback();
    window.addEventListener('touchstart', ensureVideoPlayback, { passive: true, once: true });
    window.addEventListener('click', ensureVideoPlayback, { passive: true, once: true });
  }

  /* ---- CARRUSEL SWIPER (Galería #trabajos) ---- */
  const initTrabajosSwiper = () => {
    if (typeof Swiper !== 'undefined' && document.querySelector('.swiper-trabajos')) {
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
  initTrabajosSwiper();

  /* ---- QUIZ INTERACTIVO → WHATSAPP (Sin correo) ---- */
  const quizForm = document.getElementById('form-quiz-contacto');
  if (quizForm) {
    const subOptionsByArea = {
      'Iluminación': [
        { title: 'Iluminación interior / hogar', desc: 'Colocación de plafones, spots, tiras LED y artefactos', icon: 'fa-house' },
        { title: 'Iluminación exterior, jardín o fachada', desc: 'Reflectores, estacas de jardín, luces decorativas y perímetros', icon: 'fa-lightbulb' },
        { title: 'Iluminación para local comercial o industria', desc: 'Proyectos lumínicos comerciales, vidrieras y galpones', icon: 'fa-store' },
        { title: 'Renovación a tecnología LED de bajo consumo', desc: 'Asesoramiento y recambio integral para ahorrar energía', icon: 'fa-bolt' },
      ],
      'Electricidad': [
        { title: 'Instalación eléctrica nueva o ampliación', desc: 'Cableados monofásicos/trifásicos, tomas y circuitos nuevos', icon: 'fa-plug' },
        { title: 'Reparación de falla o cortocircuito', desc: 'Diagnóstico de cortes, térmicas que saltan o fugas', icon: 'fa-bolt' },
        { title: 'Armado o revisión de tablero eléctrico', desc: 'Térmicas, disyuntores, protectores de tensión y puesta a tierra', icon: 'fa-sliders' },
        { title: 'Habilitación / Seguridad Eléctrica (Ley 10.281)', desc: 'Adecuación reglamentaria con Electricista Categoría III', icon: 'fa-certificate' },
      ],
      'Refrigeración': [
        { title: 'Instalación de aire acondicionado', desc: 'Colocación matriculada con bomba de vacío y garantía', icon: 'fa-snowflake' },
        { title: 'Mantenimiento preventivo y limpieza', desc: 'Limpieza profunda, control de gas y rendimiento', icon: 'fa-wrench' },
        { title: 'Reparación de aire acondicionado', desc: 'No enfría/calienta, pierde agua, carga de gas o placa', icon: 'fa-gear' },
        { title: 'Heladera comercial / familiar o cámara de frío', desc: 'Service prioritario para exhibidoras, freezers y heladeras', icon: 'fa-store' },
      ],
      'Electrodomésticos': [
        { title: 'Reparación de lavarropas', desc: 'Diagnóstico y service técnico con repuestos originales', icon: 'fa-gear' },
        { title: 'Reparación de horno eléctrico o microondas', desc: 'Revisión y reparación técnica garantizada', icon: 'fa-plug' },
        { title: 'Solicitud de retiro a domicilio', desc: 'Coordinamos el retiro y entrega del equipo en tu domicilio', icon: 'fa-house' },
        { title: 'Otro electrodoméstico del hogar', desc: 'Consulta técnica por otros equipos domésticos', icon: 'fa-wrench' },
      ],
      'Cámaras, Redes y Domótica': [
        { title: 'Instalación de cámaras de seguridad (CCTV)', desc: 'Visualización desde el celular, grabación y monitoreo', icon: 'fa-shield-halved' },
        { title: 'Configuración de redes Wi-Fi y routers', desc: 'Repetidores, cableado de red y mejora de cobertura', icon: 'fa-sliders' },
        { title: 'Domótica y automatización inteligente', desc: 'Control de luces, aires y accesos desde tu smartphone', icon: 'fa-lightbulb' },
        { title: 'Revisión o ampliación de sistema actual', desc: 'Mantenimiento o agregado de equipos y cámaras', icon: 'fa-wrench' },
      ],
      'Materiales / Otra consulta': [
        { title: 'Cotización de materiales eléctricos', desc: 'Cables, térmicas, luminarias LED, cajas e insumos', icon: 'fa-boxes-stacked' },
        { title: 'Presupuesto integral (Electricidad + Refrigeración)', desc: 'Atención completa para obras, viviendas o comercios', icon: 'fa-briefcase' },
        { title: 'Asesoramiento técnico para proyecto', desc: 'Planificación con Técnicos Superiores Matriculados', icon: 'fa-certificate' },
        { title: 'Otra consulta general', desc: 'Hablar directo con el equipo de ElectroFrio', icon: 'fa-circle-question' },
      ],
    };

    const quizState = {
      step: 1,
      area: '',
      areaIcon: 'fa-bolt',
      trabajo: '',
      lugar: 'Hogar / Domicilio',
      urgencia: 'Para esta semana',
    };

    const steps = quizForm.querySelectorAll('.quiz-step');
    const stepBadge = document.getElementById('quiz-step-badge');
    const progressFill = document.getElementById('quiz-progress-fill');
    const suboptionsContainer = document.getElementById('quiz-suboptions');
    const areaPill = document.getElementById('quiz-area-pill');
    const summaryBox = document.getElementById('quiz-summary-box');

    let step3LugarTouched = false;
    let step3UrgenciaTouched = false;

    const goToStep = (stepNumber) => {
      quizState.step = stepNumber;
      steps.forEach(s => {
        s.classList.toggle('active', Number(s.getAttribute('data-step')) === stepNumber);
      });
      if (stepBadge) stepBadge.textContent = `Paso ${stepNumber} de 4`;
      if (progressFill) progressFill.style.width = `${stepNumber * 25}%`;

      if (stepNumber === 4) {
        renderSummary();
      }
    };

    const renderSuboptions = (area) => {
      if (!suboptionsContainer) return;
      const list = subOptionsByArea[area] || subOptionsByArea['Electricidad'];
      suboptionsContainer.innerHTML = list.map(item => `
        <button type="button" class="quiz-option-card" data-trabajo="${item.title}">
          <span class="quiz-opt-icon"><i class="fa-solid ${item.icon}"></i></span>
          <span class="quiz-opt-text">
            <strong>${item.title}</strong>
            <small>${item.desc}</small>
          </span>
          <span class="quiz-opt-check"><i class="fa-solid fa-chevron-right"></i></span>
        </button>
      `).join('');

      suboptionsContainer.querySelectorAll('.quiz-option-card').forEach(btn => {
        btn.addEventListener('click', () => {
          suboptionsContainer.querySelectorAll('.quiz-option-card').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          quizState.trabajo = btn.getAttribute('data-trabajo') || '';
          setTimeout(() => goToStep(3), 180);
        });
      });
    };

    const renderSummary = () => {
      if (!summaryBox) return;
      summaryBox.innerHTML = `
        <div class="quiz-summary-title">
          <i class="fa-solid fa-circle-check"></i> Tu selección lista para enviar
        </div>
        <div class="quiz-summary-tags">
          <span class="quiz-summary-tag"><i class="fa-solid ${quizState.areaIcon}"></i> ${quizState.area}</span>
          <span class="quiz-summary-tag"><i class="fa-solid fa-wrench"></i> ${quizState.trabajo}</span>
          <span class="quiz-summary-tag"><i class="fa-solid fa-location-dot"></i> ${quizState.lugar}</span>
          <span class="quiz-summary-tag"><i class="fa-solid fa-clock"></i> ${quizState.urgencia}</span>
        </div>
      `;
    };

    // Paso 1: Selección de rubro
    quizForm.querySelectorAll('.quiz-step[data-step="1"] .quiz-option-card').forEach(btn => {
      btn.addEventListener('click', () => {
        quizForm.querySelectorAll('.quiz-step[data-step="1"] .quiz-option-card').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        quizState.area = btn.getAttribute('data-area') || 'Electricidad';
        quizState.areaIcon = btn.getAttribute('data-icon') || 'fa-bolt';
        if (areaPill) {
          areaPill.innerHTML = `<i class="fa-solid ${quizState.areaIcon}"></i> ${quizState.area}`;
        }
        renderSuboptions(quizState.area);
        setTimeout(() => goToStep(2), 180);
      });
    });

    // Paso 3: Selección de lugar y urgencia
    const lugarBtns = quizForm.querySelectorAll('#quiz-lugar-group .quiz-pill-btn');
    const urgenciaBtns = quizForm.querySelectorAll('#quiz-urgencia-group .quiz-pill-btn');

    // Marcar opciones por defecto visualmente
    lugarBtns[0]?.classList.add('selected');
    urgenciaBtns[1]?.classList.add('selected');

    const checkAutoAdvanceStep3 = () => {
      if (step3LugarTouched && step3UrgenciaTouched) {
        step3LugarTouched = false;
        step3UrgenciaTouched = false;
        setTimeout(() => goToStep(4), 220);
      }
    };

    lugarBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        lugarBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        quizState.lugar = btn.getAttribute('data-lugar') || 'Hogar / Domicilio';
        step3LugarTouched = true;
        checkAutoAdvanceStep3();
      });
    });

    urgenciaBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        urgenciaBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        quizState.urgencia = btn.getAttribute('data-urgencia') || 'Para esta semana';
        step3UrgenciaTouched = true;
        checkAutoAdvanceStep3();
      });
    });

    document.getElementById('quiz-step3-next')?.addEventListener('click', () => {
      goToStep(4);
    });

    // Botones Volver y Reiniciar
    quizForm.querySelectorAll('[data-quiz-prev]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (quizState.step > 1) {
          goToStep(quizState.step - 1);
        }
      });
    });

    document.getElementById('quiz-reset-btn')?.addEventListener('click', () => {
      quizForm.querySelectorAll('.quiz-option-card').forEach(b => b.classList.remove('selected'));
      step3LugarTouched = false;
      step3UrgenciaTouched = false;
      goToStep(1);
    });

    // Paso 4: Envío a WhatsApp (Sin correo)
    quizForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombreInput = document.getElementById('quiz-nombre');
      const detalleInput = document.getElementById('quiz-detalle');
      const nombre = nombreInput?.value?.trim() || '';
      const detalle = detalleInput?.value?.trim() || '';

      if (!nombre) {
        nombreInput?.focus();
        alert('Por favor ingresá tu nombre para enviarte la atención por WhatsApp.');
        return;
      }

      let text = `Hola *ElectroFrio*! Mi nombre es *${nombre}*.\n`;
      text += `Completé el quiz de la web porque estoy buscando:\n\n`;
      text += `• *Rubro:* ${quizState.area || 'Consulta general'}\n`;
      if (quizState.trabajo) text += `• *Necesidad:* ${quizState.trabajo}\n`;
      if (quizState.lugar) text += `• *Lugar:* ${quizState.lugar}\n`;
      if (quizState.urgencia) text += `• *Prioridad:* ${quizState.urgencia}`;
      if (detalle) text += `\n\n*Detalle adicional:*\n${detalle}`;

      const numero = '5493804349027';
      window.open(`https://wa.me/${numero}?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  /* ---- FADE-IN (Intersection Observer) ---- */
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  fadeEls.forEach(el => observer.observe(el));

  /* ---- ANIMACIONES INTERACTIVAS DE TARJETAS EN CELULAR ---- */
  const mobileCards = document.querySelectorAll('.card-servicio, .equipo-card, .faq-card-square');
  if (mobileCards.length > 0) {
    const focusObserver = new IntersectionObserver((entries) => {
      if (window.innerWidth > 768 && !window.matchMedia('(hover: none)').matches) return;
      entries.forEach(entry => {
        entry.target.classList.toggle('mobile-focus', entry.isIntersecting);
      });
    }, { threshold: 0.55, rootMargin: '-15% 0px -15% 0px' });

    mobileCards.forEach(card => {
      focusObserver.observe(card);
      card.addEventListener('touchstart', () => {
        mobileCards.forEach(c => { if (c !== card) c.classList.remove('mobile-focus'); });
        card.classList.add('mobile-focus');
      }, { passive: true });
    });
  }

  /* ---- SMOOTH SCROLL con offset dinámico del header ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (!id || id === '#') return;
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

  /* ---- FAQ TARJETAS CUADRADAS INTERACTIVAS ---- */
  const faqCards = document.querySelectorAll('.faq-card-square');
  faqCards.forEach(card => {
    card.addEventListener('click', () => {
      const wasActive = card.classList.contains('active');
      faqCards.forEach(c => c.classList.remove('active'));
      if (!wasActive) card.classList.add('active');
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
    }, { rootMargin: '800px 0px' });
    elfsightObserver.observe(testimoniosSection);
  }

  /* ---- TRABAJÁ CON NOSOTROS - FORMULARIO DE POSTULACIÓN ---- */
  const empleoForm = document.getElementById('form-empleo-cv');
  const cvFileInput = document.getElementById('emp-cv-file');
  const cvDropzone = document.getElementById('cv-dropzone');
  const cvDzDefault = document.getElementById('cv-dz-default');
  const cvDzSelected = document.getElementById('cv-dz-selected');
  const cvFilenameLabel = document.getElementById('cv-filename-label');
  const cvRemoveBtn = document.getElementById('cv-remove-btn');

  let selectedCVName = '';

  cvDropzone?.addEventListener('click', (e) => {
    if (e.target.closest('#cv-remove-btn')) return;
    cvFileInput?.click();
  });

  cvDropzone?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      cvFileInput?.click();
    }
  });

  cvFileInput?.addEventListener('change', () => {
    if (cvFileInput.files && cvFileInput.files[0]) {
      selectedCVName = cvFileInput.files[0].name;
      if (cvFilenameLabel) cvFilenameLabel.textContent = selectedCVName;
      if (cvDzDefault) cvDzDefault.style.display = 'none';
      if (cvDzSelected) cvDzSelected.style.display = 'flex';
      cvDropzone?.classList.add('has-file');
    }
  });

  cvRemoveBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (cvFileInput) cvFileInput.value = '';
    selectedCVName = '';
    if (cvDzDefault) cvDzDefault.style.display = 'flex';
    if (cvDzSelected) cvDzSelected.style.display = 'none';
    cvDropzone?.classList.remove('has-file');
  });

  empleoForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('emp-nombre')?.value.trim();
    const zona = document.getElementById('emp-zona')?.value.trim();
    const especialidad = document.querySelector('input[name="emp-especialidad"]:checked')?.value || 'Técnico';
    const experiencia = document.querySelector('input[name="emp-experiencia"]:checked')?.value || 'Con experiencia';
    const mensaje = document.getElementById('emp-mensaje')?.value.trim();

    if (!nombre) {
      alert('Por favor, ingresá tu nombre completo.');
      document.getElementById('emp-nombre')?.focus();
      return;
    }

    let texto = `¡Hola ElectroFrío! 👋 Me postulo para la *BÚSQUEDA LABORAL: Técnico en Refrigeración y Electricidad*.\n\n`;
    texto += `📋 *MIS DATOS DE POSTULACIÓN:*\n`;
    texto += `👤 *Nombre y Apellido:* ${nombre}\n`;
    texto += `⚡ *Especialidad:* ${especialidad}\n`;
    texto += `🛠️ *Experiencia:* ${experiencia}\n`;
    texto += `📍 *Zona / Barrio:* ${zona || 'La Rioja'}\n`;

    if (selectedCVName) {
      texto += `📄 *Archivo CV:* ${selectedCVName} (adjunto en este chat con el clip 📎)\n`;
    }
    if (mensaje) {
      texto += `💬 *Comentario:* ${mensaje}\n`;
    }

    texto += `\nQuedo a disposición para coordinar una entrevista. ¡Muchas gracias!`;

    const waUrl = `https://wa.me/5493804349027?text=${encodeURIComponent(texto)}`;

    if (selectedCVName) {
      alert(`¡Muchas gracias, ${nombre}!\n\nSe abrirá WhatsApp con tus datos listos. Recordá tocar el botón del clip 📎 para adjuntar tu archivo (${selectedCVName}) en la conversación.`);
    }

    window.open(waUrl, '_blank');
  });

});
