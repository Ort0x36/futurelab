// Função para detectar se é desktop
function isDesktop() {
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = [
    "android", "iphone", "ipad", "ipod", "blackberry", 
    "windows phone", "opera mini", "mobile", "tablet"
  ];
  return !mobileKeywords.some(keyword => userAgent.includes(keyword));
}

// Gerenciamento do popup de cookies
document.addEventListener("DOMContentLoaded", function () {
  const cookiePopup = document.getElementById("cookiePopup");
  const acceptCookiesButton = document.getElementById("acceptCookies");
  const declineCookiesButton = document.getElementById("declineCookies");

  // Mostrar popup apenas se for desktop e cookies não foram aceitos
  if (isDesktop() && !localStorage.getItem("cookiesAccepted")) {
    cookiePopup.classList.add("active");
  }

  // Aceitar cookies
  acceptCookiesButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookiePopup.classList.remove("active");
    console.log("Cookies aceitos.");
  });

  // Recusar cookies
  declineCookiesButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "false");
    cookiePopup.classList.remove("active");
    console.log("Cookies recusados.");
  });

});
