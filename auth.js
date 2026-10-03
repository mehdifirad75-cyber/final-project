document.querySelectorAll("[data-auth-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = form.querySelector('[name="password"]');
    const confirmation = form.querySelector('[name="confirm"]');
    const status = form.querySelector(".auth-status");

    if (confirmation && password.value !== confirmation.value) {
      confirmation.setCustomValidity("Passwords must match.");
      confirmation.reportValidity();
      confirmation.setCustomValidity("");
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const isSignup = form.dataset.authForm === "signup";

    status.textContent = isSignup
      ? "Account created successfully. Demo only: your details were not saved."
      : "Logged in successfully. Demo only: your details were not saved.";
    submitButton.textContent = "Success";
    submitButton.disabled = true;
  });
});