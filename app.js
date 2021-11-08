const form = document.getElementById("form");
const fName = document.querySelector(".firstName");
const lName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearError();
  checkInputs();
});

function clearError() {
  const allForms = document.querySelectorAll(".form-control");
  allForms.forEach(function (form) {
    if (form.classList.contains("error")) {
      form.classList.remove("error");
    }
  });
}

function checkInputs() {
  const fNameValue = fName.value.trim();
  const lNameValue = lName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (fNameValue === "") {
    setError(fName);
  }
  if (lNameValue === "") {
    setError(lName);
  }

  if (emailValue === "" || !validateEmail(emailValue)) {
    setError(email);
  }

  if (passwordValue === "") {
    setError(password);
  }
}

function setError(input) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
}

function removeError(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
