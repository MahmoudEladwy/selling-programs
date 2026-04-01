// StackPilot — Main JavaScript

// ---- NAV SCROLL EFFECT ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) nav?.classList.add('scrolled');
  else nav?.classList.remove('scrolled');
}, { passive: true });

// ---- HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('open');
});

// ---- NEWSLETTER FORM ----
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector('.nl-input');
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ You\'re in!';
  btn.style.background = '#22d3a0';
  input.value = '';
  input.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Subscribe Free';
    btn.style.background = '';
    input.disabled = false;
  }, 4000);
}

// ---- CONTACT FORM ----
function handleContactSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-primary');
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#22d3a0';
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
    e.target.reset();
  }, 4000);
}

// ---- SCROLL REVEAL ----
const revealElements = document.querySelectorAll('.tool-card, .use-case-card, .blog-card, .trust-stat, .blog-post-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
  observer.observe(el);
});

// ---- CATEGORY FILTER (for categories page) ----
function filterCategory(cat) {
  const pills = document.querySelectorAll('.filter-pill');
  const sections = document.querySelectorAll('.category-section');
  pills.forEach(p => p.classList.remove('active'));
  document.querySelector(`[data-filter="${cat}"]`)?.classList.add('active');
  if (cat === 'all') {
    sections.forEach(s => s.style.display = '');
  } else {
    sections.forEach(s => {
      s.style.display = s.dataset.cat === cat ? '' : 'none';
    });
  }
}

// ---- SMOOTH ANCHOR SCROLL ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- AFFILIATE LINK TRACKING (placeholder) ----
document.querySelectorAll('[rel*="sponsored"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const tool = link.closest('.tool-card, .pricing-box')?.querySelector('.tool-name, h1')?.textContent || 'unknown';
    console.log(`[StackPilot] Affiliate click: ${tool}`);
    // Replace with your actual analytics: gtag('event', 'affiliate_click', { tool });
  });
});
