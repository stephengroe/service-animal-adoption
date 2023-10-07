import "./style.css";

function initializePage() {
  const body = document.querySelector("body");
  const h1 = document.createElement("h1");

  h1.textContent = "Welcome to PupAbility!";

  body.append(h1);
}

initializePage();