/* =========================================================
   Math Wrench — JavaScript
   Language + theme + mobile navigation
   ========================================================= */

const translations = {
  fa: {
    brand: "آچار ریاضی",
    navStart: "بزن بریم!",
    navInstall: "نصب",
    navDocs: "مستندات",
    navAbout: "درباره ما",
    navDevelopers: "برای توسعه‌دهندگان",

    badge: "یک جعبه‌ابزار برای ریاضی",
    heroTitle: 'از ریاضی نترس! <span>آچارش تو دستته!</span>',
    heroText: "آچار ریاضی یک محیط تعاملی برای یادگیری ریاضی است؛ جایی برای آموزش، بازی، تمرین و کشف مفاهیم در فصل‌های مختلف.",
    startButton: 'بزن بریم! <span class="button-arrow">←</span>',
    installButton: "نصب",
    heroNote: "از یک مفهوم شروع کن؛ بقیه‌اش را با هم کشف می‌کنیم.",

    floatGeometry: "هندسه",
    floatExplore: "کشف کن",
    floatNumbers: "اعداد",
    floatPractice: "تمرین کن",
    floatGames: "بازی",
    floatLearn: "یاد بگیر",

    sectionKicker: "داخل آچار",
    sectionTitle: "هر فصل، یک ابزار تازه",
    sectionText: "آچار ریاضی قرار است فقط جواب ندهد؛ کمک کند مفهوم را ببینی، امتحانش کنی و یاد بگیری.",

    toolGeometry: "هندسه",
    toolGeometryText: "شکل‌ها، زاویه‌ها، مختصات و آزمایش‌های تعاملی.",
    toolIntegers: "اعداد صحیح",
    toolIntegersText: "محور اعداد، عملیات و تمرین‌های قابل لمس.",
    toolPrimes: "اعداد اول",
    toolPrimesText: "کشف الگوها، بازی و تمرین برای اعداد اول.",
    toolAlgebra: "جبر",
    toolAlgebraText: "عبارت‌ها و معادله‌ها را مرحله‌به‌مرحله تجربه کن.",
    coming: "به‌زودی",

    installKicker: "نصب",
    installTitle: "آچار ریاضی را همراه خودت داشته باش.",
    installText: "این بخش بعداً با لینک نسخه‌های قابل دریافت و راهنمای نصب تکمیل می‌شود.",

    docsKicker: "مستندات",
    docsTitle: "چطور کار می‌کند؟",
    docsText: "راهنمای استفاده، معرفی ابزارها و توضیحات آموزشی پروژه در این قسمت قرار خواهد گرفت.",

    aboutKicker: "درباره ما",
    aboutTitle: "یادگیری ریاضی می‌تواند یک تجربه باشد.",
    aboutText: "آچار ریاضی با هدف ساختن یک محیط آموزشی جامع، تعاملی و متفاوت برای یادگیری ریاضی ساخته می‌شود.",

    devKicker: "برای توسعه‌دهندگان",
    devTitle: "ساده، باز و قابل توسعه.",
    devText: "نسخه وب پروژه با HTML، CSS و JavaScript ساخته شده و برای انتشار روی GitHub Pages آماده است.",

    footerText: "ریاضی، با یک نگاه متفاوت."
  },

  en: {
    brand: "Math Wrench",
    navStart: "Let's Go!",
    navInstall: "Install",
    navDocs: "Documentation",
    navAbout: "About Us",
    navDevelopers: "For Developers",

    badge: "A toolbox for mathematics",
    heroTitle: 'Don’t be afraid of math! <span>You’ve got the tools to solve it!</span>',
    heroText: "Math Wrench is an interactive environment for learning mathematics through lessons, games, practice, and discovery across different chapters.",
    startButton: 'Let’s Go! <span class="button-arrow">→</span>',
    installButton: "Install",
    heroNote: "Start with one concept; discover the rest along the way.",

    floatGeometry: "Geometry",
    floatExplore: "Explore",
    floatNumbers: "Numbers",
    floatPractice: "Practice",
    floatGames: "Games",
    floatLearn: "Learn",

    sectionKicker: "Inside the wrench",
    sectionTitle: "A new tool for every chapter",
    sectionText: "Math Wrench is not just about getting answers; it helps you see, test, and understand mathematical ideas.",

    toolGeometry: "Geometry",
    toolGeometryText: "Shapes, angles, coordinates, and interactive experiments.",
    toolIntegers: "Integers",
    toolIntegersText: "Number lines, operations, and hands-on practice.",
    toolPrimes: "Prime Numbers",
    toolPrimesText: "Patterns, games, and practice with prime numbers.",
    toolAlgebra: "Algebra",
    toolAlgebraText: "Experience expressions and equations step by step.",
    coming: "Coming soon",

    installKicker: "Install",
    installTitle: "Take Math Wrench with you.",
    installText: "This section will later contain downloadable versions and installation instructions.",

    docsKicker: "Documentation",
    docsTitle: "How does it work?",
    docsText: "Usage guides, tool introductions, and educational documentation will live here.",

    aboutKicker: "About us",
    aboutTitle: "Learning mathematics can be an experience.",
    aboutText: "Math Wrench is being built as a comprehensive, interactive, and different environment for learning mathematics.",

    devKicker: "For developers",
    devTitle: "Simple, open, and extensible.",
    devText: "The web version is built with HTML, CSS, and JavaScript and is ready for GitHub Pages.",

    footerText: "Mathematics, seen differently."
  },

  ar: {
    brand: "مفتاح الرياضيات",
    navStart: "هيا بنا!",
    navInstall: "التثبيت",
    navDocs: "التوثيق",
    navAbout: "من نحن",
    navDevelopers: "للمطورين",

    badge: "صندوق أدوات للرياضيات",
    heroTitle: 'لا تخف من الرياضيات! <span>أدوات حلّها في يدك!<span>',
    heroText: "مفتاح الرياضيات بيئة تفاعلية لتعلّم الرياضيات من خلال الشرح والألعاب والتدريب واكتشاف المفاهيم في فصول مختلفة.",
    startButton: 'هيا بنا! <span class="button-arrow">←</span>',
    installButton: "التثبيت",
    heroNote: "ابدأ بمفهوم واحد؛ واكتشف الباقي معنا.",

    floatGeometry: "الهندسة",
    floatExplore: "اكتشف",
    floatNumbers: "الأعداد",
    floatPractice: "تدرّب",
    floatGames: "الألعاب",
    floatLearn: "تعلّم",

    sectionKicker: "داخل المفتاح",
    sectionTitle: "أداة جديدة لكل فصل",
    sectionText: "مفتاح الرياضيات لا يكتفي بإعطاء الإجابة؛ بل يساعدك على رؤية الفكرة وتجربتها وفهمها.",

    toolGeometry: "الهندسة",
    toolGeometryText: "الأشكال والزوايا والإحداثيات والتجارب التفاعلية.",
    toolIntegers: "الأعداد الصحيحة",
    toolIntegersText: "خط الأعداد والعمليات والتدريبات التفاعلية.",
    toolPrimes: "الأعداد الأولية",
    toolPrimesText: "اكتشف الأنماط والعب وتدرّب على الأعداد الأولية.",
    toolAlgebra: "الجبر",
    toolAlgebraText: "تعلّم العبارات والمعادلات خطوة بخطوة.",
    coming: "قريبًا",

    installKicker: "التثبيت",
    installTitle: "خذ مفتاح الرياضيات معك.",
    installText: "سيحتوي هذا القسم لاحقًا على إصدارات قابلة للتنزيل ودليل التثبيت.",

    docsKicker: "التوثيق",
    docsTitle: "كيف يعمل؟",
    docsText: "سيضم هذا القسم دليل الاستخدام والتعريف بالأدوات والشرح التعليمي للمشروع.",

    aboutKicker: "من نحن",
    aboutTitle: "يمكن أن يكون تعلّم الرياضيات تجربة.",
    aboutText: "يُبنى مفتاح الرياضيات كبيئة شاملة وتفاعلية ومختلفة لتعلّم الرياضيات.",

    devKicker: "للمطورين",
    devTitle: "بسيط، مفتوح، وقابل للتطوير.",
    devText: "تم بناء نسخة الويب باستخدام HTML وCSS وJavaScript وهي جاهزة للنشر عبر GitHub Pages.",

    footerText: "الرياضيات، بنظرة مختلفة."
  },

  fr: {
    brand: "Math Wrench",
    navStart: "C'est parti !",
    navInstall: "Installation",
    navDocs: "Documentation",
    navAbout: "À propos",
    navDevelopers: "Pour les développeurs",

    badge: "Une boîte à outils pour les maths",
    heroTitle: 'N’aie pas peur des maths! <span>Tu as les outils pour les résoudre!</span>',
    heroText: "Math Wrench est un environnement interactif pour apprendre les mathématiques grâce aux leçons, aux jeux, aux exercices et à la découverte.",
    startButton: 'C’est parti ! <span class="button-arrow">→</span>',
    installButton: "Installer",
    heroNote: "Commencez par un concept ; découvrons le reste ensemble.",

    floatGeometry: "Géométrie",
    floatExplore: "Explorer",
    floatNumbers: "Nombres",
    floatPractice: "S'entraîner",
    floatGames: "Jeux",
    floatLearn: "Apprendre",

    sectionKicker: "Dans la clé",
    sectionTitle: "Un nouvel outil pour chaque chapitre",
    sectionText: "Math Wrench ne se contente pas de donner des réponses : il aide à voir, tester et comprendre les idées mathématiques.",

    toolGeometry: "Géométrie",
    toolGeometryText: "Figures, angles, coordonnées et expériences interactives.",
    toolIntegers: "Entiers",
    toolIntegersText: "Droite graduée, opérations et exercices interactifs.",
    toolPrimes: "Nombres premiers",
    toolPrimesText: "Motifs, jeux et exercices autour des nombres premiers.",
    toolAlgebra: "Algèbre",
    toolAlgebraText: "Découvrez les expressions et les équations étape par étape.",
    coming: "Bientôt",

    installKicker: "Installation",
    installTitle: "Emportez Math Wrench avec vous.",
    installText: "Cette section contiendra plus tard les versions téléchargeables et le guide d’installation.",

    docsKicker: "Documentation",
    docsTitle: "Comment ça marche ?",
    docsText: "Les guides d’utilisation, la présentation des outils et la documentation pédagogique seront disponibles ici.",

    aboutKicker: "À propos",
    aboutTitle: "Apprendre les mathématiques peut devenir une expérience.",
    aboutText: "Math Wrench est conçu comme un environnement complet, interactif et différent pour apprendre les mathématiques.",

    devKicker: "Pour les développeurs",
    devTitle: "Simple, ouvert et extensible.",
    devText: "La version web est construite avec HTML, CSS et JavaScript et est prête pour GitHub Pages.",

    footerText: "Les mathématiques, autrement."
  }
};

