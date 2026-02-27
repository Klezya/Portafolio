// ── THEME TOGGLE ──────────────────────────────────
const html = document.documentElement;
const toggle = document.getElementById('theme-toggle');

function applyTheme(dark: boolean) {
  if (dark) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

if (toggle) {
  applyTheme(html.classList.contains('dark'));
  toggle.addEventListener('click', () => {
    applyTheme(!html.classList.contains('dark'));
  });
}

// ── SCROLL FADE-IN ──────────────────────────────────
const fadeEls = document.querySelectorAll('.fade-in-section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
fadeEls.forEach((el) => observer.observe(el));

// ── IMAGE FALLBACKS ──────────────────────────────────
document.querySelectorAll('.project-image').forEach((img) => {
  img.addEventListener('error', (e) => {
    const target = e.currentTarget as HTMLElement;
    const placeholder = target.nextElementSibling as HTMLElement;
    target.style.display = 'none';
    if (placeholder) {
      placeholder.classList.remove('hidden');
      placeholder.style.display = 'flex';
    }
  });
});

const heroPhoto = document.getElementById('hero-photo');
const heroPlaceholder = document.getElementById('hero-placeholder');
if (heroPhoto && heroPlaceholder) {
  heroPhoto.addEventListener('error', () => {
    heroPhoto.style.display = 'none';
    heroPlaceholder.classList.remove('hidden');
  });
}

// ── CONTACT FORM (Formspree) ──────────────────────────
const FORMSPREE_ID = 'mjgezwyv';

const cfForm = document.getElementById('contact-form') as HTMLFormElement | null;
const cfSubmit = document.getElementById('cf-submit') as HTMLButtonElement | null;
const cfBtnText = document.getElementById('cf-btn-text');
const cfSpinner = document.getElementById('cf-spinner');
const cfFeedback = document.getElementById('cf-feedback');

function showFeedback(msg: string, type: 'success' | 'error') {
  if (!cfFeedback) return;
  cfFeedback.textContent = msg;
  cfFeedback.className = 'text-sm font-medium px-4 py-3 rounded-lg';
  if (type === 'success') {
    cfFeedback.style.backgroundColor = 'rgba(16,185,129,0.12)';
    cfFeedback.style.color = '#10b981';
    cfFeedback.style.border = '1px solid rgba(16,185,129,0.3)';
  } else {
    cfFeedback.style.backgroundColor = 'rgba(239,68,68,0.1)';
    cfFeedback.style.color = '#ef4444';
    cfFeedback.style.border = '1px solid rgba(239,68,68,0.25)';
  }
}

if (cfForm && cfSubmit && cfBtnText && cfSpinner && cfFeedback) {
  cfForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = (document.getElementById('cf-name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('cf-email') as HTMLInputElement).value.trim();
    const message = (document.getElementById('cf-message') as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      showFeedback('Por favor completa todos los campos.', 'error');
      return;
    }

    cfSubmit.disabled = true;
    cfBtnText.textContent = 'Enviando…';
    cfSpinner.classList.remove('hidden');
    cfFeedback.classList.add('hidden');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(cfForm),
      });

      if (res.ok) {
        showFeedback('¡Mensaje enviado! Te responderé pronto.', 'success');
        cfForm.reset();
      } else {
        throw new Error();
      }
    } catch {
      showFeedback('Hubo un error al enviar. Escríbeme directo a benjamin.nunez.beat@gmail.com', 'error');
    } finally {
      cfSubmit.disabled = false;
      cfBtnText.textContent = 'Enviar mensaje';
      cfSpinner.classList.add('hidden');
    }
  });
}
