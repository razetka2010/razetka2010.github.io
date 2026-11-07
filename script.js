(function () {
  "use strict";

  const translations = {
    ru: {
      "meta.title": "Razetka — Артём, программист",
      "meta.desc": "Артём (Razetka) — программист из Нового Уренгоя. Сайты, веб-приложения, Telegram-боты и автоматизация. Создатель корпорации «Знание Севера».",
      "brand.sub": "программист",
      "nav.about": "О себе",
      "nav.services": "Услуги",
      "nav.stack": "Технологии",
      "nav.music": "Музыка",
      "nav.contact": "Контакты",
      "nav.cta": "Связаться",
      "hero.badge": "Программист · Новый Уренгой",
      "hero.name": "Артём",
      "hero.role": "программист",
      "hero.lead": "Разрабатываю сайты, веб-приложения, Telegram-ботов и автоматизированные системы. Создатель корпорации «Знание Севера».",
      "hero.slogan": "«Продуктивность — залог успеха»",
      "hero.tg": "Написать в Telegram",
      "hero.gh": "Смотреть GitHub",
      "stat1.label": "лет опыта",
      "stat2.label": "технологий",
      "stat3.label": "онлайн-формат",
      "portrait.role": "программист",
      "portrait.city": "Новый Уренгой",
      "portrait.status": "Онлайн",
      "about.eyebrow": "О себе",
      "about.title": "Код, который решает задачи",
      "about.p1": "Меня зовут Артём, я программист из Нового Уренгоя. Разрабатываю сайты, веб-приложения, Telegram-ботов и различные автоматизированные системы — от идеи и прототипа до готового решения.",
      "about.p2": "Люблю разбираться в устройстве компьютеров и сетей, поэтому часто помогаю учителям и знакомым решать технические проблемы. Мне важно, чтобы технология была понятной и действительно полезной.",
      "about.p3": "Работаю онлайн, соблюдаю сроки и говорю на человеческом языке — без лишнего жаргона.",
      "about.founderLabel": "Основатель",
      "about.founderTitle": "«Знание Севера»",
      "about.founderText": "Корпорация, которую я создаю и развиваю. Проекты на стыке технологий и знаний.",
      "services.eyebrow": "Услуги",
      "services.title": "Что я делаю",
      "services.sub": "От небольшого сайта до автоматизированной системы — под ключ.",
      "s1.t": "Сайты",
      "s1.d": "Лендинги, визитки и корпоративные сайты: адаптивная вёрстка, быстрая загрузка и внимание к деталям.",
      "s2.t": "Веб-приложения",
      "s2.d": "Сервисы и интерфейсы на JavaScript, PHP, Python и Java — от прототипа до рабочего продукта.",
      "s3.t": "Telegram-боты",
      "s3.d": "Боты для продаж, поддержки, уведомлений и автоматизации рутины — с понятным управлением.",
      "s4.t": "Автоматизация",
      "s4.d": "Скрипты и системы, которые забирают повторяющиеся задачи и освобождают время.",
      "s5.t": "Техническая помощь",
      "s5.d": "Настройка компьютеров и сетей, консультации и решение технических проблем — для людей, а не для галочки.",
      "stack.eyebrow": "Технологии",
      "stack.title": "Языки и технологии",
      "stack.sub": "Инструменты, с которыми работаю каждый день.",
      "stack.backend": "Backend",
      "stack.frontend": "Frontend",
      "music.eyebrow": "Музыка",
      "music.title": "Плейлист по духу",
      "music.quote": "Хорошая музыка — она либо про жизнь, либо про душу. А в этом списке есть и то, и другое.",
      "music.sub": "То, что звучит в наушниках, пока пишется код.",
      "artist.01": "Сектор Газа",
      "artist.02": "Михаил Круг",
      "artist.03": "Ария",
      "artist.04": "Бутырка",
      "artist.05": "БИ-2",
      "artist.06": "Кино",
      "artist.07": "Нэнси",
      "artist.08": "Лолита",
      "artist.09": "Стас Михайлов",
      "artist.10": "Татьяна Буланова",
      "artist.11": "Король и Шут",
      "artist.12": "Высоцкий",
      "artist.13": "Киркоров",
      "artist.14": "Меладзе",
      "contact.eyebrow": "Контакты",
      "contact.title": "Давайте знакомиться",
      "contact.sub": "Открыт к новым проектам и сотрудничеству. Быстрее всего отвечаю в Telegram.",
      "contact.phone": "Телефон",
      "contact.email": "Email",
      "contact.telegram": "Telegram",
      "contact.city": "Город",
      "contact.format": "Формат",
      "contact.cityValue": "Новый Уренгой, Россия",
      "contact.formatValue": "Онлайн",
      "contact.tgBtn": "Написать в Telegram",
      "contact.mailBtn": "Написать на email",
      "social.github": "GitHub",
      "social.githubSub": "Код и проекты",
      "social.twitch": "Twitch",
      "social.twitchSub": "Стримы",
      "social.donate": "DonationAlerts",
      "social.donateSub": "Поддержать проект",
      "footer.copy": "© 2026 Razetka. Все права защищены.",
      "footer.made": "«Знание Севера» · сделано с вниманием к деталям",
      "footer.top": "Наверх"
    },
    en: {
      "meta.title": "Razetka — Artem, developer",
      "meta.desc": "Artem (Razetka) is a developer from Novy Urengoy. Websites, web applications, Telegram bots and automation. Founder of the Znanie Severa corporation.",
      "brand.sub": "developer",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.stack": "Stack",
      "nav.music": "Music",
      "nav.contact": "Contact",
      "nav.cta": "Get in touch",
      "hero.badge": "Developer · Novy Urengoy",
      "hero.name": "Artem",
      "hero.role": "developer",
      "hero.lead": "I build websites, web applications, Telegram bots and automated systems. Founder of the Znanie Severa corporation.",
      "hero.slogan": "“Productivity is the key to success”",
      "hero.tg": "Message on Telegram",
      "hero.gh": "View GitHub",
      "stat1.label": "years of experience",
      "stat2.label": "technologies",
      "stat3.label": "remote",
      "portrait.role": "developer",
      "portrait.city": "Novy Urengoy",
      "portrait.status": "Remote",
      "about.eyebrow": "About",
      "about.title": "Code that solves problems",
      "about.p1": "My name is Artem, I am a developer from Novy Urengoy. I build websites, web applications, Telegram bots and automated systems — from idea and prototype to a finished solution.",
      "about.p2": "I enjoy understanding how computers and networks work, so I often help teachers and friends solve technical problems. It matters to me that technology is clear and genuinely useful.",
      "about.p3": "I work remotely, meet deadlines and speak plain language — no unnecessary jargon.",
      "about.founderLabel": "Founder",
      "about.founderTitle": "Znanie Severa",
      "about.founderText": "A corporation I am building and developing. Projects where technology meets knowledge.",
      "services.eyebrow": "Services",
      "services.title": "What I do",
      "services.sub": "From a small website to a full automated system — end to end.",
      "s1.t": "Websites",
      "s1.d": "Landing pages, personal sites and corporate websites: responsive layout, fast loading and attention to detail.",
      "s2.t": "Web applications",
      "s2.d": "Services and interfaces built with JavaScript, PHP, Python and Java — from prototype to a working product.",
      "s3.t": "Telegram bots",
      "s3.d": "Bots for sales, support, notifications and routine automation — easy to manage.",
      "s4.t": "Automation",
      "s4.d": "Scripts and systems that take over repetitive tasks and free up your time.",
      "s5.t": "Technical help",
      "s5.d": "Setting up computers and networks, consultations and solving technical problems — for people, not for a checkbox.",
      "stack.eyebrow": "Stack",
      "stack.title": "Languages & technologies",
      "stack.sub": "Tools I work with every day.",
      "stack.backend": "Backend",
      "stack.frontend": "Frontend",
      "music.eyebrow": "Music",
      "music.title": "A playlist for the soul",
      "music.quote": "Good music is either about life or about the soul. This list has both.",
      "music.sub": "What plays in my headphones while I write code.",
      "artist.01": "Sektor Gaza",
      "artist.02": "Mikhail Krug",
      "artist.03": "Aria",
      "artist.04": "Butyrka",
      "artist.05": "BI-2",
      "artist.06": "Kino",
      "artist.07": "Nensi",
      "artist.08": "Lolita",
      "artist.09": "Stas Mikhailov",
      "artist.10": "Tatyana Bulanova",
      "artist.11": "Korol i Shut",
      "artist.12": "Vysotsky",
      "artist.13": "Kirkorov",
      "artist.14": "Meladze",
      "contact.eyebrow": "Contact",
      "contact.title": "Let’s get in touch",
      "contact.sub": "I am open to new projects and collaboration. Telegram is the fastest way to reach me.",
      "contact.phone": "Phone",
      "contact.email": "Email",
      "contact.telegram": "Telegram",
      "contact.city": "Location",
      "contact.format": "Format",
      "contact.cityValue": "Novy Urengoy, Russia",
      "contact.formatValue": "Remote",
      "contact.tgBtn": "Message on Telegram",
      "contact.mailBtn": "Send an email",
      "social.github": "GitHub",
      "social.githubSub": "Code and projects",
      "social.twitch": "Twitch",
      "social.twitchSub": "Live streams",
      "social.donate": "DonationAlerts",
      "social.donateSub": "Support the project",
      "footer.copy": "© 2026 Razetka. All rights reserved.",
      "footer.made": "Znanie Severa · made with attention to detail",
      "footer.top": "Back to top"
    }
  };
  const header = document.getElementById("siteHeader");
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");
  const body = document.body;

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    body.classList.toggle("menu-open", open);
  }

  burger.addEventListener("click", function () {
    setMenu(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () { setMenu(false); });
  });

  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setMenu(false);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 960) setMenu(false);
  });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add("is-visible"); });
  }

  const metaDescription = document.querySelector('meta[name="description"]');
  const langButtons = document.querySelectorAll("[data-lang]");

  function applyLanguage(lang) {
    const dictionary = translations[lang];
    if (!dictionary) return;

    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      const key = element.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }
    });

    document.title = dictionary["meta.title"];
    if (metaDescription) metaDescription.setAttribute("content", dictionary["meta.desc"]);

    langButtons.forEach(function (button) {
      const isActive = button.getAttribute("data-lang") === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    try { localStorage.setItem("razetka-lang", lang); } catch (error) {}
  }

  langButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.getAttribute("data-lang"));
    });
  });

  let savedLang = null;
  try { savedLang = localStorage.getItem("razetka-lang"); } catch (error) {}
  applyLanguage(savedLang === "en" ? "en" : "ru");
})();
