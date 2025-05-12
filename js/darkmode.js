document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("darkmode-toggle");
  const logo = document.getElementById("logo");

  if (localStorage.getItem("mode") === "light") {
    document.body.classList.add("light-mode");
    toggleButton.textcontent = "Darkmode"
  }
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const islight = document.body.classList
      .contains("light-mode");
    toggleButton.textContent = islight ? "Darkmode" : "Lightmode";
    localStorage.setItem("mode", islight ? "light" : "dark");
    logo.src = islight ? "Bilder/Logo_4.png" : "Bilder/Logo_Darkmode.png";

  });



  // Klickbarer Schriftzug (Beispiel: Impressum)
  const impressumLink = document.getElementById("impressum-link");

  if (impressumLink) {
    impressumLink.addEventListener("click", () => {
      alert("Hier könnte das Impressum angezeigt oder eine Seite geöffnet werden.");
      // Alternativ: window.location.href = 'impressum.html';
    });
  }
});