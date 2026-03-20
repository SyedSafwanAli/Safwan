/* ============================================================
   SIDEBAR TOGGLE
============================================================ */
const menuBtn   = document.getElementById('menuBtn');
const closeBtn  = document.getElementById('closeBtn');
const sidebar   = document.getElementById('sidebar');
const overlay   = document.getElementById('overlay');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('open');
  menuBtn.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
  menuBtn.classList.remove('active');
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSidebar();
});

/* ============================================================
   COUNTER ANIMATION
============================================================ */
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target; clearInterval(timer); return; }
    el.textContent = Math.floor(start);
  }, 16);
}

// Trigger counters when hero is visible
const counters = document.querySelectorAll('[data-count]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      animateCounter(el, parseInt(el.dataset.count));
      observer.unobserve(el);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => observer.observe(c));

/* ============================================================
   SERVICES ACCORDION
============================================================ */
const srvItems = document.querySelectorAll('.srv-item');

function setActiveSrv(item) {
  srvItems.forEach(i => i.classList.remove('active'));
  item.classList.add('active');
}

// Desktop: hover + click
srvItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) setActiveSrv(item);
  });
  item.addEventListener('click', () => setActiveSrv(item));
});

// Mobile: scroll-driven auto open
const srvScrollObserver = new IntersectionObserver((entries) => {
  if (window.innerWidth > 768) return;
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActiveSrv(entry.target);
    }
  });
}, {
  threshold: 0.55,
  rootMargin: '-15% 0px -15% 0px'
});

srvItems.forEach(item => srvScrollObserver.observe(item));

/* ============================================================
   TESTIMONIALS SLIDER
============================================================ */
const testiSlides = document.querySelectorAll('.testi-slide');
const testiDots   = document.querySelectorAll('.testi-dot');
const testiAvs    = document.querySelectorAll('.testi-av');

function showTesti(i) {
  testiSlides.forEach(s => s.classList.remove('active'));
  testiDots.forEach(d => d.classList.remove('active'));
  testiAvs.forEach(a => a.classList.remove('active'));

  const target = testiSlides[i];
  // Force reflow so animation re-triggers every time
  target.classList.add('active');
  void target.offsetWidth;

  testiDots[i].classList.add('active');
  testiAvs[i].classList.add('active');
}

testiDots.forEach(dot => dot.addEventListener('click', () => showTesti(+dot.dataset.index)));
testiAvs.forEach(av   => av.addEventListener('click',  () => showTesti(+av.dataset.index)));

/* ============================================================
   FOOTER LIVE DATE & TIME
============================================================ */
const footerDay  = document.getElementById('footerDay');
const footerTime = document.getElementById('footerTime');

function updateFooterClock() {
  const now  = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  footerDay.textContent = days[now.getDay()];

  let h   = now.getHours();
  const m = String(now.getMinutes()).padStart(2, '0');
  const ampm = h >= 12 ? 'pm' : 'am';
  h = h % 12 || 12;
  footerTime.textContent = `${h}:${m}${ampm}`;
}

updateFooterClock();
setInterval(updateFooterClock, 1000);

/* ============================================================
   FAQ ACCORDION  — works on every page that has .faq-question
============================================================ */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ============================================================
   HEADER SHADOW ON SCROLL
============================================================ */
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10
    ? '0 2px 20px rgba(0,0,0,0.08)'
    : 'none';
});
