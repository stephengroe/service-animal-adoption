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
  const h1 = document.createElement("h1");

  h1.textContent = "Welcome to PupAbility!";

  body.append(h1);
  updateDisplay();
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
