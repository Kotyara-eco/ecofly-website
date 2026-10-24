# EcoFly — Односторінковий вебсайт циркулярної біоекономіки (Київ)

Статичний односторінковий сайт (Single Page Application без сторонніх залежностей) для проєкту переробки рослинних органічних відходів за допомогою личинок чорної левової мухи (*Hermetia illucens*, BSF) у кормовий протеїн, жир і зоогумус (фрас).

**Статус проєкту:** Прототип.

---

## 1. Структура файлів проєкту

```
ecofly/
├── index.html                  # Головна сторінка (семантичний HTML5, WCAG AA, SEO, JSON-LD, UA за замовчуванням)
├── 404.html                    # Автономна брендована сторінка помилки 404
├── README.md                   # Ця інструкція
├── css/
│   └── style.css               # Дизайн-система, CSS-змінні (:root), світла й темна теми, @media print
├── js/
│   ├── data.js                 # Єдине джерело констант: Eawag/Sandec, ціни, 10 районів Києва, EN-словник, FAQ
│   └── main.js                 # Vanilla JS: перемикач мов (UA/EN) і тем, калькулятор, акордеон, валідація, захист від спаму
└── assets/
    ├── favicon.svg             # Векторна іконка сайту
    ├── og-image.png            # Open Graph зображення для прев'ю в соцмережах (1200×630 px)
    ├── ecofly-passport-sample.html # Статичний зразок офіційного бланка паспорта партії для друку та перегляду
    └── photos/                 # Фотоматеріали біології Hermetia illucens з відкритими ліцензіями
        ├── bsf-larvae.svg      # Препупи BSF на субстраті (заміна на .jpg / .webp за бажанням)
        ├── bsf-adult.svg       # Доросла муха BSF (імаго)
        └── bsf-frass.svg       # Готовий органічний зоогумус
```

---

## 2. Як замінити або додати власні фото в `assets/photos/`

Зараз у каталозі `assets/photos/` розміщено елегантні нейтральні векторні біологічні ілюстрації-заглушки.  
Якщо ви бажаєте замінити їх на реальні фотографії з Wikimedia Commons або Unsplash:
1. Завантажте фото у високій якості та покладіть у теку `assets/photos/` (наприклад, `bsf-larvae.jpg`, `bsf-adult.jpg`).
2. У файлі `index.html` у секції `#photos` змініть розширення у тегах `<img>`:
   ```html
   <img src="assets/photos/bsf-larvae.jpg" alt="..." class="photo-img" loading="lazy">
   ```
3. Підписи авторів та ліцензії вказані біля кожної картки та у блоці «Джерела зображень та ліцензії» у футері:
   * **Личинки BSF:** автор Martin Cooper (Wikimedia Commons, ліцензія [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/));
   * **Доросла муха (імаго):** автор Judy Gallagher (Wikimedia Commons, ліцензія [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/));
   * **Зоогумус (фрас):** архів прототипу EcoFly ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)).

---

## 3. Контакти засновника проєкту

* **Email:** [vladislavkolesnik26@gmail.com](mailto:vladislavkolesnik26@gmail.com)
* **Telegram:** [@Prosto_kit_007](https://t.me/Prosto_kit_007)
* **LinkedIn:** [www.linkedin.com/in/vladyslav-kolisnyk-87274430a](https://www.linkedin.com/in/vladyslav-kolisnyk-87274430a/)
* **Локація:** місто Київ, Україна

---

## 4. Наукові джерела та формулювання

* **15–20% вихід живої біомаси личинок:** *Eawag/Sandec (2017), "Black Soldier Fly Biowaste Processing", Chapter 2*.
* **60–85% скорочення сухої маси субстрату:** *Eawag/Sandec (2017), p. 18*.
* **31.25 кг субстрату на м² на добу:** нормативне завантаження інтенсивного модуля культивації (*Eawag/Sandec, Technical Specifications*).
* **Потенціал глобального потепління метану (GWP100 = 28):** *Міжурядова група експертів з питань зміни клімату (IPCC Fifth Assessment Report, AR5)*.
* **Лауринова кислота в ліпідах BSF:** *Spranghers et al. (2017) / De Smet et al. (2018)*.
* **Цінові орієнтири живих личинок:**
  * 30 грн/кг (ферма «Горішні Плавні», 2024 р.);
  * 140–275 грн/кг (роздрібний прайс hermetia.farm, 2025 р.).
  * Наголошено, що ці ціни стосуються **живих личинок** (вологість ~70%), а не сухого знежиреного кормового борошна, тому вони не зіставляються напряму з соєю чи рибним борошном.

---

## 5. Підключення відправки заявок без власного бекенду

Форми містять:
* Приховане поле-пастку `hp_company_url`;
* Затримку не менше 8 секунд між завантаженням і відправкою (захист від ботів);
* Окремі обов'язкові чекбокси згоди на обробку персональних даних;
* Кнопку **«Скопіювати заявку»**: копіює введені дані в буфер обміну для прямої відправки через Telegram або Email.

### Підключення Formspree (безкоштовно):
1. Зареєструйтесь на [formspree.io](https://formspree.io/).
2. Створіть форму та отримайте URL `https://formspree.io/f/xyzabwqr`.
3. У `index.html` замініть `action="#"` на ваш Formspree URL у тегах `<form id="waste-form">` та `<form id="buyers-form">`.

---

## 6. Безкоштовна публікація сайту в інтернеті

### Варіант А: GitHub Pages (2 хвилини)
1. Створіть репозиторій на [GitHub](https://github.com/), наприклад `ecofly-website`.
2. Завантажте файли з папки `ecofly/` у корінь репозиторію:
   ```bash
   git init
   git add .
   git commit -m "EcoFly prototype website"
   git branch -M main
   git remote add origin https://github.com/ВАШ_ЛОГІН/ecofly-website.git
   git push -u origin main
   ```
3. У репозиторії відкрийте **Settings → Pages**, оберіть гілку `main` і теку `/ (root)`, натисніть **Save**.
4. Сайт стане доступний за адресою `https://ВАШ_ЛОГІН.github.io/ecofly-website/`.

### Варіант Б: Netlify Drop (30 секунд)
1. Відкрийте [app.netlify.com/drop](https://app.netlify.com/drop).
2. Перетягніть папку `ecofly` у вікно браузера.
3. Отримайте робочу адресу з HTTPS.
