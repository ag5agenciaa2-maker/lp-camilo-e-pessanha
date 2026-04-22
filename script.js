/* ============================================================
   CAMILO & PESSANHA ADVOCACIA — script.js
   Vanilla ES6 · No frameworks
   ============================================================ */

(function () {
  'use strict';

  /* --------- NAV scroll state --------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 80) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --------- Mobile drawer (Premium) --------- */
  const burger = document.getElementById('navBurger');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer__link');

  const toggleDrawer = (state) => {
    drawer.classList.toggle('is-active', state);
    overlay.classList.toggle('is-active', state);
    document.body.classList.toggle('no-scroll', state);
  };

  if (burger && drawer && overlay) {
    burger.addEventListener('click', () => toggleDrawer(true));
    closeBtn.addEventListener('click', () => toggleDrawer(false));
    overlay.addEventListener('click', () => toggleDrawer(false));

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleDrawer(false);
      });
    });
  }

  /* --------- Hero Photo Slider --------- */
  const heroSlides = document.querySelectorAll('.hero__photo-slide');
  if (heroSlides.length > 1) {
    let currentSlide = 0;
    setInterval(() => {
      heroSlides[currentSlide].classList.remove('hero__photo-slide--active');
      currentSlide = (currentSlide + 1) % heroSlides.length;
      heroSlides[currentSlide].classList.add('hero__photo-slide--active');
    }, 5000);
  }

  /* --------- IntersectionObserver — reveal animations --------- */
  const animTargets = document.querySelectorAll('[data-anim]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.dataset.delay || '0', 10);
        setTimeout(() => el.classList.add('is-in'), delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  animTargets.forEach((t) => io.observe(t));

  /* Hero elements: fire on load */
  document.querySelectorAll('.hero [data-anim]').forEach((el) => {
    const delay = parseInt(el.dataset.delay || '0', 10);
    setTimeout(() => el.classList.add('is-in'), 200 + delay);
  });

  /* --------- Accordion (áreas) --------- */
  const acc = document.getElementById('acc');
  if (acc) {
    // Stagger items on first reveal
    const accItems = acc.querySelectorAll('.acc__item');
    accItems.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      item.style.transition = 'opacity 500ms ease-out, transform 500ms ease-out';
    });
    const accIo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          accItems.forEach((item, i) => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'none';
            }, i * 120);
          });
          accIo.disconnect();
        }
      });
    }, { threshold: 0.2 });
    accIo.observe(acc);

    acc.addEventListener('click', (e) => {
      const head = e.target.closest('.acc__head');
      if (!head) return;
      const item = head.parentElement;
      const wasOpen = item.classList.contains('is-open');
      accItems.forEach((i) => i.classList.remove('is-open'));
      if (!wasOpen) item.classList.add('is-open');
    });
  }

  /* --------- FAQ --------- */
  const faqList = document.getElementById('faqList');
  if (faqList) {
    faqList.addEventListener('click', (e) => {
      const head = e.target.closest('.faq__head');
      if (!head) return;
      const item = head.parentElement;
      item.classList.toggle('is-open');
    });
  }


  /* --------- Reviews carousel (fade) --------- */
  const reviews = [
    {
      text: "Advocacia humanizada, os Drs. Rodrigo e Camilo são muito atenciosos e falam com linguagem clara sobre todos os detalhes do processo. São acessíveis e honestos. Já é a quarta vez que utilizo os serviços sempre com êxito, recomendo fortemente.",
      name: "Thais Silva",
      time: "Há 4 meses"
    },
    {
      text: "Dr. Camilo é um ótimo profissional! Sempre muito solícito e competente. Ele me orientou de forma clara e objetiva, tirando todas as minhas dúvidas desde o início até o fim. Com certeza, recomendo seus serviços.",
      name: "André Silva",
      time: "Há 1 ano"
    },
    {
      text: "São profissionais extremamente competentes e atenciosos.",
      name: "Monique N.",
      time: "Há 3 meses"
    },
    {
      text: "Ótimo profissional, fui muito bem atendido. O melhor de tudo: competente, resolveu meu problema. Indico para qualquer causa.",
      name: "Deivison Azevedo",
      time: "Há 1 ano"
    },
    {
      text: "O escritório de advocacia é totalmente humanizado, há compreensão dentro dos fatos e muito bem relacionado com a LEI. Recorri algumas vezes porque necessitava que meus interesses fossem defendidos.",
      name: "Roderico B. Santos",
      time: "Há 1 ano"
    },
    {
      text: "Excelentes advogados! Recomendo a todos que buscam seus direitos perante a justiça. Profissionais experientes, atendimento excelente. CP é 1000!",
      name: "Carlos Henrique Lemos",
      time: "Há 1 ano"
    },
    {
      text: "Advogados sempre disponíveis para tirar dúvidas e atualizar sobre os processos. Muito competentes! Excelentes profissionais.",
      name: "Breno Lopes",
      time: "Há 1 ano"
    },
    {
      text: "Excelente equipe, recomendo muito! Podem contratar sem medo, resolveram meus problemas.",
      name: "Giovanna Flores",
      time: "Há 1 ano"
    },
    {
      text: "Ótimo atendimento, profissionais de alta confiança. Eu indico muito.",
      name: "Antônio Vieira",
      time: "Há 1 ano"
    },
    {
      text: "Super profissionais e atenciosos. Possuem amplo conhecimento. Escritório muito bem localizado e de fácil acesso. Recomendo muito.",
      name: "Inglid Avallone",
      time: "Há 1 ano"
    }
  ];

  const stage = document.getElementById('reviewStage');
  const dotsWrap = document.getElementById('revDots');
  let current = 0;
  let autoTimer = null;

  const initials = (name) =>
    name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

  if (stage) {
    reviews.forEach((r, i) => {
      const card = document.createElement('article');
      card.className = 'review-card' + (i === 0 ? ' is-active' : '');
      card.innerHTML = `
        <div class="review-card__stars">★★★★★</div>
        <p class="review-card__text">${r.text}</p>
        <div class="review-card__meta">
          <div class="review-card__avatar">${initials(r.name)}</div>
          <div class="review-card__who">
            <span class="review-card__name">${r.name}</span>
            <span class="review-card__time">${r.time}</span>
          </div>
          <div class="review-card__g">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.56c2.08-1.92 3.28-4.74 3.28-8.1z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.65l-3.56-2.77c-.98.66-2.24 1.06-3.72 1.06-2.86 0-5.29-1.93-6.15-4.53H2.18v2.84A11 11 0 0012 23z"/>
              <path fill="#FBBC05" d="M5.85 14.11a6.6 6.6 0 010-4.22V7.05H2.18a11 11 0 000 9.9l3.67-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A11 11 0 002.18 7.05l3.67 2.84C6.71 7.31 9.14 5.38 12 5.38z"/>
            </svg>
            Avaliação no Google
          </div>
        </div>
      `;
      stage.appendChild(card);

      const dot = document.createElement('button');
      dot.className = i === 0 ? 'is-active' : '';
      dot.setAttribute('aria-label', `Ir para depoimento ${i + 1}`);
      dot.addEventListener('click', () => go(i));
      dotsWrap.appendChild(dot);
    });

    const cards = stage.querySelectorAll('.review-card');
    const dots = dotsWrap.querySelectorAll('button');

    const go = (i) => {
      current = (i + reviews.length) % reviews.length;
      cards.forEach((c, idx) => c.classList.toggle('is-active', idx === current));
      dots.forEach((d, idx) => d.classList.toggle('is-active', idx === current));
    };

    const startAuto = () => {
      stopAuto();
      autoTimer = setInterval(() => go(current + 1), 5000);
    };
    const stopAuto = () => { if (autoTimer) clearInterval(autoTimer); };

    document.getElementById('revPrev').addEventListener('click', () => { go(current - 1); startAuto(); });
    document.getElementById('revNext').addEventListener('click', () => { go(current + 1); startAuto(); });

    stage.addEventListener('mouseenter', stopAuto);
    stage.addEventListener('mouseleave', startAuto);
    startAuto();
  }

  /* --------- Form --------- */
  const form = document.getElementById('ctaForm');
  const note = document.getElementById('ctaFormNote');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#f-name').value.trim();
      const email = form.querySelector('#f-email').value.trim();
      const phone = form.querySelector('#f-phone').value.trim();
      const area = form.querySelector('#f-area').value;
      const msg = form.querySelector('#f-msg').value.trim();

      if (!name || !phone || !email) {
        note.hidden = false;
        note.textContent = '⚠ Por favor, preencha nome, e-mail e telefone.';
        note.style.color = '#e67e22';
        return;
      }

      // Redirection to WhatsApp with formatted list message (Skill Pattern)
      const text = `Olá, me chamo ${name}, vim através do site e gostaria de uma informação.

- E-mail: ${email}
- Telefone: ${phone}
- Área de Atuação: ${area}
- Detalhes do Caso: ${msg || 'Não informados'}`;

      const url = `https://wa.me/5521972742109?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener');

      note.hidden = false;
      note.textContent = '✓ Redirecionando ao WhatsApp...';
      note.style.color = 'var(--gold)';
      form.reset();
    });
  }

  /* --------- Smooth anchor offset adjust for sticky nav --------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  /* --------- Hero photo slideshow --------- */
  (function () {
    const slides = document.querySelectorAll('.hero__photo-slide');
    if (slides.length < 2) return;
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('hero__photo-slide--active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('hero__photo-slide--active');
    }, 5000);
  })();

  /* --------- WhatsApp Premium Bubble --------- */
  (function initWhatsappBubble() {
    const bubble = document.getElementById('whatsapp-message');
    const notify = document.getElementById('whatsapp-notify');
    const closeBtn = document.getElementById('close-bubble');
    const whatsappBtn = document.getElementById('whatsapp-btn');
    
    if (!bubble || !notify) return;

    // 1. Mostrar balão após 10 segundos
    setTimeout(() => {
        bubble.classList.add('show');
        
        // 2. Desaparecer automaticamente após 20 segundos de exibição
        setTimeout(() => {
            if (bubble.classList.contains('show')) {
                hideBubble();
            }
        }, 20000);
    }, 10000);

    const hideBubble = () => {
        bubble.classList.remove('show');
        // 3. Mostrar notificação 5 segundos após o balão sumir
        setTimeout(() => {
            notify.classList.add('show');
        }, 5000);
    };

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
          e.preventDefault();
          hideBubble();
      });
    }

    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', () => {
          bubble.classList.remove('show');
          notify.classList.remove('show');
      });
    }
  })();

})();
