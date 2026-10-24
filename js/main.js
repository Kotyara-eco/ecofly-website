/* EcoFly — поведінка сторінки. Налаштування (форми, контакти, підписи до фото) лежать у js/config.js */
(function () {
  "use strict";
  var CFG = window.ECOFLY_CONFIG || {};
  var FORMS = CFG.forms || {};
  var $ = function (id) { return document.getElementById(id); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var reduce = false;
  try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  /* ---------- мова ---------- */
  var LANG = "uk";
  try { var sl = localStorage.getItem("ecofly_lang"); if (sl === "en" || sl === "uk") LANG = sl; } catch (e) {}
  function L(uk, en) { return LANG === "en" ? en : uk; }
  var locale = function () { return LANG === "en" ? "en-GB" : "uk-UA"; };
  function fmt(n, d) { return Number(n).toLocaleString(locale(), { maximumFractionDigits: d == null ? 1 : d }); }

  var PHOTOS = [
    ["hero-larvae", "Макрофото личинок чорної левової мухи", "Macro photo of black soldier fly larvae", "Фото личинок", "Larvae photo"],
    ["adult-fly", "Доросла чорна левова муха", "Adult black soldier fly", "Доросла муха", "Adult fly"],
    ["food-waste", "Органічні рослинні відходи", "Organic plant waste", "Органічні відходи", "Organic waste"],
    ["poultry", "Птахи на фермі", "Poultry on a farm", "Птахи", "Poultry"],
    ["aquaculture", "Риба, аквакультура", "Fish, aquaculture", "Аквакультура", "Aquaculture"],
    ["pet", "Домашня тварина", "A pet animal", "Домашня тварина", "Pet"],
    ["soil-garden", "Ґрунт і город", "Soil and garden", "Ґрунт і город", "Soil and garden"],
    ["kyiv", "Київ", "Kyiv", "Київ", "Kyiv"],
    ["founder", "Засновник проєкту", "Project founder", "Засновник", "Founder"]
  ];
  var loaded = {}; // key -> файл

  function swap(root) {
    $$("[data-en]", root).forEach(function (el) {
      if (!el.hasAttribute("data-uk")) el.setAttribute("data-uk", el.innerHTML);
      el.innerHTML = LANG === "en" ? el.getAttribute("data-en") : el.getAttribute("data-uk");
    });
    $$("[data-en-aria]").forEach(function (el) {
      if (!el.hasAttribute("data-uk-aria")) el.setAttribute("data-uk-aria", el.getAttribute("aria-label") || "");
      el.setAttribute("aria-label", LANG === "en" ? el.getAttribute("data-en-aria") : el.getAttribute("data-uk-aria"));
    });
    $$("[data-en-l]").forEach(function (el) {
      if (!el.hasAttribute("data-uk-l")) el.setAttribute("data-uk-l", el.getAttribute("data-l") || "");
      el.setAttribute("data-l", LANG === "en" ? el.getAttribute("data-en-l") : el.getAttribute("data-uk-l"));
    });
  }

  /* ---------- тема ---------- */
  try { var st = localStorage.getItem("ecofly_theme"); if (st === "light" || st === "dark") document.documentElement.setAttribute("data-theme", st); } catch (e) {}
  function isDark() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t === "dark";
    try { return !window.matchMedia("(prefers-color-scheme: light)").matches; } catch (e) { return true; }
  }
  $("themeBtn").addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("ecofly_theme", next); } catch (e) {}
  });

  /* ---------- меню ---------- */
  var menu = $("menu"), burger = $("burger");
  function closeMenu() { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  $$("a", menu).forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  if ("IntersectionObserver" in window) {
    var links = {};
    $$("a", menu).forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          $$("a", menu).forEach(function (a) { a.classList.remove("on"); });
          if (links[e.target.id]) links[e.target.id].classList.add("on");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (id) { var s = $(id); if (s) spy.observe(s); });
  }

  /* ---------- поява блоків і лічильники ---------- */
  function animateCount(el) {
    var txt = el.getAttribute("data-final") || el.textContent;
    el.setAttribute("data-final", txt);
    if (reduce) return;
    var start = performance.now(), dur = 1100;
    function step(now) {
      var p = Math.min(1, (now - start) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = txt.replace(/\d+(?:[.,]\d+)?/g, function (m) {
        var dec = (m.split(/[.,]/)[1] || "").length, sep = m.indexOf(",") > -1 ? "," : ".";
        return (parseFloat(m.replace(",", ".")) * e).toFixed(dec).replace(".", sep);
      });
      if (p < 1) requestAnimationFrame(step); else el.textContent = txt;
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && !reduce) {
    var rv = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); rv.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    $$(".rv").forEach(function (n) { rv.observe(n); });
  } else { $$(".rv").forEach(function (n) { n.classList.add("in"); }); }
  $$(".count").forEach(animateCount);

  /* ---------- фото: підхоплюються автоматично, якщо файл лежить у assets/photos ---------- */
  var EXTS = ["webp", "jpg", "jpeg", "png"];
  function probe(key, i) {
    if (i >= EXTS.length) return;
    var src = "assets/photos/" + key + "." + EXTS[i], img = new Image();
    img.onload = function () {
      loaded[key] = src;
      $$('[data-photo="' + key + '"]').forEach(function (el) {
        el.style.setProperty("--img", 'url("' + img.src + '")'); /* повна адреса: інакше шлях рахується від папки css/ */
        el.classList.add("has-photo");
        el.setAttribute("role", "img");
      });
      applyAlt(); buildCredits();
    };
    img.onerror = function () { probe(key, i + 1); };
    img.src = src;
  }
  function applyAlt() {
    PHOTOS.forEach(function (p) {
      if (!loaded[p[0]]) return;
      $$('[data-photo="' + p[0] + '"]').forEach(function (el) { el.setAttribute("aria-label", LANG === "en" ? p[2] : p[1]); });
    });
  }
  function buildCredits() {
    var ul = $("credits"), any = false;
    $$("li.cr", ul).forEach(function (n) { n.remove(); });
    PHOTOS.forEach(function (p) {
      var key = p[0], c = (CFG.photos || {})[key];
      if (!loaded[key]) return;
      if (!c || !c.credit) { if (window.console) console.warn("EcoFly: для фото " + key + " не вказано автора й ліцензію в js/config.js"); return; }
      var li = document.createElement("li"); li.className = "cr";
      li.appendChild(document.createTextNode((LANG === "en" ? p[4] : p[3]) + ": "));
      if (c.url) { var a = document.createElement("a"); a.href = c.url; a.target = "_blank"; a.rel = "noopener"; a.textContent = c.credit; li.appendChild(a); }
      else li.appendChild(document.createTextNode(c.credit));
      if (key === "hero-larvae" || key === "kyiv") li.appendChild(document.createTextNode(LANG === "en" ? " (darkened for legibility)" : " (затемнено для читабельності тексту)"));
      ul.appendChild(li); any = true;
    });
    $("noCredits").hidden = any;
  }
  PHOTOS.forEach(function (p) { probe(p[0], 0); });

  /* ---------- райони Києва ---------- */
  var DISTRICTS = [
    ["svy", "Святошинський", "Sviatoshynskyi"], ["obo", "Оболонський", "Obolonskyi"], ["shv", "Шевченківський", "Shevchenkivskyi"],
    ["pod", "Подільський", "Podilskyi"], ["sol", "Солом'янський", "Solomianskyi"], ["pech", "Печерський", "Pecherskyi"],
    ["gol", "Голосіївський", "Holosiivskyi"], ["des", "Деснянський", "Desnianskyi"], ["dnp", "Дніпровський", "Dniprovskyi"], ["dar", "Дарницький", "Darnytskyi"]
  ];
  var district = "";
  function dname(k) { if (k === "other") return L("Інше (поза Києвом)", "Other (outside Kyiv)"); for (var i = 0; i < DISTRICTS.length; i++) if (DISTRICTS[i][0] === k) return L(DISTRICTS[i][1], DISTRICTS[i][2]); return ""; }
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function buildDistricts() {
    var sel = $("distSel"); sel.textContent = "";
    var o0 = el("option", null, L("— оберіть район —", "— choose a district —")); o0.value = ""; sel.appendChild(o0);
    DISTRICTS.map(function (d) { return d[0]; }).concat(["other"]).forEach(function (k) { var o = el("option", null, dname(k)); o.value = k; sel.appendChild(o); });
    sel.value = district;
    var host = $("distPick"); host.textContent = "";
    var map = el("div", "kmap");
    DISTRICTS.forEach(function (d) {
      var b = el("button", "kd", dname(d[0])); b.type = "button"; b.dataset.k = d[0]; b.style.gridArea = d[0]; b.setAttribute("aria-pressed", "false");
      map.appendChild(b);
    });
    var river = el("div", "river", L("Дніпро", "Dnipro")); river.setAttribute("aria-hidden", "true"); map.appendChild(river);
    host.appendChild(map);
    var other = el("button", "kother", dname("other")); other.type = "button"; other.dataset.k = "other"; other.setAttribute("aria-pressed", "false"); host.appendChild(other);
    markDistrict();
  }
  function markDistrict() {
    $$("button[data-k]", $("distPick")).forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.k === district)); });
    $("distSel").value = district;
  }
  $("distPick").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-k]"); if (!b) return;
    district = district === b.dataset.k ? "" : b.dataset.k; markDistrict();
  });
  $("distSel").addEventListener("change", function () { district = $("distSel").value; markDistrict(); });

  /* ---------- слайдер обсягу та калькулятор ---------- */
  function wVolOut() { $("wVolOut").textContent = fmt($("wVol").value, 0) + L(" кг", " kg"); }
  $("wVol").addEventListener("input", wVolOut);
  function recalc() {
    var v = Math.max(1, Number($("cVol").value) || 0), d = Number($("cDays").value) || 30, total = v * d;
    var lo = total * 0.15, hi = total * 0.20;
    var kg = L(" кг", " kg"), t = L(" т", " t"), m2 = L(" м²", " m²");
    $("rLarv").textContent = fmt(lo, 0) + "–" + fmt(hi, 0) + kg;
    $("rTons").textContent = fmt(total / 1000, 1) + t;
    $("rArea").textContent = "≈ " + fmt(v / 31.25, 1) + m2;
    var inp = L("Вхід: ", "Input: ") + fmt(v, 0) + L(" кг/добу × ", " kg/day × ") + d + L(" днів", " days");
    $("rIn1").textContent = inp;
    $("rIn2").textContent = L("Вхід: ", "Input: ") + fmt(v, 0) + L(" кг/добу × ", " kg/day × ") + d + L(" днів", " days");
  }
  $("cVol").addEventListener("input", recalc);
  $("cDays").addEventListener("change", recalc);

  /* ---------- контакти, засновник, джерело ---------- */
  function buildContacts() {
    var C = CFG.contacts || {}, host = $("contacts"); host.textContent = "";
    if (C.email) { var a = el("a", null, C.email); a.href = "mailto:" + C.email; host.appendChild(a); }
    if (C.telegram) { var t = el("a", null, "Telegram @" + C.telegram.replace(/^@/, "")); t.href = "https://t.me/" + C.telegram.replace(/^@/, ""); t.target = "_blank"; t.rel = "noopener"; host.appendChild(t); }
    if (C.linkedin) { var l = el("a", null, "LinkedIn"); l.href = C.linkedin; l.target = "_blank"; l.rel = "noopener"; host.appendChild(l); }
    host.hidden = !host.children.length;
  }
  function buildFounder() {
    var F = CFG.founder || {};
    if (F.name) $("fName").textContent = F.name;
    var bio = LANG === "en" ? (F.bio_en || F.bio_uk) : (F.bio_uk || F.bio_en);
    $("fBio").textContent = bio || ""; $("fBio").hidden = !bio;
  }
  function buildOrgSrc() {
    var s = (CFG.sources || {}).organics, host = $("orgSrc"); host.textContent = "";
    if (s) { var a = el("a", null, L("джерело", "source")); a.href = s; a.target = "_blank"; a.rel = "noopener"; host.appendChild(a); }
    else host.textContent = L("за оцінками дослідників", "according to researchers' estimates");
  }

  /* ---------- форми ---------- */
  function copyText(text) {
    return new Promise(function (resolve, reject) {
      function fallback() {
        try {
          var ta = el("textarea"); ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
          document.body.appendChild(ta); ta.select(); var ok = document.execCommand("copy"); ta.remove(); ok ? resolve() : reject();
        } catch (e) { reject(e); }
      }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(resolve, fallback); else fallback();
    });
  }
  function clean(s, n) { return String(s == null ? "" : s).replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, n || 200); }
  function yn(v) { return v ? "так" : "ні"; }

  var FORMDEF = {
    fWaste: { msg: "mWaste", key: "waste", title: "EcoFly: заявка на забір відходів", fields: function (f) {
      var type = f.querySelector("input[name=type]:checked");
      return [["Тип відходів", type ? type.value : ""], ["Обсяг на добу, кг", f.elements.vol.value], ["Періодичність", f.elements.freq.value],
        ["Район Києва", (function () { for (var i = 0; i < DISTRICTS.length; i++) if (DISTRICTS[i][0] === district) return DISTRICTS[i][1]; return district === "other" ? "Інше (поза Києвом)" : ""; })()],
        ["Контактна особа та заклад", f.elements.name.value], ["Телефон або Telegram", f.elements.contact.value],
        ["Потрібен паспорт партії та акт", yn(f.elements.needDoc.checked)], ["Передати зоогумус школам і садам", yn(f.elements.gift.checked)], ["Згода на обробку даних", yn(f.elements.consent.checked)]];
    }, required: function (f) { return [f.elements.name, f.elements.contact, $("distSel"), f.elements.consent]; } },
    fBuyers: { msg: "mBuyers", key: "buyers", title: "EcoFly: запит покупця протеїну", fields: function (f) {
      return [["Напрям", f.elements.segment.value], ["Потреба на місяць, кг", f.elements.volume.value], ["Поточне джерело білка й ціна, грн/т", f.elements.current.value],
        ["Контактна особа та господарство", f.elements.name.value], ["Телефон або e-mail", f.elements.contact.value],
        ["Готовий обговорити LOI", yn(f.elements.loi.checked)], ["Згода на обробку даних", yn(f.elements.consent.checked)]];
    }, required: function (f) { return [f.elements.volume, f.elements.name, f.elements.contact, f.elements.consent]; } },
    fPartner: { msg: "mPartner", key: "partner", title: "EcoFly: повідомлення партнера чи інвестора", fields: function (f) {
      return [["Ім'я або організація", f.elements.name.value], ["Телефон або e-mail", f.elements.contact.value], ["Повідомлення", f.elements.message.value],
        ["Згода на обробку даних", yn(f.elements.consent.checked)]];
    }, required: function (f) { return [f.elements.name, f.elements.contact, f.elements.consent]; } }
  };

  function initForm(id) {
    var def = FORMDEF[id], f = $(id), msg = $(def.msg), t0 = 0;
    function show(kind, text) { msg.className = "msg " + kind; msg.textContent = text; msg.hidden = false; }
    function startTimer() { if (!t0) t0 = Date.now(); }
    f.addEventListener("input", startTimer); f.addEventListener("focusin", startTimer);
    function build() {
      var lines = [def.title];
      def.fields(f).forEach(function (r) { var v = clean(r[1], 1200); if (v) lines.push(r[0] + ": " + v); });
      return lines.join("\n");
    }
    function validate() {
      var bad = [];
      def.required(f).forEach(function (n) {
        var ok = n.type === "checkbox" ? n.checked : clean(n.value).length > 0;
        if (n.name === "contact" && ok) ok = clean(n.value).length >= 5;
        if (n.name === "volume" && ok) ok = Number(n.value) > 0;
        n.setAttribute("aria-invalid", ok ? "false" : "true"); if (!ok) bad.push(n);
      });
      if (bad.length) { show("err", L("Заповніть обов'язкові поля, позначені *, і поставте згоду на обробку даних.", "Please fill in the required fields marked * and tick the consent box.")); bad[0].focus(); return false; }
      return true;
    }
    f.querySelector("[data-copy]").addEventListener("click", function () {
      copyText(build()).then(function () { show("ok", L("Текст скопійовано в буфер обміну.", "The text has been copied to the clipboard.")); },
        function () { show("err", L("Не вдалося скопіювати автоматично. Виділіть текст у полях і скопіюйте вручну.", "Could not copy automatically. Please copy the text manually.")); });
    });
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      if (f.elements._gotcha && f.elements._gotcha.value) { show("ok", L("Дякуємо!", "Thank you!")); return; }
      if (!validate()) return;
      if (!t0 || Date.now() - t0 < 8000) { show("err", L("Забагато швидкості: перевірте поля й спробуйте ще раз за кілька секунд.", "That was very fast: check the fields and try again in a few seconds.")); return; }
      var cfg = FORMS[def.key] || {}, text = build(), btn = f.querySelector("button[type=submit]");
      if (cfg.endpoint) {
        var body = { _subject: def.title }; def.fields(f).forEach(function (r) { body[r[0]] = clean(r[1], 1200); });
        btn.disabled = true;
        fetch(cfg.endpoint, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(body) })
          .then(function (r) { if (!r.ok) throw new Error("http " + r.status); show("ok", L("Дякуємо! Заявку надіслано, ми зв'яжемося з вами.", "Thank you! Your request has been sent and we will get in touch.")); f.reset(); district = ""; markDistrict(); wVolOut(); t0 = 0; })
          .catch(function () { copyText(text).then(function () {}, function () {}); show("err", L("Не вдалося надіслати. Текст заявки скопійовано, надішліть його нам напряму.", "Sending failed. The text has been copied, please send it to us directly.")); })
          .then(function () { btn.disabled = false; });
      } else if (cfg.googleForm) {
        copyText(text).then(function () {}, function () {});
        window.open(cfg.googleForm, "_blank", "noopener");
        show("ok", L("Відкрили форму в новій вкладці. Текст заявки скопійовано, вставте його у відповідне поле.", "The form opened in a new tab. The text has been copied, paste it into the matching field."));
      } else {
        copyText(text).then(function () { show("ok", L("Прийом заявок на сайті ще налаштовується. Текст заявки скопійовано, надішліть його нам напряму.", "Online requests are still being set up. The text has been copied, please send it to us directly.")); },
          function () { show("err", L("Прийом заявок на сайті ще налаштовується. Скопіюйте текст вручну.", "Online requests are still being set up. Please copy the text manually.")); });
      }
    });
  }
  Object.keys(FORMDEF).forEach(initForm);

  /* ---------- друк зразка паспорта ---------- */
  $("printPass").addEventListener("click", function () {
    document.body.classList.add("print-passport");
    var done = function () { document.body.classList.remove("print-passport"); window.removeEventListener("afterprint", done); };
    window.addEventListener("afterprint", done);
    try { window.print(); } catch (e) { done(); }
    setTimeout(done, 4000);
  });

  /* ---------- мова: перемикач і повне оновлення ---------- */
  var titles = {
    uk: ["EcoFly — переробка органічних відходів личинками BSF, Київ", "EcoFly: прототип сервісу циркулярної економіки в Києві. Вологі рослинні відходи → личинки чорної левової мухи → протеїн, жир і зоогумус."],
    en: ["EcoFly — organic waste bioconversion with BSF larvae, Kyiv", "EcoFly: a prototype circular-economy service in Kyiv. Wet plant waste → black soldier fly larvae → protein, fat and frass fertiliser."]
  };
  function refresh() {
    swap(document);
    document.documentElement.lang = LANG;
    document.title = titles[LANG][0];
    var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute("content", titles[LANG][1]);
    $("langBtn").textContent = LANG === "en" ? "UA" : "EN";
    $("fWaste") && ["mWaste", "mBuyers", "mPartner"].forEach(function (i) { $(i).hidden = true; });
    buildDistricts(); wVolOut(); recalc(); buildContacts(); buildFounder(); buildOrgSrc(); applyAlt(); buildCredits();
  }
  $("langBtn").addEventListener("click", function () {
    LANG = LANG === "en" ? "uk" : "en";
    try { localStorage.setItem("ecofly_lang", LANG); } catch (e) {}
    refresh();
  });
  refresh();
})();