const languageSelect = document.getElementById("languageSelect");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const mobileToggle = document.getElementById("mobileToggle");
const navPanel = document.getElementById("navPanel");

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.fa;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" || lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) {
      element.innerHTML = dictionary[key];
    }
  });

  languageSelect.value = lang;
  localStorage.setItem("mathWrenchLanguage", lang);

  const titles = {
    fa: "آچار ریاضی",
    en: "Math Wrench",
    ar: "مفتاح الرياضيات",
    fr: "Math Wrench"
  };
  document.title = titles[lang] || titles.fa;
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isLight = theme === "light";

  themeIcon.textContent = isLight ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "فعال کردن حالت تاریک" : "فعال کردن حالت روشن"
  );

  localStorage.setItem("mathWrenchTheme", theme);
}

function closeMobileMenu() {
  navPanel.classList.remove("open");
  mobileToggle.setAttribute("aria-expanded", "false");
}

languageSelect.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme || "dark";
  applyTheme(current === "dark" ? "light" : "dark");
});

mobileToggle.addEventListener("click", () => {
  const open = navPanel.classList.toggle("open");
  mobileToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeMobileMenu();
  }
});

/* Initial state */
const savedLanguage = localStorage.getItem("mathWrenchLanguage") || "fa";
const savedTheme = localStorage.getItem("mathWrenchTheme") || "dark";

applyLanguage(savedLanguage);
applyTheme(savedTheme);
