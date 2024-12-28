function isDesktop() {
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = [
    "android", "iphone", "ipad", "ipod", "blackberry", 
    "windows phone", "opera mini", "mobile", "tablet"
  ];
  return !mobileKeywords.some(keyword => userAgent.includes(keyword));
}

document.addEventListener("DOMContentLoaded", function () {
  const cookiePopup = document.getElementById("cookiePopup");
  const acceptCookiesButton = document.getElementById("acceptCookies");
  const declineCookiesButton = document.getElementById("declineCookies");

  if (isDesktop() && !localStorage.getItem("cookiesAccepted")) {
    cookiePopup.classList.add("active");
  }

  acceptCookiesButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookiePopup.classList.remove("active");
    console.log("Cookies aceitos.");
  });

  declineCookiesButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "false");
    cookiePopup.classList.remove("active");
    console.log("Cookies recusados.");
  });

});
