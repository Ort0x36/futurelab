// Verificar se os cookies já foram aceitos
document.addEventListener("DOMContentLoaded", function () {
    const cookiePopup = document.getElementById("cookiePopup");
    const acceptCookiesButton = document.getElementById("acceptCookies");
  
    // Mostrar popup apenas se não estiver aceito
    if (!localStorage.getItem("cookiesAccepted")) {
      cookiePopup.classList.add("active");
    }
  
    // Evento para aceitar cookies
    acceptCookiesButton.addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true");
      cookiePopup.classList.remove("active");
    });
  });
  