export const loadingPage  = function() {
  setTimeout(() => {
    document.getElementById("loading-page").classList.remove("active");
  }, 2000);
}

