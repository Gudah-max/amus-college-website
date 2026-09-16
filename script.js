// ============================================
// AMUS COLLEGE SCHOOL - Progressive enhancements
// Essential content and navigation links remain usable without this file.
// ============================================

document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60), { passive: true });
  }

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const setMenuState = (isOpen) => {
    if (!hamburger || !navLinks) return;
    hamburger.classList.toggle('open', isOpen);
    navLinks.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  };
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (event) => {
      const isOpen = !navLinks.classList.contains('open');
      setMenuState(isOpen);
      if (isOpen && event.detail === 0) navLinks.querySelector('a')?.focus();
    });
    navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenuState(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navLinks.classList.contains('open')) {
        setMenuState(false);
        hamburger.focus();
      }
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) link.classList.add('active');
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.target.dataset.counted) return;
        entry.target.dataset.counted = 'true';
        const target = Number.parseInt(entry.target.dataset.count, 10);
        if (Number.isNaN(target)) return;
        const suffix = entry.target.dataset.suffix || '';
        const start = performance.now();
        const update = (now) => {
          const progress = Math.min((now - start) / 1800, 1);
          entry.target.textContent = `${Math.floor((1 - Math.pow(1 - progress, 3)) * target).toLocaleString()}${suffix}`;
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-count]').forEach((counter) => counterObserver.observe(counter));
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeButton = document.getElementById('lightboxClose');
  let lightboxInvoker = null;
  let backgroundNodes = [];
  const setBackgroundInert = (isInert) => {
    if (!lightbox) return;
    if (isInert) {
      backgroundNodes = [...document.body.children].filter((node) => node !== lightbox);
      backgroundNodes.forEach((node) => { node.inert = true; node.setAttribute('aria-hidden', 'true'); });
    } else {
      backgroundNodes.forEach((node) => { node.inert = false; node.removeAttribute('aria-hidden'); });
      backgroundNodes = [];
    }
  };
  const closeLightbox = () => {
    if (!lightbox || lightbox.hidden) return;
    lightbox.classList.remove('active');
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-dialog-open');
    setBackgroundInert(false);
    lightboxInvoker?.focus();
  };
  const openLightbox = (trigger) => {
    if (!lightbox || !lightboxImg) return;
    const image = trigger.matches('img') ? trigger : trigger.querySelector('img');
    const source = trigger.dataset.lightbox || image?.currentSrc || image?.src;
    if (!source) return;
    lightboxInvoker = trigger;
    lightboxImg.src = source;
    lightboxImg.alt = image?.alt || trigger.getAttribute('aria-label') || 'Gallery image';
    setBackgroundInert(true);
    lightbox.hidden = false;
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.classList.add('active');
    document.body.classList.add('is-dialog-open');
    closeButton?.focus();
  };
  if (lightbox) {
    lightbox.hidden = true;
    closeButton?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (event) => {
      if (lightbox.hidden) return;
      if (event.key === 'Escape') { event.preventDefault(); closeLightbox(); }
      if (event.key === 'Tab') { event.preventDefault(); closeButton?.focus(); }
    });
  }
  document.querySelectorAll('[data-lightbox], .alumni-portrait-grid img').forEach((item) => {
    if (item.querySelector?.('a[href]')) return;
    if (!item.hasAttribute('tabindex')) item.tabIndex = 0;
    if (!item.hasAttribute('role')) item.setAttribute('role', 'button');
    if (!item.hasAttribute('aria-label')) {
      const image = item.matches('img') ? item : item.querySelector('img');
      item.setAttribute('aria-label', `View ${image?.alt || 'image'} full size`);
    }
    item.addEventListener('click', () => openLightbox(item));
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openLightbox(item); }
    });
  });

  document.querySelectorAll('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach((candidate) => {
        const isSelected = candidate === button;
        candidate.classList.toggle('active', isSelected);
        candidate.setAttribute('aria-pressed', String(isSelected));
      });
      document.querySelectorAll('.gallery-full-item[data-category]').forEach((item) => {
        item.hidden = filter !== 'all' && item.dataset.category !== filter;
      });
    });
  });

  const tabButtons = document.querySelectorAll('[data-tab]');
  const tabPanels = document.querySelectorAll('.tab-panel');
  tabButtons.forEach((button) => button.addEventListener('click', () => {
    const target = button.dataset.tab;
    tabButtons.forEach((candidate) => candidate.classList.toggle('active', candidate === button));
    tabPanels.forEach((panel) => { panel.style.display = panel.id === target ? 'grid' : 'none'; });
  }));

  [['contactForm', 'Sending…'], ['admissionsForm', 'Submitting…']].forEach(([formId, text]) => {
    const form = document.getElementById(formId);
    form?.addEventListener('submit', () => {
      const button = form.querySelector('[type="submit"]');
      if (button) { button.textContent = text; button.disabled = true; }
    });
  });
});
