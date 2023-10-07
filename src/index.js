import "./style.css";
import Animal from "./animal";
import Trainer from "./trainer";
import Owner from "./owner";

// Create "database" global variables
const animalDatabase = [];
const trainerDatabase = [];
const ownerDatabase = [];

// Generate sample data
const sampleTrainers = [
  {
    name: "Elite Dog Trainers",
    location: "Scottsdale, Arizona",
    imageUrl: "https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg",
  },
  {
    name: "Lisa Smith",
    location: "Flagstaff, Arizona",
    imageUrl: "https://images.pexels.com/photos/7210458/pexels-photo-7210458.jpeg",
  },
  {
    name: "Happy Pups Trainers",
    location: "Phoenix, Arizona",
    imageUrl: "https://images.pexels.com/photos/9632843/pexels-photo-9632843.jpeg",
  },
  {
    name: "Martin Hernandez",
    location: "Mesa, Arizona",
    imageUrl: "https://images.pexels.com/photos/7210267/pexels-photo-7210267.jpeg",
  }
];

const sampleAnimals = [
  {
    species: "Dog",
    name: "Fido",
    breed: "Terrier",
    age: 4,
    training: "Certified Service Animal",
    tags: ["Good with kids", "Spayed/neutered", "Enjoys other pets", "Calm", "Hearing support", "Mobility support"],
    imageUrl: "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg",
  },
  {
    species: "Dog",
    name: "Bear",
    breed: "Poodle",
    age: 2,
    training: "Emotional Support Animal",
    tags: ["Friendly", "Spayed/neutered", "Anxiety support", "PTSD support"],
    imageUrl: "https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg",
  },

  {
    species: "Dog",
    name: "Fido",
    breed: "Terrier",
    age: 4,
    training: "Certified Service Animal",
    tags: ["Good with kids", "Spayed/neutered", "Enjoys other pets", "Calm", "Hearing support", "Mobility support"],
    imageUrl: "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg",
  },
  {
    species: "Dog",
    name: "Fido",
    breed: "Terrier",
    age: 4,
    training: "Certified Service Animal",
    tags: ["Good with kids", "Spayed/neutered", "Enjoys other pets", "Calm", "Hearing support", "Mobility support"],
    imageUrl: "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg",
  },
  {
    species: "Dog",
    name: "Bear",
    breed: "Poodle",
    age: 2,
    training: "Emotional Support Animal",
    tags: ["Friendly", "Spayed/neutered", "Anxiety support", "PTSD support"],
    imageUrl: "https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg",
  },

  {
    species: "Dog",
    name: "Fido",
    breed: "Terrier",
    age: 4,
    training: "Certified Service Animal",
    tags: ["Good with kids", "Spayed/neutered", "Enjoys other pets", "Calm", "Hearing support", "Mobility support"],
    imageUrl: "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg",
  },
];

function generateSampleData() {
  sampleTrainers.forEach(trainer => {
    const newTrainer = new Trainer(trainer);
    trainerDatabase.push(newTrainer);
  });
}

// Render functions
function initializePage() {
  const body = document.querySelector("body");

  // Create elements
  const navBar = generateNavBar();
  const footer = generateFooter();

  // Create wrapper element
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "wrapper");

  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to PupAbility!";

  wrapper.append(h1);

  body.append(navBar, wrapper, footer);
}

function generateNavBar() {
  const menuWrapper = document.createElement("div");
  menuWrapper.setAttribute("id", "nav-bar");

  const logo = document.createElement("div");
  logo.setAttribute("class", "logo");
  logo.textContent = "PupAbility";

  const menu = document.createElement("ul");
  menu.setAttribute("class", "nav-menu");

  const menuList = ["Browse Animals", "List an Animal"];

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

function generateFooter() {
  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");

  const logo = document.createElement("div");
  logo.setAttribute("class", "logo");
  logo.textContent = "PupAbility";

  const menu = document.createElement("ul");
  menu.setAttribute("class", "menu");

  const menuList = ["Browse Animals", "List an Animal"];

  menuList.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.textContent = item;

    li.append(a);
    menu.append(li);
  });

  footer.append(logo, menu);

  return footer;
}

function updateDisplay(){
  const wrapper = document.querySelector("#wrapper");

  const animalContainer = buildAnimalContainer(sampleAnimals);

  const trainerHeader = document.createElement("h2");
  trainerHeader.textContent = "Featured Trainers";
  const trainerContainer = buildTrainerContainer(sampleTrainers);

  wrapper.append(animalContainer, trainerHeader, trainerContainer);
}

function buildTrainerContainer(array) {
  const container = document.createElement("div");
  container.setAttribute("class", "trainer-container");

  array.forEach(trainer => {
    const trainerCard = document.createElement("div");
    trainerCard.setAttribute("class", "trainer-card");

    const trainerPhoto = document.createElement("div");
    trainerPhoto.setAttribute("class", "photo");
    trainerPhoto.style.backgroundImage = `url(${trainer.imageUrl})`;

    const trainerName = document.createElement("h2");
    trainerName.textContent = trainer.name;
    const trainerLocation = document.createElement("h3");
    trainerLocation.textContent = trainer.location;

    trainerCard.append(trainerPhoto, trainerName, trainerLocation);
    container.append(trainerCard);
  });

  return container;
}

function buildAnimalContainer(array) {
  const container = document.createElement("div");
  container.setAttribute("class", "animal-container");

  array.forEach(animal => {
    const animalCard = document.createElement("div");
    animalCard.setAttribute("class", "animal-card");

    const photo = document.createElement("div");
    photo.setAttribute("class", "photo");
    photo.style.backgroundImage = `url(${animal.imageUrl})`;

    const detailsBox = document.createElement("div");
    detailsBox.setAttribute("class", "details-box");
    
    const name = document.createElement("h2");
    name.textContent = animal.name;

    const training = document.createElement("h3");
    training.setAttribute("class", "training");
    training.textContent = animal.training;

    const summary = document.createElement("p");
    summary.setAttribute("class", "summary-box");

    // Specify breed if available, otherwise leave it blank
    let species;
    if (animal.breed !== null) {
      species = `${animal.species} (${animal.breed})`;
    } else {
      species = animal.species;
    }

    summary.textContent = `${species} | ${animal.age} years old`;

    const tagCloud = document.createElement("div");
    tagCloud.setAttribute("class", "tag-cloud");
    
    animal.tags.forEach(tag => {
      const tagDiv = document.createElement("div");
      tagDiv.setAttribute("class", "tag");
      tagDiv.textContent = tag;
      tagCloud.append(tagDiv);
    });

    detailsBox.append(name, training, summary, tagCloud)

    animalCard.append(photo, detailsBox);
    container.append(animalCard);
  });

  return container;
}

// Initial functions
generateSampleData();
initializePage();
updateDisplay();