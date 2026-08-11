// Light/dark theme toggle. The critical "apply stored theme" step runs
// synchronously in an inline <script> at the top of <head> to avoid a
// flash of the wrong theme; this file only wires up the toggle button.
(function () {
  const STORAGE_KEY = "portfolio-theme";
  const THEME_COLOR = { light: "#faf8ff", dark: "#120c22" };
  const root = document.documentElement;

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function applyMetaThemeColor(theme) {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLOR[theme]);
  }

  function setTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem(STORAGE_KEY, theme);
    applyMetaThemeColor(theme);

    const toggle = document.getElementById("themeToggle");
    if (toggle) toggle.setAttribute("aria-pressed", String(theme === "dark"));
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyMetaThemeColor(currentTheme());

    const toggle = document.getElementById("themeToggle");
    if (!toggle) return;

    toggle.setAttribute("aria-pressed", String(currentTheme() === "dark"));
    toggle.addEventListener("click", () => {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  });
})();
