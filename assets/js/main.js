// ===============================
// CodeLingua - Main Interaction
// ===============================

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.classList.toggle('light-mode', savedTheme === 'light');
themeToggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-mode');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Language toggle
const langToggle = document.getElementById('lang-toggle');
const savedLang = localStorage.getItem('lang') || 'es';
langToggle.textContent = savedLang === 'en' ? '🇺🇸' : '🇪🇸';
document.documentElement.lang = savedLang;

// Simple text dictionary for demonstration
const dictionary = {
  es: {
    title: "Aprende Programación e Inglés",
    intro: "Bienvenido a CodeLingua, donde aprenderás idiomas y código al mismo tiempo.",
  },
  en: {
    title: "Learn Programming and English",
    intro: "Welcome to CodeLingua, where you learn languages and code together.",
  },
};

// Function to update the text dynamically
function updateLanguage(lang) {
  document.querySelector('h1').textContent = dictionary[lang].title;
  document.querySelector('.intro-text').textContent = dictionary[lang].intro;
}

// Set initial language
updateLanguage(savedLang);

// Event for language change
langToggle.addEventListener('click', () => {
  const newLang = document.documentElement.lang === 'es' ? 'en' : 'es';
  document.documentElement.lang = newLang;
  langToggle.textContent = newLang === 'en' ? '🇺🇸' : '🇪🇸';
  localStorage.setItem('lang', newLang);
  updateLanguage(newLang);
});

