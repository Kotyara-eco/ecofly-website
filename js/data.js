/**
 * EcoFly Data & Configuration
 * Єдине джерело констант, розрахункових коефіцієнтів з науковими джерелами
 * та англійського словника для проєкту циркулярної економіки EcoFly (Київ).
 */

const ECOFLY_DATA = {
  // Наукові константи розрахунків з джерелами
  CALCULATION: {
    // 15–20% від маси вологого субстрату перетворюється на живу біомасу личинок
    // Джерело: Eawag/Sandec (2017), "Black Soldier Fly Biowaste Processing: A Step-by-Step Guide", Chapter 2
    LARVAE_CONVERSION_MIN: 0.15,
    LARVAE_CONVERSION_MAX: 0.20,

    // Редукція сухої маси органічного субстрату становить 60–85%
    // Джерело: Eawag/Sandec (2017), "Black Soldier Fly Biowaste Processing: A Step-by-Step Guide", p. 18
    DRY_MASS_REDUCTION_MIN: 0.60,
    DRY_MASS_REDUCTION_MAX: 0.85,

    // Щільність переробки субстрату на одиницю площі культиватора: 31.25 кг субстрату на м² на добу
    // Розрахунок Eawag/Sandec: норма завантаження 5 кг вологого субстрату на 1 м² за 5-добовий цикл відгодівлі або
    // інтенсивні багатоярусні системи вертикального культивування
    // Джерело: Eawag/Sandec (2017), Technical Specifications for BSF waste treatment units
    SPACE_KG_PER_M2_PER_DAY: 31.25,

    // Частка органіки в міських твердих побутових відходах (ТПВ) становить від 27% до 65% (у середньому >40%)
    // Джерело: Світовий Банк (What a Waste 2.0: A Global Snapshot of Solid Waste Management to 2050) & Мінрегіон України
    ORGANIC_SHARE_MSW_MIN: 0.27,
    ORGANIC_SHARE_MSW_MAX: 0.65
  },

  // Орієнтири цін на ринку (станом на 2024-2025 рр.)
  PRICING: {
    HORISHNI_PLAVNI_2024: 30, // 30 грн/кг живих личинок, ферма «Горішні Плавні», 2024 р.
    HERMETIA_FARM_2025_MIN: 140, // 140 грн/кг живих личинок, прайс hermetia.farm, 2025 р.
    HERMETIA_FARM_2025_MAX: 275, // 275 грн/кг живих личинок, прайс hermetia.farm, 2025 р.
    NOTE_UA: "Зверніть увагу: наведені ціни стосуються живих личинок (живої біомаси), а не висушеного знежиреного кормового борошна, і прямому зіставленню з соєвим чи рибним борошном не підлягають. Проєкт EcoFly перебуває на стадії прототипу й наразі формує власну собівартість.",
    NOTE_EN: "Note: the prices listed refer to live larvae (fresh biomass), not dried defatted feed meal, and are not directly comparable to soybean or fish meal. The EcoFly project is currently at the prototype stage and is establishing its own unit production costs."
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

  // Англійський словник для перемикання мови (UA вже присутній за замовчуванням у розмітці)
  EN_TRANSLATIONS: {
    // Навігація
    "nav.how_it_works": "How it works",
    "nav.for_waste": "Waste suppliers",
    "nav.for_buyers": "Product buyers",
    "nav.calculator": "Calculator",
    "nav.passport": "Batch passport",
    "nav.impact": "Impact",
    "nav.risks": "Risks & Honesty",
    "nav.timeline": "Timeline",
    "nav.team": "Team",
    "nav.faq": "FAQ",
    "nav.contacts": "Contacts",
    "nav.cta": "Submit request",
    "nav.theme_toggle_aria": "Switch color theme (light / dark)",
    "nav.lang_toggle_aria": "Switch language between Ukrainian and English",
    "nav.menu_toggle_aria": "Open navigation menu",

    // Hero
    "hero.badge": "Kyiv circular economy pilot project",
    "hero.title": "Converting organic waste into high-value protein and fertilizer",
    "hero.subtitle": "EcoFly uses Black Soldier Fly larvae (Hermetia illucens) to close the biological nutrient loop in Kyiv without waste or emissions.",
    "hero.btn_waste": "I supply waste",
    "hero.btn_buyers": "I buy protein",
    "hero.btn_partner": "I am a partner / investor",
    "hero.fact1_val": "15–20%",
    "hero.fact1_lbl": "larvae yield from wet substrate weight",
    "hero.fact1_src": "Eawag/Sandec, BSF Biowaste Processing",
    "hero.fact2_val": "60–85%",
    "hero.fact2_lbl": "dry mass reduction of organic residue",
    "hero.fact2_src": "Eawag/Sandec, Chapter 2",
    "hero.fact3_val": "0 landfills",
    "hero.fact3_lbl": "waste stays in the economic cycle",
    "hero.fact3_src": "Circular bioeconomy model",

    // Схема
    "diagram.waste": "Organic Waste",
    "diagram.waste_sub": "Spent grains, pomace, HoReCa",
    "diagram.larvae": "BSF Larvae",
    "diagram.larvae_sub": "Hermetia illucens bioconversion",
    "diagram.protein": "Feed Protein & Lipids",
    "diagram.protein_sub": "Aquafeed & poultry nutrition",
    "diagram.frass": "Zoohumus (Frass)",
    "diagram.frass_sub": "Natural soil regeneration",

    // Як це працює
    "cycle.badge": "4 steps of bioconversion",
    "cycle.title": "How the closed loop works",
    "cycle.desc": "Every kilogram of food and agricultural residue is turned into valuable biological resources within 12–14 days.",
    "cycle.step1_title": "1. Scheduled Collection",
    "cycle.step1_desc": "We collect wet plant residues directly from breweries, juice processors, bakeries, and kitchens on an agreed schedule.",
    "cycle.step1_metric": "From 20 kg/day stable flow",
    "cycle.step2_title": "2. Larvae Digestion",
    "cycle.step2_desc": "Voracious BSF larvae consume the substrate rapidly, reducing dry organic mass by 60–85% within a multi-tiered indoor system.",
    "cycle.step2_metric": "31.25 kg/m²/day loading rate",
    "cycle.step3_title": "3. Separation & Processing",
    "cycle.step3_desc": "Prepupae are separated into protein fraction and technical lipids, leaving premium organic insect frass.",
    "cycle.step3_metric": "15–20% live biomass yield",
    "cycle.step4_title": "4. Return to Soil & Feed",
    "cycle.step4_desc": "Protein enriches poultry/fish nutrition, while frass returns organic carbon and nitrogen to urban gardens and local farmers.",
    "cycle.step4_metric": "100% circular, zero landfill",

    // Застереження
    "warning.badge": "Substrate compliance notice",
    "warning.title": "What we currently DO NOT accept for feed production:",
    "warning.desc": "Meat, slaughterhouse waste, catering fish residues, and animal manure are strictly excluded in accordance with EU Regulation 2017/893 regarding insect substrates for animal feed. We only accept clean plant-based food industry by-products.",

    // Для відходів
    "waste.badge": "For food manufacturers & HoReCa",
    "waste.title": "Solve organic waste disposal legally and transparently",
    "waste.lead": "We help food manufacturers, juice/kvass makers, and restaurants turn an odor and disposal headache into an ESG asset.",
    "waste.p1_title": "Zero landfill fees & no odor",
    "waste.p1_desc": "Regular collection containers eliminate fermentation odors and save on municipal waste hauling fees.",
    "waste.p2_title": "Batch Passport & ESG Audit",
    "waste.p2_desc": "Every batch receives a traceable digital certificate confirming green bioconversion for corporate sustainability reporting.",
    "waste.p3_title": "Community impact",
    "waste.p3_desc": "Optional donation of resulting organic fertilizer to Kyiv public schools and municipal community gardens.",
    "waste.form_title": "Submit waste collection request",
    "waste.form_desc": "Tell us about your organic streams. We will reply within 24 hours.",
    "waste.lbl_type": "Type of organic waste",
    "waste.opt_type_brewer": "Spent grain / brewery malt",
    "waste.opt_type_juice": "Fruit / vegetable pomace (juice, kvass)",
    "waste.opt_type_bakery": "Bakery residues / flour by-products",
    "waste.opt_type_kitchen": "Kitchen pre-consumer vegetable trimmings (HoReCa)",
    "waste.lbl_volume": "Daily waste volume (kg/day)",
    "waste.lbl_freq": "Collection frequency",
    "waste.opt_freq_daily": "Daily (7 days/week)",
    "waste.opt_freq_3week": "2–3 times a week",
    "waste.opt_freq_weekly": "Once a week",
    "waste.lbl_district": "Kyiv district for collection",
    "waste.lbl_contact_name": "Contact person & company",
    "waste.lbl_phone": "Phone or Telegram",
    "waste.chk_esg": "Require ESG recycling certificate (Batch Passport)",
    "waste.chk_donate": "Donate part of frass to Kyiv public schools & urban gardens",
    "waste.chk_consent": "I consent to personal data processing in accordance with the Privacy Notice",
    "waste.btn_submit": "Submit collection request",
    "waste.btn_copy": "Copy application data",

    // Для покупців
    "buyers.badge": "For feed mills & livestock farms",
    "buyers.title": "Alternative protein, insect fat & frass",
    "buyers.lead": "Reliable domestic protein source free from maritime logistics risks and foreign currency spikes.",
    "buyers.prod1_title": "BSF Larvae Protein",
    "buyers.prod1_desc": "Rich in essential amino acids, lauric acid, and natural antimicrobial peptides. Ideal for aquaculture and poultry diets.",
    "buyers.prod1_val": "Lab profile: [TO BE FILLED from official lab report]",
    "buyers.prod2_title": "Lipid Extract",
    "buyers.prod2_desc": "High concentration of medium-chain triglycerides (MCT) and lauric acid with verified bacteriostatic qualities.",
    "buyers.prod2_val": "Fat content: [TO BE FILLED]",
    "buyers.prod3_title": "Insect Frass (Zoohumus)",
    "buyers.prod3_desc": "Microbiologically active natural biofertilizer containing chitin that stimulates plant immune systems.",
    "buyers.prod3_val": "NPK & organic matter: [TO BE FILLED]",

    // Таблиця
    "table.title": "Ingredient comparison: Soy vs Fishmeal vs BSF Larvae",
    "table.col_param": "Parameter",
    "table.col_soy": "Soybean Meal",
    "table.col_fish": "Fishmeal",
    "table.col_bsf": "BSF Insect Meal",
    "table.row1_param": "Import & FX risk",
    "table.row1_soy": "High (volatile dollar exchange)",
    "table.row1_fish": "Critical (100% sea import)",
    "table.row1_bsf": "Zero (100% Kyiv local production)",
    "table.row2_param": "Composition stability",
    "table.row2_soy": "Medium (crop year weather dependent)",
    "table.row2_fish": "Variable (catch season dependent)",
    "table.row2_bsf": "High (controlled indoor climate)",
    "table.row3_param": "Certification & status",
    "table.row3_soy": "Standard state feed catalog",
    "table.row3_fish": "Veterinary certificates required",
    "table.row3_bsf": "State registration pending [TO VERIFY]",
    "table.row4_param": "Price benchmark",
    "table.row4_soy": "~22–28 UAH/kg meal",
    "table.row4_fish": "~80–130 UAH/kg meal",
    "table.row4_bsf": "Live larvae: 30 UAH/kg (2024) to 140–275 UAH/kg (2025)*",

    "buyers.price_notice": "* Pricing clarification: 30 UAH/kg (Horishni Plavni farm, 2024) and 140–275 UAH/kg (hermetia.farm retail price list, 2025) represent live larvae prices, NOT dried defatted protein meal. Live biomass contains ~70% moisture, so it cannot be directly compared to commercial dry meal. EcoFly is at the pilot prototype phase and will establish commercial contract pricing based on pilot batch yields.",
    "buyers.form_title": "Request product samples / LOI",
    "buyers.lbl_buyer_type": "Your activity",
    "buyers.opt_poultry": "Poultry / pig farm",
    "buyers.opt_aqua": "Aquaculture / fish farm",
    "buyers.opt_feedmill": "Commercial feed producer",
    "buyers.opt_petfood": "Pet food manufacturer",
    "buyers.lbl_current_feed": "Current feed protein source & price (UAH/t)",
    "buyers.lbl_monthly_vol": "Required monthly volume (kg or tons)",
    "buyers.chk_loi": "Interested in signing a non-binding Letter of Intent (LOI) for pilot batches",
    "buyers.btn_submit": "Request protein sample",

    // Калькулятор
    "calc.badge": "BSF Ecological Impact Estimator",
    "calc.title": "Calculate your recycling potential",
    "calc.desc": "Based on validated research coefficients from Eawag/Sandec.",
    "calc.lbl_input": "Your daily organic waste volume:",
    "calc.lbl_days": "Operating days per month:",
    "calc.res1_title": "Monthly fresh larvae yield",
    "calc.res1_sub": "15–20% bioconversion rate",
    "calc.res2_title": "Diverted from Kyiv landfills",
    "calc.res2_sub": "100% recycled locally",
    "calc.res3_title": "Cultivation space needed",
    "calc.res3_sub": "At 31.25 kg/m²/day density",
    "calc.disclaimer": "* Indicative estimation for planning purposes; not a binding guarantee of batch yields. Real output depends on moisture and nutritional profile of the substrate (Eawag/Sandec, 2017).",

    // Паспорт
    "passport.badge": "Transparency & ESG traceability",
    "passport.title": "Sample Batch Passport",
    "passport.desc": "Every batch processed by EcoFly receives an authentic digital passport detailing raw waste source, processing date, and product output for corporate ESG compliance.",
    "passport.sample_watermark": "SAMPLE SPECIMEN",
    "passport.doc_title": "BSF BIOCONVERSION BATCH PASSPORT",
    "passport.batch_id_lbl": "Batch Identification Code:",
    "passport.supplier_lbl": "Supplier:",
    "passport.waste_type_lbl": "Substrate Category:",
    "passport.raw_weight_lbl": "Delivered Biomass:",
    "passport.district_lbl": "Collection District:",
    "passport.date_in_lbl": "Intake Date:",
    "passport.date_out_lbl": "Harvest Date:",
    "passport.output_lbl": "Verified Bioconversion Output:",
    "passport.sign_lbl": "Kyiv Urban Biowaste Pilot Facility",
    "passport.btn_print": "Print / Save sample as PDF",
    "passport.btn_open": "Open standalone sample file",

    // Вплив
    "impact.badge": "Ecology, Society, Ethics",
    "impact.title": "Triple impact on Kyiv's ecosystem",
    "impact.p1_title": "1. Ecological: De-landfilling",
    "impact.p1_desc": "Organic waste accounts for 27% to 65% of municipal solid waste (World Bank). Diverting it prevents anaerobic decomposition into methane, a greenhouse gas 28x more potent than CO2.",
    "impact.p2_title": "2. Social: Urban greening",
    "impact.p2_desc": "A fixed share of our organic frass fertilizer is donated free of charge to Kyiv public school nature labs, community gardens, and urban farming initiatives.",
    "impact.p3_title": "3. Ethical: Clean feed streams",
    "impact.p3_desc": "Zero compromise on substrate safety: no meat, no municipal sewage sludge, and strict compliance with EU Regulation 2017/893 standards.",

    // Ризики
    "risks.badge": "Radical transparency",
    "risks.title": "Identified risks and mitigation strategies",
    "risks.desc": "We build trust by openly discussing the challenges of our pilot stage rather than hiding behind buzzwords.",
    "risks.r1_title": "Regulatory feed status in Ukraine",
    "risks.r1_desc": "Insect protein is approved in the EU for aquafeed and poultry, but Ukrainian regulatory registration is currently pending clarification [TO VERIFY].",
    "risks.r1_mit": "Mitigation: we consult state veterinary agencies and prepare standard pilot applications under technical conditions (TU).",
    "risks.r2_title": "Substrate seasonality & volume fluctuations",
    "risks.r2_desc": "Small food processors have varying outputs between summer and winter.",
    "risks.r2_mit": "Mitigation: combining multi-source streams (breweries + bakeries + year-round vegetable processing).",
    "risks.r3_title": "Market willingness to pay",
    "risks.r3_desc": "Commercial livestock farms are used to subsidized soy and price-sensitive margins.",
    "risks.r3_mit": "Mitigation: preliminary LOI testing, focusing on high-value pet food, fish nurseries, and veterinary gut-health benefits.",
    "risks.r4_title": "Odor and biosecurity on-site",
    "risks.r4_desc": "Larvae processing must not disturb neighbors or violate sanitary buffer zones.",
    "risks.r4_mit": "Mitigation: negative pressure ventilation, HEPA and biochar filtration, zero meat/manure substrates.",

    // Таймлайн
    "timeline.badge": "Current status & roadmap",
    "timeline.title": "Where we are: honesty over hype",
    "timeline.t1_status": "COMPLETED",
    "timeline.t1_title": "3 in-depth discovery talks with owners",
    "timeline.t1_desc": "Explored real requirements with a kvass producer, a commercial pig farm owner, and a deer breeder.",
    "timeline.t2_status": "IN PROGRESS",
    "timeline.t2_title": "Planned discovery interviews",
    "timeline.t2_desc": "Targeting Kyiv HoReCa kitchen operators, supermarket retail chains, and feed formulators.",
    "timeline.t3_status": "PLANNED",
    "timeline.t3_title": "Kyiv micro-pilot launch [TO BE FILLED]",
    "timeline.t3_desc": "Testing 50–100 kg daily intake capacity, verifying laboratory feed profile and energy consumption.",

    // Команда
    "team.badge": "Founding team & incubator",
    "team.title": "People driving the project",
    "team.lead_role": "Project Founder & Lead",
    "team.lead_bio": "Vladyslav Kolisnyk [TO BE FILLED with founder bio and background]",
    "team.inc_title": "Youthquake Incubator",
    "team.inc_desc": "Ecosystem partner and incubator providing mentorship, network, and impact acceleration.",
    "team.partner_slot_title": "Scientific & Municipal Partners",
    "team.partner_slot_desc": "Open for research collaboration with Kyiv universities, veterinary labs, and urban ecology departments.",

    // FAQ
    "faq.badge": "Frequently asked questions",
    "faq.title": "Answers to common questions",

    // Контакти
    "contact.badge": "Get in touch",
    "contact.title": "Choose your involvement channel",
    "contact.c1_title": "Waste Suppliers",
    "contact.c1_desc": "Got food or beverage residues in Kyiv? Let's discuss daily collection.",
    "contact.c2_title": "Feed & Farm Buyers",
    "contact.c2_desc": "Need sustainable protein samples or interested in signing an LOI?",
    "contact.c3_title": "Partners & City",
    "contact.c3_desc": "Invest in greentech, collaborate on research, or integrate urban composting.",
    "contact.city": "Kyiv, Ukraine",

    // Футер
    "footer.rights": "EcoFly. Circular economy pilot project.",
    "footer.privacy_notice": "Privacy Notice: Contact details submitted via forms are used solely for direct communication regarding pilot batches and are never shared with third parties.",
    "footer.back_to_top": "Back to top",

    // Сповіщення форм
    "alert.fill_required": "Please fill in all required fields.",
    "alert.consent_required": "Please confirm consent to personal data processing.",
    "alert.time_lock": "Anti-spam protection: please wait a few seconds before submitting the form.",
    "alert.copied": "Application data copied to clipboard! You can paste and send it to our Telegram or Email.",
    "alert.submitted_demo": "Thank you! Your request has been recorded. [FORM LINK]"
  },

  // 8 ключових запитань FAQ двома мовами
  FAQ_ITEMS: [
    {
      id: "faq-1",
      ua_q: "Які саме відходи ви приймаєте?",
      ua_a: "Ми приймаємо чисті вологі рослинні залишки: пивну дробину, макуху та вичавки з виробництва соків і квасу, хлібні обрізки, а також рослинні залишки з кухонь (pre-consumer HoReCa). Ми не приймаємо м'ясо, рибу, гній чи зіпсовані продукти з цвіллю згідно з вимогами європейського Регламенту 2017/893 до кормових субстратів.",
      en_q: "What types of organic waste do you accept?",
      en_a: "We accept clean, wet plant-based residues: brewer's spent grain, fruit and vegetable pomace from juice/kvass production, bakery trimmings, and pre-consumer vegetable kitchen trimmings. We do not accept meat, fish, manure, or moldy waste in compliance with EU Regulation 2017/893 regarding insect feed substrates."
    },
    {
      id: "faq-2",
      ua_q: "Чи є неприємний запах під час переробки?",
      ua_a: "Личинки Hermetia illucens виділяють природні антимікробні сполуки, які пригнічують анаеробне гниття та утворення метану й сірководню. За свіжого завантаження відчувається легкий землисто-дріжджовий запах, який на виробничому майданчику нейтралізується системою витяжки з біофільтрами.",
      en_q: "Is there an unpleasant odor during processing?",
      en_a: "Hermetia illucens larvae secrete natural antimicrobial peptides that suppress anaerobic rotting, methane, and hydrogen sulfide. Fresh substrates smell mildly like yeast or damp earth, and any air on-site is treated with biochar filtration systems."
    },
    {
      id: "faq-3",
      ua_q: "Чи безпечні личинки чорної левової мухи для довкілля Києва?",
      ua_a: "Так, абсолютно безпечні. Доросла особина Hermetia illucens живе лише кілька днів за рахунок накопиченого жиру, не має функціонального ротового апарату, не кусає людей і тварин, не сідає на їжу і не є переносником збудників хвороб, на відміну від звичайних кімнатних мух.",
      en_q: "Are Black Soldier Flies safe for Kyiv's local environment?",
      en_a: "Yes, completely safe. Adult BSF do not possess functional mouthparts, do not bite humans or animals, do not feed in adult form, do not land on human food, and cannot transmit pathogens, unlike ordinary synanthropic houseflies."
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
      ua_a: "Утилізація безпечних рослинних відходів відповідає Закону України «Про управління відходами». Щодо використання білка комах у комбікормах — у ЄС він офіційно дозволений для аквакультури та птиці (Регламент ЄС 2017/893 та 2021/1372), а в Україні процедура реєстрації наразі уточнюється [ПЕРЕВІРИТИ]. Пілотні партії орієнтовані на лабораторні дослідження та непродуктивних тварин (pet food).",
      en_q: "Is this legal in Ukraine and what is the regulatory status of the feed?",
      en_a: "Recycling non-hazardous plant residues complies with the Ukrainian Law on Waste Management. For insect meal in animal feeds: the EU permits BSF in aquaculture and poultry (EU Reg 2017/893 & 2021/1372), while Ukrainian state feed registration is currently pending clarification [TO VERIFY]. Pilot batches are targeted at laboratory trials and pet food."
    },
    {
      id: "faq-6",
      ua_q: "Скільки коштує забір для постачальника відходів?",
      ua_a: "На стадії пілоту ми тестуємо кілька економічних моделей: безкоштовний забір за умови стабільного відсортованого обсягу від 20 кг/день, або взаємозалік із наданням частини готового органічного добрива та паспорта утилізації для звітності.",
      en_q: "How much does collection cost for the waste supplier?",
      en_a: "During the pilot stage, we test flexible models: zero-fee collection for stable sorted streams of 20+ kg/day, or a mutual arrangement with free organic frass return and official ESG batch certification."
    },
    {
      id: "faq-7",
      ua_q: "Хто купує готову продукцію і які обсяги доступні?",
      ua_a: "Основними покупцями є виробники кормів для аквакультури, форелеві та осетрові господарства, птахоферми, виробники кормів для непродуктивних тварин (коти, собаки, рептилії), а також міські оранжереї та фермери, які потребують органічного фрасу. Наразі ми збираємо листи про наміри (LOI) на пілотні партії.",
      en_q: "Who buys the end products and what volumes are available?",
      en_a: "Primary buyers are aquaculture producers, trout/sturgeon farms, poultry raisers, pet food brands (for cats, dogs, reptiles), as well as urban greenhouses needing biofertilizer. Currently we are collecting non-binding Letters of Intent (LOI) for pilot batch allocations."
    },
    {
      id: "faq-8",
      ua_q: "Як інвестори або міські служби можуть підтримати проєкт?",
      ua_a: "Ми відкриті до партнерства з міськими ініціативами Києва (надання пілотного майданчика, грантові програми для кліматичних стартапів) та impact-інвесторами, які прагнуть розвивати суверенний ринок протеїну й деполігонізацію столиці.",
      en_q: "How can investors or municipal departments support the project?",
      en_a: "We welcome partnerships with Kyiv municipal programs (pilot facility space, green climate grants) and impact investors interested in scaling localized protein security and circular waste reduction."
    }
  ]
};

// Експорт у глобальну область видимості
if (typeof window !== "undefined") {
  window.ECOFLY_DATA = ECOFLY_DATA;
}
