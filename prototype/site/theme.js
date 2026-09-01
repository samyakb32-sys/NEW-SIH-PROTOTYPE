/* AgriConnect shared dark/light theme toggle.
   Include on every page: <script src="theme.js"></script>
   Add a button with the attribute data-theme-toggle anywhere in the page —
   it becomes a working sun/moon toggle automatically. */
(function () {
  "use strict";

  var STORAGE_KEY = "agri_theme";
  var MOON_ICON = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>';
  var SUN_ICON = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';

  function systemPrefersDark() {
    return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }

  function currentTheme() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {}
    return systemPrefersDark() ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.innerHTML = theme === "dark" ? SUN_ICON : MOON_ICON;
      var label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
      btn.setAttribute("aria-label", label);
      btn.setAttribute("title", label);
    });
  }

  function setTheme(theme) {
    if (theme !== "light" && theme !== "dark") return;
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
    applyTheme(theme);
  }

  function toggleTheme() {
    setTheme(currentTheme() === "dark" ? "light" : "dark");
  }

  function boot() {
    applyTheme(currentTheme());
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.addEventListener("click", toggleTheme);
    });
    try {
      if (window.matchMedia && !localStorage.getItem(STORAGE_KEY)) {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
          if (!localStorage.getItem(STORAGE_KEY)) applyTheme(e.matches ? "dark" : "light");
        });
      }
    } catch (e) {}
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.AgriTheme = { toggle: toggleTheme, set: setTheme, get: currentTheme };
})();
