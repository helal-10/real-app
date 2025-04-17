// import { getWeatherByCity } from "./fetch.js";

// async function showWeather() {
//   const weatherData = await getWeatherByCity("Sakaka");
//   console.log(weatherData);
// }

// showWeather();
document.querySelectorAll("#ul-hero ul a").forEach((element) => {
  element.addEventListener("click", () => {
    document.getElementById("burger-menu").classList.remove("active");
    document.getElementById("push-down").classList.remove("ul-active");
  });
});
function activateUlHeroSection() {
  document.getElementById("burger-menu").onclick = () => {
    document.getElementById("burger-menu").classList.toggle("active");
    document.getElementById("push-down").classList.toggle("ul-active");
  };
}
activateUlHeroSection();

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("home").classList.add("active");
  document.getElementById("login-main-mutton").classList.add("active");
});

window.addEventListener("scroll", (e) => {
  const fullWindoHeight = document.documentElement.clientHeight;
  const fullElementHeight = document.getElementById("about").clientHeight;
  const fromTopToElement = document
    .getElementById("about")
    .getBoundingClientRect().top;
  if (fullWindoHeight - fromTopToElement >= fullElementHeight * 0.5) {
    document.getElementById("about").classList.remove("disappeared");
  }
});
window.addEventListener("scroll", (e) => {
  const fullWindoHeight = document.documentElement.clientHeight;
  const fullElementHeight = document.getElementById("contact").clientHeight;
  const fromTopToElement = document
    .getElementById("contact")
    .getBoundingClientRect().top;
  if (fullWindoHeight - fromTopToElement >= fullElementHeight * 0.5) {
    document.getElementById("contact").classList.remove("disappeared");
  }
});
function loginredirect() {
  window.location.href = "login.html";
}
function formValidation() {
  const form = document.getElementById("form-register");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkVisibility()) {
      window.location.href = "index.html";
      console.log("yes");
    } else {
      form.reportValidity();
      console.log("no");
    }
  });
}
