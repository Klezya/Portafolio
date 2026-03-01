import { translations, type Lang, type TranslationKey } from './translations';

export function getLang(): Lang {
  const stored = localStorage.getItem('lang');
  if (stored === 'es' || stored === 'en') return stored;
  return 'es';
}

export function applyTranslations(lang: Lang): void {
  const t = translations[lang] as Record<string, string>;

  // Text content
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n as TranslationKey;
    if (key && key in t) el.textContent = t[key];
  });

  // HTML content (for elements with <strong>, <br/>, etc.)
  document.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml as TranslationKey;
    if (key && key in t) el.innerHTML = t[key];
  });

  // Placeholder attributes
  document
    .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-i18n-placeholder]')
    .forEach((el) => {
      const key = (el as HTMLElement).dataset.i18nPlaceholder as TranslationKey;
      if (key && key in t) el.placeholder = t[key];
    });

  // Aria-label attributes
  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria as TranslationKey;
    if (key && key in t) el.setAttribute('aria-label', t[key]);
  });

  // Alt attributes (images)
  document.querySelectorAll<HTMLImageElement>('[data-i18n-alt]').forEach((el) => {
    const key = el.dataset.i18nAlt as TranslationKey;
    if (key && key in t) el.alt = t[key];
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}

export function initI18n(): void {
  const lang = getLang();
  if (lang !== 'es') applyTranslations(lang);

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const next: Lang = getLang() === 'es' ? 'en' : 'es';
      localStorage.setItem('lang', next);
      applyTranslations(next);
    });
  }
}
