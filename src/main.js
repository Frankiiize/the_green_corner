import "./scss/main.scss";

import "./components/button/index";
import "./components/header/index";
import "./components/footer/index";
import "./components/card/index";
import "./components/carousel/index";

const contactForm = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const nameVal = formData.get("userName");
    const emailVal = formData.get("email");
    const contentVal = formData.get("content");

    console.group("Form data");
    console.log("nameVal:", nameVal);
    console.log("emailVal:", emailVal);
    console.log("contentVal:", contentVal);
    console.groupEnd();
  });
};

const initialize = () => {
  const path = window.location.pathname;

  if (path === "/views/nosotros.html") {
    contactForm();
  }
};

window.addEventListener("load", () => {
  console.log("load");
  initialize();
});
