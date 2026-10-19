(function () {
  const STORAGE_KEY = "kxstxn-lang";

  const translations = {
    en: {
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.tools": "Tools",
      "nav.projects": "Projects",
      "nav.about": "About",

      "main.tagline": "Ctrl+C, Ctrl+V, then magic happens.",
      "main.telegram": "Telegram",
      "main.github": "Github",

      "services.title": "Services",
      "services.lead": "Things I build, fix, and ship. Ctrl+C, Ctrl+V, then magic happens.",
      "services.web.title": "Web development",
      "services.web.text": "Landing pages, personal sites, and small web apps — clean markup, dark UI, no bloat.",
      "services.auto.title": "Automation & scripts",
      "services.auto.text": "CLI utilities, bots, and glue code that remove repetitive work from your day.",
      "services.bots.title": "Telegram bots",
      "services.bots.text": "Custom bots for notifications, workflows, or small products that live where you already chat.",
      "services.debug.title": "Debugging & rescue",
      "services.debug.text": "Broken deploy, weird bug, half-finished feature — I dig in and get it working again.",
      "services.linux.title": "Linux / Omarchy setup",
      "services.linux.text": "Desktop environments, configs, and developer machines tuned to feel like yours.",
      "services.contact.title": "Get in touch",
      "services.contact.text": "Want something built? Ping me on <a class=\"link\" href=\"https://t.me/kxstxn\">Telegram</a>.",

      "tools.title": "Tools",
      "tools.lead": "Small tools that run right here on the site.",
      "tools.empty.title": "Nothing here yet",
      "tools.empty.text": "Mini-projects will show up here later.",

      "projects.title": "Projects",
      "projects.lead": "So far, just this.",
      "projects.site.text": "This site — personal page with a terminal intro and a starfield background.",

      "about.handle": "@kxstxn · developer",
      "about.status": "sites & Python scripts",
      "about.bio": "I make websites and write Python scripts. Mostly small things: pages, helpers, automation for myself and others. If something can be done with a script — I usually try that first.",
      "about.meta.1": "HTML / CSS / JS",
      "about.meta.2": "Python",
      "about.meta.3": "Linux",
      "about.meta.4": "kostin.space",
      "about.stat.web": "websites",
      "about.stat.bots": "Python scripts",
      "about.stat.ops": "daily driver",
      "about.stack": "What I use",
      "about.focus": "What I do",
      "about.focus.1": "Simple websites and landing pages",
      "about.focus.2": "Python scripts for boring tasks",
      "about.focus.3": "Small Telegram bots when needed",
      "about.focus.4": "Fixing things that broke",
      "about.how": "Basically",
      "about.how.text": "I like clear code and short feedback loops. Not chasing perfect architecture — just something that works and isn't painful to open later.",
      "about.ask": "Contact",
      "about.contact.text": "Write on <a class=\"link\" href=\"https://t.me/kxstxn\">Telegram</a> or check <a class=\"link\" href=\"https://github.com/kxstxn\">GitHub</a>.",

      "index.1": "[+] Initializing onion routing circuit...",
      "index.2": "[+] Establishing connection to entry node: 176.10.104.240 (Switzerland)",
      "index.3": "[+] Routing encrypted tunnel via middle node: 185.220.101.5 (Germany)",
      "index.4": "[+] Opening exit node: 109.70.100.34 (Austria)",
      "index.5": "[+] Handshake complete. Connection encrypted via AES-256-GCM.",
      "index.6": "[+] Resolving hidden service directory... SUCCESS.",
      "index.7": "[!] WARNING: Destination node requires end-to-end payload decryption.",
      "index.8": "[*] PRESS ANY KEY TO CONTINUE :3",

      "title.services": "Services — kxstxn",
      "title.tools": "Tools — kxstxn",
      "title.projects": "Projects — kxstxn",
      "title.about": "About — kxstxn",
      "title.welcome": "Welcome",
      "title.main": "kxstxn :3",
    },

    ru: {
      "nav.home": "Главная",
      "nav.services": "Услуги",
      "nav.tools": "Инструменты",
      "nav.projects": "Проекты",
      "nav.about": "Обо мне",

      "main.tagline": "Ctrl+C, Ctrl+V — и дальше магия.",
      "main.telegram": "Telegram",
      "main.github": "Github",

      "services.title": "Услуги",
      "services.lead": "То, что я собираю, чиню и довожу до релиза. Ctrl+C, Ctrl+V — и дальше магия.",
      "services.web.title": "Веб-разработка",
      "services.web.text": "Лендинги, личные сайты и небольшие веб-приложения — чистая вёрстка, тёмный UI, без жира.",
      "services.auto.title": "Автоматизация и скрипты",
      "services.auto.text": "CLI-утилиты, боты и связующий код, который убирает рутину из дня.",
      "services.bots.title": "Telegram-боты",
      "services.bots.text": "Кастомные боты для уведомлений, воркфлоу или маленьких продуктов там, где ты уже сидишь в чате.",
      "services.debug.title": "Дебаг и спасение",
      "services.debug.text": "Сломанный деплой, странный баг, недоделанная фича — разберусь и верну в рабочее состояние.",
      "services.linux.title": "Linux / Omarchy setup",
      "services.linux.text": "Окружения рабочего стола, конфиги и машины разработчика, настроенные под тебя.",
      "services.contact.title": "Связаться",
      "services.contact.text": "Нужно что-то собрать? Напиши в <a class=\"link\" href=\"https://t.me/kxstxn\">Telegram</a>.",

      "tools.title": "Инструменты",
      "tools.lead": "Маленькие тулы, которые работают прямо на сайте.",
      "tools.empty.title": "Пока пусто",
      "tools.empty.text": "Позже здесь появятся мини-проекты.",

      "projects.title": "Проекты",
      "projects.lead": "Пока только это.",
      "projects.site.text": "Этот сайт — личная страница с терминальным интро и звёздным фоном.",

      "about.handle": "@kxstxn · разработчик",
      "about.status": "сайты и скрипты на Python",
      "about.bio": "Делаю сайты и пишу скрипты на Python. В основном мелочь: страницы, хелперы, автоматизация для себя и других. Если задачу можно закрыть скриптом — обычно начинаю с этого.",
      "about.meta.1": "HTML / CSS / JS",
      "about.meta.2": "Python",
      "about.meta.3": "Linux",
      "about.meta.4": "kostin.space",
      "about.stat.web": "сайты",
      "about.stat.bots": "скрипты на Python",
      "about.stat.ops": "каждый день",
      "about.stack": "Чем пользуюсь",
      "about.focus": "Чем занимаюсь",
      "about.focus.1": "Простые сайты и лендинги",
      "about.focus.2": "Python-скрипты для скучных задач",
      "about.focus.3": "Небольшие Telegram-боты, если надо",
      "about.focus.4": "Чиню то, что сломалось",
      "about.how": "Коротко",
      "about.how.text": "Люблю понятный код и быстрый фидбек. Не гонюсь за идеальной архитектурой — просто чтобы работало и не было стыдно открыть через месяц.",
      "about.ask": "Связь",
      "about.contact.text": "Пиши в <a class=\"link\" href=\"https://t.me/kxstxn\">Telegram</a> или смотри <a class=\"link\" href=\"https://github.com/kxstxn\">GitHub</a>.",

      "index.1": "[+] Инициализация onion-маршрута...",
      "index.2": "[+] Подключение к entry node: 176.10.104.240 (Швейцария)",
      "index.3": "[+] Шифрованный туннель через middle node: 185.220.101.5 (Германия)",
      "index.4": "[+] Открытие exit node: 109.70.100.34 (Австрия)",
      "index.5": "[+] Handshake завершён. Соединение зашифровано AES-256-GCM.",
      "index.6": "[+] Резолв скрытого сервиса... SUCCESS.",
      "index.7": "[!] WARNING: узел назначения требует end-to-end расшифровки payload.",
      "index.8": "[*] НАЖМИ ЛЮБУЮ КЛАВИШУ, ЧТОБЫ ПРОДОЛЖИТЬ :3",

      "title.services": "Услуги — kxstxn",
      "title.tools": "Инструменты — kxstxn",
      "title.projects": "Проекты — kxstxn",
      "title.about": "Обо мне — kxstxn",
      "title.welcome": "Добро пожаловать",
      "title.main": "kxstxn :3",
    },
  };

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ru") return saved;
    const nav = (navigator.language || "en").toLowerCase();
    return nav.startsWith("ru") ? "ru" : "en";
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (value == null) return;
      el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const value = dict[key];
      if (value == null) return;
      el.innerHTML = value;
    });

    const titleKey = document.body.getAttribute("data-i18n-title");
    if (titleKey && dict[titleKey]) {
      document.title = dict[titleKey];
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
  }

  function init() {
    const lang = detectLang();
    applyTranslations(lang);

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
