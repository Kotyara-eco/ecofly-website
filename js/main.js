/**
 * EcoFly Kyiv — Main Client Application
 * Vanilla JS • No external runtime dependencies • Accessible & Resilient
 */

document.addEventListener('DOMContentLoaded', () => {
  // Часова мітка завантаження для захисту від спаму (мінімум 8 секунд)
  const PAGE_LOAD_TIME = Date.now();
  const MIN_SUBMISSION_DELAY_MS = 8000;

  /* ==========================================================================
     1. Тема оформлення (Світла / Темна)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIconSun = document.getElementById('theme-icon-sun');
  const themeIconMoon = document.getElementById('theme-icon-moon');

  function getSavedTheme() {
    try {
      const saved = localStorage.getItem('ecofly_theme');
      if (saved) return saved;
    } catch (e) {
      // Ігноруємо обмеження доступу до localStorage
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIconSun) themeIconSun.style.display = 'block';
      if (themeIconMoon) themeIconMoon.style.display = 'none';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIconSun) themeIconSun.style.display = 'none';
      if (themeIconMoon) themeIconMoon.style.display = 'block';
    }
    try {
      localStorage.setItem('ecofly_theme', theme);
    } catch (e) {}
  }

  // Ініціалізація теми
  applyTheme(getSavedTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ==========================================================================
     2. Перемикач мов (UA / EN)
     ========================================================================== */
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('lang-label');
  let currentLang = 'ua';

  function getSavedLang() {
    try {
      const saved = localStorage.getItem('ecofly_lang');
      if (saved === 'en' || saved === 'ua') return saved;
    } catch (e) {}
    return 'ua';
  }

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'uk');

    if (langLabel) {
      langLabel.textContent = lang === 'en' ? 'UA' : 'EN';
    }

    try {
      localStorage.setItem('ecofly_lang', lang);
    } catch (e) {}

    // Оновлення перекладів на сторінці
    if (window.ECOFLY_DATA && window.ECOFLY_DATA.EN_TRANSLATIONS) {
      const trans = window.ECOFLY_DATA.EN_TRANSLATIONS;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (lang === 'en') {
          if (!el.hasAttribute('data-original-ua')) {
            el.setAttribute('data-original-ua', el.innerHTML);
          }
          if (trans[key]) {
            el.innerHTML = trans[key];
          }
        } else {
          if (el.hasAttribute('data-original-ua')) {
            el.innerHTML = el.getAttribute('data-original-ua');
          }
        }
      });

      // Оновлення placeholder для полів введення
      document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (lang === 'en') {
          if (!el.hasAttribute('data-original-ph')) {
            el.setAttribute('data-original-ph', el.getAttribute('placeholder') || '');
          }
          if (trans[key]) {
            el.setAttribute('placeholder', trans[key]);
          }
        } else {
          if (el.hasAttribute('data-original-ph')) {
            el.setAttribute('placeholder', el.getAttribute('data-original-ph'));
          }
        }
      });
    }

    // Оновлення списку районів
    updateDistrictOptions(lang);
    // Оновлення розрахунків калькулятора з поточними одиницями
    updateCalculator();
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'ua' ? 'en' : 'ua');
    });
  }

  // Початкове застосування збереженої мови (якщо EN)
  if (getSavedLang() === 'en') {
    setLanguage('en');
  }

  /* ==========================================================================
     3. Мобільне меню (Бургер з підтримкою клавіатури й Escape)
     ========================================================================== */
  const burgerBtn = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (!mobileMenu || !burgerBtn) return;
    mobileMenu.classList.add('open');
    burgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileMenu || !burgerBtn) return;
    mobileMenu.classList.remove('open');
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Закриття по кліку на посилання
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => closeMobileMenu());
    });

    // Закриття по клавіші Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
        burgerBtn.focus();
      }
    });
  }

  /* ==========================================================================
     4. Райони Києва (Список та інтерактивні чипи)
     ========================================================================== */
  const districtSelect = document.getElementById('waste-district-select');
  const districtChipsContainer = document.getElementById('district-chips-container');

  function updateDistrictOptions(lang) {
    if (!districtSelect || !window.ECOFLY_DATA || !window.ECOFLY_DATA.KYIV_DISTRICTS) return;
    const districts = window.ECOFLY_DATA.KYIV_DISTRICTS;
    const currentVal = districtSelect.value;

    districtSelect.innerHTML = `<option value="">${lang === 'en' ? '-- Select Kyiv District --' : '-- Оберіть район Києва --'}</option>`;

    districts.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.id;
      opt.textContent = lang === 'en' ? d.en : d.ua;
      if (d.id === currentVal) opt.selected = true;
      districtSelect.appendChild(opt);
    });

    // Оновлюємо також текст чипів
    if (districtChipsContainer) {
      districtChipsContainer.innerHTML = '';
      districts.forEach(d => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = `district-chip ${d.id === currentVal ? 'selected' : ''}`;
        chip.textContent = lang === 'en' ? d.en : d.ua;
        chip.dataset.id = d.id;
        chip.addEventListener('click', () => {
          districtSelect.value = d.id;
          document.querySelectorAll('.district-chip').forEach(c => c.classList.remove('selected'));
          chip.classList.add('selected');
        });
        districtChipsContainer.appendChild(chip);
      });
    }
  }

  if (districtSelect) {
    districtSelect.addEventListener('change', () => {
      const val = districtSelect.value;
      document.querySelectorAll('.district-chip').forEach(c => {
        c.classList.toggle('selected', c.dataset.id === val);
      });
    });
  }

  updateDistrictOptions(currentLang);

  /* ==========================================================================
     5. Повзунок обсягу відходів у формі
     ========================================================================== */
  const wasteVolumeRange = document.getElementById('waste-volume-range');
  const wasteVolumeBadge = document.getElementById('waste-volume-badge');

  if (wasteVolumeRange && wasteVolumeBadge) {
    wasteVolumeRange.addEventListener('input', () => {
      const unit = currentLang === 'en' ? 'kg/day' : 'кг/добу';
      wasteVolumeBadge.textContent = `${wasteVolumeRange.value} ${unit}`;
    });
  }

  /* ==========================================================================
     6. Калькулятор ефекту BSF (Eawag/Sandec константи з data.js)
     ========================================================================== */
  const calcKgInput = document.getElementById('calc-kg-input');
  const calcKgSlider = document.getElementById('calc-kg-slider');
  const calcDaysSelect = document.getElementById('calc-days-select');
  const calcResLarvae = document.getElementById('calc-res-larvae');
  const calcResLandfill = document.getElementById('calc-res-landfill');
  const calcResArea = document.getElementById('calc-res-area');

  function updateCalculator() {
    if (!calcKgInput || !calcResLarvae || !calcResLandfill || !calcResArea) return;

    const kgPerDay = parseFloat(calcKgInput.value) || 0;
    const daysPerMonth = parseFloat(calcDaysSelect ? calcDaysSelect.value : 30) || 30;

    const C = window.ECOFLY_DATA ? window.ECOFLY_DATA.CALCULATION : {
      LARVAE_CONVERSION_MIN: 0.15,
      LARVAE_CONVERSION_MAX: 0.20,
      SPACE_KG_PER_M2_PER_DAY: 31.25
    };

    // Загальна маса відходів за місяць (кг)
    const monthlyTotalKg = kgPerDay * daysPerMonth;

    // 15–20% свіжих личинок від вологої маси
    const larvaeMin = Math.round(monthlyTotalKg * C.LARVAE_CONVERSION_MIN);
    const larvaeMax = Math.round(monthlyTotalKg * C.LARVAE_CONVERSION_MAX);

    // Тонни, що не потраплять на полігон
    const landfillTons = (monthlyTotalKg / 1000).toFixed(2);

    // Необхідна площа культиватора (31.25 кг/м²/добу)
    const areaM2 = (kgPerDay / C.SPACE_KG_PER_M2_PER_DAY).toFixed(1);

    // Відображення
    const kgWord = currentLang === 'en' ? 'kg' : 'кг';
    const tonWord = currentLang === 'en' ? 't' : 'т';
    const m2Word = currentLang === 'en' ? 'm²' : 'м²';

    calcResLarvae.textContent = `${larvaeMin.toLocaleString()} – ${larvaeMax.toLocaleString()} ${kgWord}`;
    calcResLandfill.textContent = `${landfillTons} ${tonWord}`;
    calcResArea.textContent = `~${areaM2} ${m2Word}`;
  }

  if (calcKgSlider && calcKgInput) {
    calcKgSlider.addEventListener('input', () => {
      calcKgInput.value = calcKgSlider.value;
      updateCalculator();
    });

    calcKgInput.addEventListener('input', () => {
      calcKgSlider.value = calcKgInput.value;
      updateCalculator();
    });
  }

  if (calcDaysSelect) {
    calcDaysSelect.addEventListener('change', updateCalculator);
  }

  updateCalculator();

  /* ==========================================================================
     7. Валідація форм, захист від спаму та копіювання заявки
     ========================================================================== */
  function setupFormHandling(formId, copyBtnId, statusId, formType) {
    const form = document.getElementById(formId);
    const copyBtn = document.getElementById(copyBtnId);
    const statusMsg = document.getElementById(statusId);

    function showStatus(text, type = 'error') {
      if (!statusMsg) return;
      statusMsg.className = `form-status-msg active ${type}`;
      statusMsg.textContent = text;
      statusMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function hideStatus() {
      if (!statusMsg) return;
      statusMsg.className = 'form-status-msg';
      statusMsg.textContent = '';
    }

    function checkSpamProtection() {
      // Honeypot перевірка
      const hp = form.querySelector('input[name="hp_company_url"]');
      if (hp && hp.value.trim() !== '') {
        console.warn('Bot detected by honeypot');
        return false;
      }

      // Перевірка 8-секундної затримки
      const elapsed = Date.now() - PAGE_LOAD_TIME;
      if (elapsed < MIN_SUBMISSION_DELAY_MS) {
        const msg = currentLang === 'en'
          ? 'Anti-spam delay: please wait a few seconds before submitting.'
          : 'Захист від спаму: зачекайте кілька секунд перед надсиланням заявки.';
        showStatus(msg, 'error');
        return false;
      }
      return true;
    }

    function checkConsent() {
      const consent = form.querySelector('input[name="consent"]');
      if (consent && !consent.checked) {
        const msg = currentLang === 'en'
          ? 'Please confirm your consent to personal data processing.'
          : 'Будь ласка, підтвердіть згоду на обробку контактних даних.';
        showStatus(msg, 'error');
        return false;
      }
      return true;
    }

    function serializeFormData() {
      const formData = new FormData(form);
      const lines = [];
      const title = formType === 'waste'
        ? (currentLang === 'en' ? 'EcoFly Waste Collection Application' : 'Заявка на забір відходів — EcoFly')
        : (currentLang === 'en' ? 'EcoFly Product Buyer Inquiry' : 'Запит покупця продукції — EcoFly');

      lines.push(`=== ${title} ===`);
      formData.forEach((value, key) => {
        if (key === 'hp_company_url') return;
        lines.push(`${key}: ${value}`);
      });
      lines.push(`Час створення: ${new Date().toLocaleString()}`);
      lines.push(`===============================`);
      return lines.join('\n');
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        hideStatus();

        if (!checkSpamProtection()) return;
        if (!checkConsent()) return;

        // Перевірка наявності реального action endpoint
        const action = form.getAttribute('action');
        if (!action || action === '#' || action.includes('[ПОСИЛАННЯ НА ФОРМУ]')) {
          const textData = serializeFormData();
          navigator.clipboard.writeText(textData).then(() => {
            const successMsg = currentLang === 'en'
              ? 'Request prepared! Data copied to clipboard. You can paste and send it directly via Telegram or Email.'
              : 'Заявку підготовлено! Дані скопійовано в буфер обміну. Ви можете надіслати їх у наш Telegram чи на Email.';
            showStatus(successMsg, 'success');
          }).catch(() => {
            const demoMsg = currentLang === 'en'
              ? 'Thank you! Your request has been validated. [FORM LINK]'
              : 'Дякуємо! Ваша заявка пройшла валідацію. [ПОСИЛАННЯ НА ФОРМУ]';
            showStatus(demoMsg, 'success');
          });
          return;
        }

        // Якщо дійсний endpoint налаштовано (Formspree/Google Forms)
        form.submit();
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        hideStatus();
        if (!checkConsent()) return;

        const textData = serializeFormData();
        navigator.clipboard.writeText(textData).then(() => {
          const successMsg = currentLang === 'en'
            ? 'Application copied to clipboard! You can paste it into Telegram or Email.'
            : 'Заявку успішно скопійовано в буфер обміну! Вставте її в Telegram або лист.';
          showStatus(successMsg, 'success');
        }).catch(() => {
          showStatus(currentLang === 'en' ? 'Failed to copy automatically.' : 'Не вдалося скопіювати автоматично.', 'error');
        });
      });
    }
  }

  setupFormHandling('waste-form', 'waste-copy-btn', 'waste-form-status', 'waste');
  setupFormHandling('buyers-form', 'buyers-copy-btn', 'buyers-form-status', 'buyers');

  /* ==========================================================================
     8. FAQ Акордеон
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(other => {
          other.classList.remove('open');
          const otherTrigger = other.querySelector('.faq-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  /* ==========================================================================
     9. Плавне підсвічування активних посилань меню при скролі
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav .nav-link');

  function highlightNavOnScroll() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  /* ==========================================================================
     10. Автоматичний рік у футері
     ========================================================================== */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
