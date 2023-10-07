import "./style.css";
import Animal from "./animal";
import Trainer from "./trainer";
import Owner from "./owner";

function initializePage() {
  const body = document.querySelector("body");
  const h1 = document.createElement("h1");

  h1.textContent = "Welcome to PupAbility!";

  body.append(h1);
}

initializePage();