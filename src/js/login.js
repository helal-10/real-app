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
formValidation();
