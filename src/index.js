import "./style.css";
import Animal from "./animal";
import Trainer from "./trainer";
import Owner from "./owner";

// Create "database" global variables
const animalDatabase = [];
const trainerDatabase = [];
const ownerDatabase = [];

function initializePage() {
  const body = document.querySelector("body");

  // Create menu bar
  const navBar = generateNavBar();

  // Create wrapper element
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "wrapper");

  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to PupAbility!";

  wrapper.append(h1);

  body.append(navBar, wrapper);
  updateDisplay();
}

function generateNavBar() {
  const menuWrapper = document.createElement("div");
  menuWrapper.setAttribute("id", "nav-bar");

  const logo = document.createElement("div");
  logo.setAttribute("id", "logo");
  logo.textContent = "PupAbility";

  const menu = document.createElement("ul");
  menu.setAttribute("id", "nav-menu");

  const menuList = ["Browse Animals", "Upload an Animal"];

  menuList.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.textContent = item;

    li.append(a);
    menu.append(li);
  });

  menuWrapper.append(logo, menu);


  return menuWrapper;
}

function updateDisplay(query){
  const body = document.querySelector("body");
  trainerDatabase.forEach(trainer => {
    const trainerDiv = document.createElement("div");
    const trainerName = document.createElement("h2");
    trainerName.textContent = trainer.name;
    const trainerLocation = document.createElement("h3");
    trainerLocation.textContent = trainer.location;

    trainerDiv.append(trainerName, trainerLocation);

    body.append(trainerDiv);
  });
}

// Generate sample data
function generateSampleData() {
  
  const sampleTrainers = [
    {
      name: "Elite Dog Trainers",
      location: "Scottsdale, Arizona",
    },
    {
      name: "Lisa Smith",
      location: "Flagstaff, Arizona"
    },
    {
      name: "Happy Pups Trainers",
      location: "Phoenix, Arizona"
    },
    {
      name: "Martin Hernandez",
      location: "Mesa, Arizona"
    }
  ];
  
  const sampleAnimals = [
    {
      name: "Fido",
      breed: "Terrier",
  
    },
    {
      name: "Bear",
      breed: "Poodle"
    }
  ];





  sampleTrainers.forEach(trainer => {
    const newTrainer = new Trainer(trainer);
    trainerDatabase.push(newTrainer);
  });
}

// Initial functions
generateSampleData();
initializePage();