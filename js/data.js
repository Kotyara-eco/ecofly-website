/**
 * EcoFly Data & Configuration
 * Єдине джерело констант, розрахункових коефіцієнтів з науковими джерелами
 * та англійського словника для проєкту циркулярної біоекономіки EcoFly (Київ).
 * Стадія: Прототип.
 */

const ECOFLY_DATA = {
  // Контакти засновника
  CONTACTS: {
    EMAIL: "vladislavkolesnik26@gmail.com",
    TELEGRAM: "@Prosto_kit_007",
    TELEGRAM_URL: "https://t.me/Prosto_kit_007",
    LINKEDIN: "www.linkedin.com/in/vladyslav-kolisnyk-87274430a",
    LINKEDIN_URL: "https://www.linkedin.com/in/vladyslav-kolisnyk-87274430a/",
    CITY_UA: "Київ, Україна",
    CITY_EN: "Kyiv, Ukraine"
  },

  // Наукові константи розрахунків з першоджерелами
  CALCULATION: {
    // 15–20% від маси вологого субстрату перетворюється на живу біомасу личинок
    // Джерело: Eawag/Sandec (2017), "Black Soldier Fly Biowaste Processing: A Step-by-Step Guide", Chapter 2
    LARVAE_CONVERSION_MIN: 0.15,
    LARVAE_CONVERSION_MAX: 0.20,

    // Редукція сухої маси органічного субстрату становить 60–85%
    // Джерело: Eawag/Sandec (2017), "Black Soldier Fly Biowaste Processing: A Step-by-Step Guide", p. 18
    DRY_MASS_REDUCTION_MIN: 0.60,
    DRY_MASS_REDUCTION_MAX: 0.85,

    // Щільність завантаження: 31.25 кг субстрату на м² на добу
    // Розрахунок Eawag/Sandec: норма завантаження субстрату за цикл відгодівлі
    // Джерело: Eawag/Sandec (2017), Technical Specifications for BSF waste treatment units
    SPACE_KG_PER_M2_PER_DAY: 31.25,

    // Частка органіки в міських ТПВ: від 27% до 65% (у середньому >40%)
    // Джерело: Світовий Банк (What a Waste 2.0: A Global Snapshot of Solid Waste Management to 2050)
    ORGANIC_SHARE_MSW_MIN: 0.27,
    ORGANIC_SHARE_MSW_MAX: 0.65,

    // Потенціал глобального потепління метану (GWP100 = 28)
    // Джерело: Міжурядова група експертів з питань зміни клімату (IPCC Fifth Assessment Report, AR5, 100-year GWP)
    METHANE_GWP100: 28
  },

  // Орієнтири цін на живих личинок на ринку
  PRICING: {
    HORISHNI_PLAVNI_2024: 30, // 30 грн/кг живих личинок, ферма «Горішні Плавні», 2024 р.
    HERMETIA_FARM_2025_MIN: 140, // 140 грн/кг живих личинок, роздрібний прайс hermetia.farm, 2025 р.
    HERMETIA_FARM_2025_MAX: 275, // 275 грн/кг живих личинок, роздрібний прайс hermetia.farm, 2025 р.
    NOTE_UA: "Зверніть увагу: наведені ціни стосуються живих личинок (живої біомаси), а не висушеного знежиреного кормового борошна, і прямому зіставленню з соєвим чи рибним борошном не підлягають. Проєкт EcoFly перебуває на стадії прототипу й наразі формує власну собівартість.",
    NOTE_EN: "Note: the prices listed refer to live larvae (fresh biomass), not dried defatted protein meal, and are not directly comparable to soybean or fish meal. The EcoFly project is currently at the prototype stage and is establishing its own unit production costs."
  },

  // 10 офіційних адміністративних районів міста Києва
  KYIV_DISTRICTS: [
    { id: "holosiivskyi", ua: "Голосіївський район", en: "Holosiivskyi District" },
    { id: "darnytskyi", ua: "Дарницький район", en: "Darnytskyi District" },
    { id: "desnianskyi", ua: "Деснянський район", en: "Desnianskyi District" },
    { id: "dniprovskyi", ua: "Дніпровський район", en: "Dniprovskyi District" },
    { id: "obolonskyi", ua: "Оболонський район", en: "Obolonskyi District" },
    { id: "pecherskyi", ua: "Печерський район", en: "Pecherskyi District" },
    { id: "podilskyi", ua: "Подільський район", en: "Podilskyi District" },
    { id: "sviatoshynskyi", ua: "Святошинський район", en: "Sviatoshynskyi District" },
    { id: "solomianskyi", ua: "Солом'янський район", en: "Solomianskyi District" },
    { id: "shevchenkivskyi", ua: "Шевченківський район", en: "Shevchenkivskyi District" }
  ],

  // Англійський словник для перемикання мови
  EN_TRANSLATIONS: {
    // Навігація
    "nav.how_it_works": "How it works",
    "nav.for_waste": "Waste",
    "nav.for_buyers": "Buyers",
    "nav.calculator": "Calculator",
    "nav.passport": "Batch passport",
    "nav.impact": "Impact",
    "nav.risks": "Risks",
    "nav.timeline": "Roadmap",
    "nav.team": "Team",
    "nav.faq": "FAQ",
    "nav.contacts": "Contacts",
    "nav.cta": "Submit request",
    "nav.theme_toggle_aria": "Switch color theme (light / dark)",
    "nav.lang_toggle_aria": "Switch language between Ukrainian and English",
    "nav.menu_toggle_aria": "Open navigation menu",

    // Hero
    "hero.badge": "Project at prototype stage",
    "hero.title": "Converting organic waste into high-value protein and fertilizer",
    "hero.subtitle": "EcoFly processes wet plant-based food residues in Kyiv using Black Soldier Fly larvae (Hermetia illucens) towards a closed biological loop.",
    "hero.btn_waste": "I supply waste",
    "hero.btn_buyers": "I buy protein",
    "hero.btn_partner": "I am a partner / investor",
    "hero.fact1_val": "15–20%",
    "hero.fact1_lbl": "larvae yield from wet substrate weight",
    "hero.fact1_src": "Eawag/Sandec, BSF Biowaste Processing",
    "hero.fact2_val": "60–85%",
    "hero.fact2_lbl": "dry mass reduction of organic residue",
    "hero.fact2_src": "Eawag/Sandec, Chapter 2",
    "hero.fact3_val": "Closed Loop",
    "hero.fact3_lbl": "goal: biological circular economy",
    "hero.fact3_src": "Circular bioeconomy model",

    // Схема
    "diagram.waste": "ORGANIC RESIDUES",
    "diagram.waste_sub": "Spent grain, fruit pomace",
    "diagram.larvae": "BSF LARVAE",
    "diagram.larvae_sub": "Hermetia illucens",
    "diagram.protein": "PROTEIN & LIPIDS",
    "diagram.protein_sub": "Feed & pet food base",
    "diagram.frass": "ZOOHUMUS (FRASS)",
    "diagram.frass_sub": "Organic soil fertilizer",
    "diagram.center_title": "ECOFLY",
    "diagram.center_sub": "CLOSED LOOP",

    // Як це працює
    "cycle.badge": "4 steps of bioconversion",
    "cycle.title": "How the closed loop works",
    "cycle.desc": "Clean food and agricultural residues are converted into biological resources within 12–14 days.",
    "cycle.step1_title": "1. Scheduled Collection",
    "cycle.step1_desc": "Collection of wet plant residues from breweries, juice processors, bakeries, and plant-based kitchen trimmings on an agreed schedule.",
    "cycle.step1_metric": "From ~20 kg/day stable flow",
    "cycle.step2_title": "2. Larvae Bioconversion",
    "cycle.step2_desc": "BSF larvae consume the substrate, reducing dry mass by 60–85% and significantly reducing methane formation.",
    "cycle.step2_metric": "31.25 kg/m²/day loading rate",
    "cycle.step3_title": "3. Separation & Fractioning",
    "cycle.step3_desc": "Prepupae are separated into protein fraction and technical lipids, leaving stabilized organic insect frass.",
    "cycle.step3_metric": "15–20% live biomass yield",
    "cycle.step4_title": "4. Return to Economy",
    "cycle.step4_desc": "Products may return to feed and soil; the effect is to be tested on the prototype.",
    "cycle.step4_metric": "Goal: closed loop",

    // Застереження
    "warning.badge": "Substrate compliance notice",
    "warning.title": "What we currently DO NOT accept for feed production:",
    "warning.desc": "Meat, slaughterhouse waste, catering fish residues, and animal manure are strictly excluded in accordance with EU Regulation 2017/893 regarding insect substrates for animal feed. We work exclusively with clean plant-based food industry by-products.",

    // Для відходів
    "waste.badge": "For food manufacturers & HoReCa",
    "waste.title": "Organic waste management without odor or extra disposal fees",
    "waste.lead": "We help food manufacturers, juice/kvass makers, and kitchens turn wet plant residues into a documented recycling flow (sample document).",
    "waste.p1_title": "Regular collection & clean containers",
    "waste.p1_desc": "Sealed returnable containers prevent fermentation odors and insect accumulation on your premises.",
    "waste.p2_title": "Sample batch passport for ESG",
    "waste.p2_desc": "Sample batch passport recording mass and substrate type instead of landfilling.",
    "waste.p3_title": "Plans for the city",
    "waste.p3_desc": "We plan to pass part of the zoohumus to urban gardens; terms are discussed individually.",
    "waste.form_title": "Submit waste collection request",
    "waste.form_desc": "Tell us about your organic residues. We will get back to you.",
    "waste.lbl_type": "Type of organic waste *",
    "waste.opt_type_brewer": "Spent grain / brewery malt",
    "waste.opt_type_juice": "Fruit / vegetable pomace (juice, kvass)",
    "waste.opt_type_bakery": "Bakery residues / flour by-products",
    "waste.opt_type_kitchen": "Plant-based kitchen trimmings (no meat or fish)",
    "waste.lbl_volume": "Estimated daily volume *",
    "waste.lbl_freq": "Preferred collection frequency *",
    "waste.opt_freq_daily": "Daily (7 days/week)",
    "waste.opt_freq_3week": "2–3 times a week",
    "waste.opt_freq_weekly": "Once a week",
    "waste.lbl_district": "Kyiv district *",
    "waste.lbl_contact_name": "Contact person & company *",
    "waste.lbl_phone": "Phone or Telegram *",
    "waste.chk_esg": "Require batch recycling documentation for sustainability reporting",
    "waste.chk_donate": "Interested in the planned handover of zoohumus to urban gardens (terms discussed individually)",
    "waste.chk_consent": "I consent to personal data processing in accordance with the Privacy Notice *",
    "waste.btn_submit": "Submit collection request",
    "waste.btn_copy": "Copy application data",

    // Для покупців
    "buyers.badge": "For feed mills & livestock farms",
    "buyers.title": "Alternative protein, insect lipids & zoohumus",
    "buyers.lead": "A domestic protein source with lower import dependency and controlled cultivation parameters.",
    "buyers.prod1_title": "BSF Larvae Protein",
    "buyers.prod1_desc": "Contains essential amino acids (Spranghers et al., 2017). Composition of our own product will be determined in prototype tests.",
    "buyers.prod1_val": "Lab analysis: data under evaluation from prototype testing",
    "buyers.prod2_title": "Larval Lipids (Fat)",
    "buyers.prod2_desc": "Larval fat contains medium-chain fatty acids (MCFA); composition of our product is to be determined.",
    "buyers.prod2_val": "Lipid profile: data under evaluation from prototype testing",
    "buyers.prod3_title": "Zoohumus (BSF Frass)",
    "buyers.prod3_desc": "By-product of processing (residual substrate and larval excrement); parameters are to be determined.",
    "buyers.prod3_val": "NPK & organic matter: data under evaluation from prototype testing",

    // Таблиця
    "table.title": "Comparison: Soybean Meal / Fishmeal / EcoFly BSF Protein",
    "table.col_param": "Parameter",
    "table.col_soy": "Soybean Meal",
    "table.col_fish": "Fishmeal",
    "table.col_bsf": "EcoFly BSF Protein",
    "table.row1_param": "Import & exchange rate dependency",
    "table.row1_soy": "High (global commodity price volatility)",
    "table.row1_fish": "Critical (maritime import)",
    "table.row1_bsf": "Lower dependency (local production)",
    "table.row2_param": "Nutritional stability",
    "table.row2_soy": "Medium (seasonal crop variations)",
    "table.row2_fish": "Variable (catch season variations)",
    "table.row2_bsf": "High (controlled indoor parameters)",
    "table.row3_param": "Regulatory status in Ukraine",
    "table.row3_soy": "Registered in state feed catalog",
    "table.row3_fish": "Standard veterinary certification",
    "table.row3_bsf": "Status of larvae as feed in Ukraine is being clarified",
    "table.row4_param": "Price benchmark",
    "table.row4_soy": "Subject to market commodity pricing",
    "table.row4_fish": "Subject to import market pricing",
    "table.row4_bsf": "Live larvae: 30 UAH/kg (2024) to 140–275 UAH/kg (2025)*",

    "buyers.price_notice": "* Pricing clarification: 30 UAH/kg (Horishni Plavni farm, 2024) and 140–275 UAH/kg (hermetia.farm retail price list, 2025) represent live larvae prices, NOT dried defatted protein meal. Live biomass contains ~70% moisture, so it cannot be directly compared to commercial dry meal. The EcoFly project is currently at the prototype stage and has not yet established serial market pricing.",
    "buyers.form_title": "Request protein sample / discuss intent (LOI)",
    "buyers.lbl_buyer_type": "Your field of activity *",
    "buyers.opt_poultry": "Poultry / pig farm",
    "buyers.opt_aqua": "Aquaculture (trout, sturgeon, catfish)",
    "buyers.opt_feedmill": "Compound feed manufacturing",
    "buyers.opt_petfood": "Pet food formulation",
    "buyers.lbl_current_feed": "Current protein source in use",
    "buyers.lbl_monthly_vol": "Estimated monthly demand (kg or tons) *",
    "buyers.lbl_buyer_contact": "Contact person, farm / company & phone/Email *",
    "buyers.chk_loi": "Interested in signing a non-binding Letter of Intent (LOI) for a trial batch",
    "buyers.chk_consent": "I consent to personal data processing in accordance with the Privacy Notice *",
    "buyers.btn_submit": "Request protein sample",
    "buyers.btn_copy": "Copy inquiry",

    // Калькулятор
    "calc.badge": "BSF Effect Calculator",
    "calc.title": "Calculate the recycling effect of your waste",
    "calc.desc": "Calculations based on scientific coefficients from the Swiss institute Eawag/Sandec.",
    "calc.lbl_input": "Daily organic waste volume (kg):",
    "calc.lbl_days": "Operating days per month:",
    "calc.res1_title": "Fresh larvae biomass yield",
    "calc.res1_sub": "15–20% of wet substrate weight over 30 days",
    "calc.res2_title": "Will be processed instead of landfilling",
    "calc.res2_sub": "Reduces anaerobic methane formation",
    "calc.res3_title": "Estimated cultivator area",
    "calc.res3_sub": "31.25 kg substrate per m² per day (Eawag/Sandec)",
    "calc.in_lbl": "Input:",
    "calc.bars_title": "Substrate dry mass: before → after",
    "calc.bar_before": "Before",
    "calc.bar_after": "After",
    "calc.bars_note": "Dry mass reduction of 60–85% (Eawag/Sandec) leaves 15–40%. This is a reference range, not a guarantee.",
    "calc.disclaimer": "* Indicative calculation, not a guaranteed result. Actual output depends on moisture, nutrient profile of substrate, and climate control stability.",

    // Порівняння (смужки)
    "cmp.title": "Comparison with soybean meal and fishmeal",
    "cmp.note": "Qualitative assessment by the project author, not measured data. Longer bar = higher level on the criterion. Dashed = hypothesis under verification.",
    "cmp.soy": "Soybean meal",
    "cmp.fish": "Fishmeal",
    "cmp.bsf": "EcoFly BSF protein",
    "cmp.c1": "Import dependency",
    "cmp.c1_soy": "High",
    "cmp.c1_fish": "High",
    "cmp.c1_bsf": "Lower (local production)",
    "cmp.c2": "Composition stability",
    "cmp.c2_soy": "Medium",
    "cmp.c2_fish": "Medium",
    "cmp.c2_bsf": "Expected higher — testing",
    "cmp.c3": "Certification in Ukraine",
    "cmp.c3_soy": "Standard registration available",
    "cmp.c3_fish": "Veterinary control rules apply",
    "cmp.c3_bsf": "Feed status of larvae is being clarified",

    // Паспорт
    "passport.badge": "Traceability & ESG reporting",
    "passport.title": "Sample Batch Recycling Passport",
    "passport.desc": "Each batch gets a code formatted as ECO-YYYY-MMDD-XXXX and a sample record (all data in the specimen are fictional).",
    "passport.sample_watermark": "SAMPLE SPECIMEN",
    "passport.doc_title": "BSF BIOCONVERSION BATCH PASSPORT (SPECIMEN)",
    "passport.batch_id_lbl": "Batch Identification Code:",
    "passport.supplier_lbl": "Raw Material Supplier:",
    "passport.supplier_val": "Example: Food Processing Facility",
    "passport.waste_type_lbl": "Substrate Category:",
    "passport.raw_weight_lbl": "Batch Weight:",
    "passport.district_lbl": "Collection District:",
    "passport.date_in_lbl": "Intake Date:",
    "passport.date_out_lbl": "Completion Date:",
    "passport.output_lbl": "Sample bioconversion result (fictional data):",
    "passport.sign_lbl": "EcoFly Prototype Testing Setup",
    "passport.btn_open": "Open sample passport document",
    "passport.btn_print": "Print investor summary",

    // Вплив
    "impact.badge": "Ecology, society, ethics",
    "impact.title": "Impact on Kyiv's urban ecosystem",
    "impact.p1_title": "1. Ecology: Landfill reduction",
    "impact.p1_desc": "Organic matter represents 27% to 65% of municipal solid waste (World Bank). Bioconversion reduces methane generation (IPCC AR5 notes methane 100-year GWP of 28).",
    "impact.p2_title": "2. Society: Urban greening",
    "impact.p2_desc": "Part of the resulting zoohumus is planned to be provided to Kyiv school biology labs and urban community gardens.",
    "impact.p3_title": "3. Ethics: Clean substrate",
    "impact.p3_desc": "Compliance with European standards (EU Regulation 2017/893) regarding clean plant-based feed substrates and batch traceability.",

    // Ризики
    "risks.badge": "Transparency block",
    "risks.title": "Risks and how we address them",
    "risks.desc": "We build trust with investors and partners by openly discussing prototype stage challenges.",
    "risks.r1_title": "Status of insect protein in Ukraine",
    "risks.r1_desc": "In the EU, BSF larvae protein is approved for aquaculture and poultry, while the status of larvae as animal feed in Ukraine is currently being clarified.",
    "risks.r1_mit": "How we address it: we plan to consult the State Service of Ukraine on Food Safety and Consumer Protection regarding regulatory status, focusing initial trials on pet food and laboratory testing.",
    "risks.r2_title": "Seasonality & volume fluctuations",
    "risks.r2_desc": "Volumes of spent grains and juice pomace can fluctuate by season.",
    "risks.r2_mit": "How we address it: combining diversified streams (breweries, bakeries, vegetable processing).",
    "risks.r3_title": "Market willingness to pay",
    "risks.r3_desc": "Livestock producers are conservative regarding new feed ingredients.",
    "risks.r3_mit": "How we address it: preliminarily testing interest via Letters of Intent (LOI) and focusing on premium segments (trout aquaculture, pet food).",
    "risks.r4_title": "Odor & sanitary standards",
    "risks.r4_desc": "Substrate handling requires strict process discipline to prevent odors.",
    "risks.r4_mit": "How we address it: strictly plant-based substrates (no meat/manure), daily loading into closed modules; we foresee forced ventilation with biofilters in facility planning.",

    // Таймлайн
    "timeline.badge": "Project stage & roadmap",
    "timeline.title": "Honest timeline: completed and planned",
    "timeline.t1_status": "COMPLETED",
    "timeline.t1_title": "3 talks with owners (kvass, pig farm, deer)",
    "timeline.t1_desc": "Conducted 3 discovery talks with a kvass producer regarding pomace, a commercial pig farm owner regarding protein digestibility, and a deer breeder regarding diet.",
    "timeline.t2_status": "IN PROGRESS",
    "timeline.t2_title": "Planned interviews",
    "timeline.t2_desc": "Forming an interview pipeline with Kyiv HoReCa establishments, retail operators, and aquaculture farms.",
    "timeline.t3_status": "PLANNED",
    "timeline.t3_title": "Prototype testing module setup",
    "timeline.t3_desc": "Assembly of the prototype test module in Kyiv, BSF diet calibration, and laboratory evaluation.",

    // Команда
    "team.badge": "Team & ecosystem",
    "team.title": "Who develops EcoFly",
    "team.lead_role": "Project Founder & Initiator",
    "team.lead_bio": "Vladyslav Kolisnyk — founder of the EcoFly project, researching organic bioconversion technologies using BSF.",
    "team.inc_title": "Youthquake",
    "team.inc_desc": "Incubation program providing business model validation and mentorship support.",
    "team.partner_slot_title": "Partners & institutions",
    "team.partner_slot_desc": "Open for research collaboration with biological departments of Kyiv universities, veterinary labs, and urban ecology programs.",

    // FAQ
    "faq.badge": "Frequently asked questions",
    "faq.title": "Answers to key questions",

    // Контакти
    "contact.badge": "Direct contact",
    "contact.title": "Choose your format of collaboration",
    "contact.c1_title": "Supply waste",
    "contact.c1_desc": "Have regular plant-based organic residues in Kyiv? Let's discuss pickup schedules.",
    "contact.c2_title": "Buy products",
    "contact.c2_desc": "Interested in feed protein, lipids, or zoohumus? Request sample data or discuss an LOI.",
    "contact.c3_title": "Partnership",
    "contact.c3_desc": "Greentech investments, research collaboration, or joint municipal pilot programs in Kyiv.",
    "contact.city": "Kyiv, Ukraine",

    // Футер
    "footer.rights": "EcoFly. Circular bioeconomy prototype project in Kyiv.",
    "footer.privacy_notice": "Privacy note: data is used only to contact you and may be processed in Google Forms services.",
    "footer.back_to_top": "Back to top",

    // Сповіщення
    "alert.fill_required": "Please fill in all required fields.",
    "alert.consent_required": "Please confirm consent to personal data processing.",
    "alert.time_lock": "Anti-spam protection: please wait a few seconds before submitting the form.",
    "alert.copied": "Application data copied to clipboard! You can paste and send it to our Telegram or Email.",
    "alert.submitted_demo": "Thank you! Your request has been recorded. [FORM LINK]"
  },

  // 8 ключових запитань FAQ двома мовами (узгоджено з вимогами)
  FAQ_ITEMS: [
    {
      id: "faq-1",
      ua_q: "Які саме відходи ви приймаєте?",
      ua_a: "Ми приймаємо чисті вологі рослинні залишки: пивну дробину, макуху та вичавки з виробництва соків і квасу, хлібні обрізки, а також рослинні залишки з кухонь (pre-consumer HoReCa). Ми не приймаємо м'ясо, рибу, гній чи зіпсовані продукти з цвіллю згідно з вимогами європейського Регламенту 2017/893 до кормових субстратів.",
      en_q: "What types of organic waste do you accept?",
      en_a: "We accept clean, wet plant-based residues: brewer's spent grain, fruit and vegetable pomace from juice/kvass production, bakery trimmings, and plant-based kitchen trimmings (no meat or fish). We do not accept meat, fish, manure, or moldy waste in compliance with EU Regulation 2017/893 regarding insect feed substrates."
    },
    {
      id: "faq-2",
      ua_q: "Чи є неприємний запах під час переробки?",
      ua_a: "Личинки Hermetia illucens швидко переробляють свіжу органіку, що пригнічує процеси анаеробного бродіння та зменшує утворення їдких сполук. За свіжого завантаження відчувається помірний дріжджово-землистий запах. Для виробничого приміщення ми передбачаємо систему примусової витяжки з біофільтрами для нейтралізації запахів.",
      en_q: "Is there an unpleasant odor during processing?",
      en_a: "Hermetia illucens larvae rapidly consume fresh organic matter, suppressing anaerobic rotting and reducing strong odor compounds. Fresh substrates smell mildly like yeast or damp earth. In facility planning, we foresee forced ventilation with biofilters to neutralize odors."
    },
    {
      id: "faq-3",
      ua_q: "Чи безпечні личинки чорної левової мухи для довкілля Києва?",
      ua_a: "За даними наукових джерел (Eawag/Sandec, FAO), дорослі особини Hermetia illucens не мають функціонального ротового апарату, не живляться в дорослому стані, не кусають людей чи тварин, не сідають на їжу і не розглядаються як типові переносники збудників інфекцій, на відміну від звичайних кімнатних мух.",
      en_q: "Are Black Soldier Flies safe for Kyiv's local environment?",
      en_a: "According to scientific literature (Eawag/Sandec, FAO), adult Hermetia illucens lack functional mouthparts, do not feed in adult form, do not bite humans or animals, do not land on human food, and are not considered typical disease vectors, unlike ordinary synanthropic houseflies."
    },
    {
      id: "faq-4",
      ua_q: "Як організовано забір і яка мінімальна партія?",
      ua_a: "Ми орієнтуємося на регулярний забір від ~20 кг на день за узгодженим графіком (щодня або 2–3 рази на тиждень) у герметичних оборотних контейнерах, щоб сировина не застоювалася і не починала бродити.",
      en_q: "How is collection organized and what is the minimum volume?",
      en_a: "We target scheduled pickups from ~20 kg/day (daily or 2–3 times per week) using sealed returnable food-grade containers to prevent fermentation prior to larvae feeding."
    },
    {
      id: "faq-5",
      ua_q: "Чи це легально в Україні та який статус кормової продукції?",
      ua_a: "Утилізація безпечних рослинних відходів відповідає Закону України «Про управління відходами». Щодо використання білка комах у комбікормах — у ЄС він офіційно дозволений для аквакультури та птиці (Регламенти ЄС 2017/893 та 2021/1372). В Україні статус личинок як корму наразі уточнюється: ми плануємо звернутися до Держпродспоживслужби щодо регуляторного статусу та умов застосування.",
      en_q: "Is this legal in Ukraine and what is the regulatory status of the feed?",
      en_a: "Recycling non-hazardous plant residues complies with the Ukrainian Law on Waste Management. For insect meal in feeds: the EU permits BSF in aquaculture and poultry (EU Reg 2017/893 & 2021/1372). In Ukraine, the status of larvae as animal feed is currently being clarified; we plan to consult the State Service of Ukraine on Food Safety and Consumer Protection."
    },
    {
      id: "faq-6",
      ua_q: "Скільки коштує забір для постачальника відходів?",
      ua_a: "На стадії прототипу умови співпраці обговорюємо індивідуально; зразок паспорта партії для звітності надаємо.",
      en_q: "How much does collection cost for the waste supplier?",
      en_a: "At the prototype stage, terms are discussed individually; a sample batch recycling document can be provided."
    },
    {
      id: "faq-7",
      ua_q: "Хто потенційні покупці готової продукції?",
      ua_a: "Основними потенційними споживачами є виробники кормів для аквакультури (форелеві, осетрові господарства), птахоферми, виробники pet food (корми для котів, собак, рептилій), а також оранжереї та фермери, які зацікавлені в органічному зоогумусі. На стадії прототипу ми збираємо попередні листи про наміри (LOI) на тестові партії.",
      en_q: "Who are the potential buyers of the end products?",
      en_a: "Primary potential buyers are aquaculture farms (trout, sturgeon), poultry producers, pet food manufacturers, and greenhouses or farms interested in organic zoohumus. At the prototype stage, we gather non-binding Letters of Intent (LOI) for test batches."
    },
    {
      id: "faq-8",
      ua_q: "Як інвестори або партнери можуть підтримати проєкт?",
      ua_a: "Ми відкриті до діалогу з impact-інвесторами, дослідницькими установами Києва та представниками міських програм, зацікавленими у розвитку суверенного виробництва протеїну та деполігонізації органічних відходів столиці.",
      en_q: "How can investors or partners support the project?",
      en_a: "We welcome dialogue with impact investors, Kyiv research institutions, and municipal green program representatives interested in scaling localized protein security and circular waste reduction."
    }
  ]
};

// Експорт у глобальну область видимості браузера
if (typeof window !== "undefined") {
  window.ECOFLY_DATA = ECOFLY_DATA;
}
