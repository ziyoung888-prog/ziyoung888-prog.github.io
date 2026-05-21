const topButton = document.querySelector(".to-top");
const languageToggle = document.querySelector(".language-toggle");
const savedLanguage = window.localStorage?.getItem("portfolio-language");

if (savedLanguage === "zh" || savedLanguage === "en") {
  document.body.dataset.lang = savedLanguage;
  document.documentElement.lang = savedLanguage === "zh" ? "zh-CN" : "en";
}

topButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

languageToggle?.addEventListener("click", () => {
  const nextLanguage = document.body.dataset.lang === "zh" ? "en" : "zh";
  document.body.dataset.lang = nextLanguage;
  document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
  window.localStorage?.setItem("portfolio-language", nextLanguage);
});
