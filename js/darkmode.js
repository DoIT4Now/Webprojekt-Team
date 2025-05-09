document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("darkmode-toggle");
  
    // Prüfen, ob ein Modus gespeichert ist
    const darkModeSetting = localStorage.getItem("dark-mode");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  
    if (darkModeSetting === "true" || (darkModeSetting === null && prefersDark)) {
      document.body.classList.add("dark-mode");
    }
  
    // Button-Klick: Modus umschalten
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  
      // Modus speichern
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("dark-mode", isDark);
    });
  });
  