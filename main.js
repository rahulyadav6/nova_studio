// Shared interactions for all Nova Studio pages.
document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
    links.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }));
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    const fields = {
      name: { error: "name-error", message: "Please enter at least 2 characters.", valid: value => value.trim().length >= 2 },
      email: { error: "email-error", message: "Please enter a valid email address.", valid: value => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value.trim()) },
      message: { error: "message-error", message: "Please write at least 10 characters.", valid: value => value.trim().length >= 10 }
    };
    Object.entries(fields).forEach(([id, config]) => {
      const input = document.getElementById(id);
      input.addEventListener("input", () => {
        const valid = config.valid(input.value);
        document.getElementById(config.error).textContent = valid ? "" : config.message;
        input.classList.toggle("invalid", !valid && input.value.length > 0);
      });
    });
    form.addEventListener("submit", event => {
      event.preventDefault();
      let valid = true;
      Object.entries(fields).forEach(([id, config]) => {
        const input = document.getElementById(id);
        const fieldValid = config.valid(input.value);
        document.getElementById(config.error).textContent = fieldValid ? "" : config.message;
        input.classList.toggle("invalid", !fieldValid);
        valid = valid && fieldValid;
      });
      const topic = document.getElementById("topic");
      if (!topic.value) { topic.classList.add("invalid"); valid = false; }
      else topic.classList.remove("invalid");
      const success = document.getElementById("form-success");
      if (valid) {
        success.textContent = "Thanks! Your details passed the demo validation. Connect this form to a backend or form service to receive real submissions.";
        form.reset();
        Object.values(fields).forEach(config => document.getElementById(config.error).textContent = "");
      } else {
        success.textContent = "Please check the highlighted fields and try again.";
      }
    });
  }
});