import "./style.css";
import Animal from "./animal";
import Trainer from "./trainer";
import {sampleTrainers, sampleAnimals} from "./sample-data";

// Create "database" global variables
const animalDatabase = [];
const trainerDatabase = [];
// Create map with filtering options
const filters = new Map();

function generateFilters(){
  filters.set("Species", ["Dog", "Cat", "Miniature Horse"]);
  filters.set("Training", ["Certified Service Animal", "Emotional Support Animal"]);
  filters.set("Age", ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
  filters.set("Gender", ["Male", "Female"]);
}
generateFilters();

// Filter data
function filterAnimals(query) {
  const filteredArray = animalDatabase.filter(animal => {
    const result = [];
    filters.forEach((value, key) => {
      const lowerKey = key.toLowerCase();
      if (animal[lowerKey] && animal[lowerKey] === query[lowerKey]) {
        result.push(true);
      } else {
        result.push(false);
      }
    });
    return result.every(value => value);
  });
  
  return filteredArray;
}

// Bind all filter functions to refresh the page on change
function bindFilters() {
  const filterDropdowns = document.querySelectorAll("#filter-bar select");
  filterDropdowns.forEach(dropdown => {
    dropdown.addEventListener("change", (e) => {
      const query = {};
      
      filters.forEach((value, key) => {
        const lowerKey = key.toLowerCase();
        query[lowerKey] = e.target.form[lowerKey].value;
      });

      renderAnimalList(filterAnimals(query));
    });
  });
}

function generateSampleData() {
  sampleTrainers.forEach(trainer => {
    const newTrainer = new Trainer(trainer);
    trainerDatabase.push(newTrainer);
  });

  sampleAnimals.forEach(animal => {
    const newAnimal = new Animal(animal);
    animalDatabase.push(newAnimal);
  });
}

// Render functions
function renderPage() {
  const body = document.querySelector("body");

  // Create elements
  const navBar = generateNavBar(true);
  const footer = generateFooter();

  // Create wrapper element
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "wrapper");

  body.append(navBar, wrapper, footer);
}

function generateNavBar(hasFilterBar) {
  const topBarWrapper = document.createElement("div");
  topBarWrapper.setAttribute("id", "top-bar");

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

  let filterBar;

  if (hasFilterBar) {
    filterBar = generateFilterBar();
  } else {
    filterBar = document.createElement("div");
    filterBar.setAttribute("id", "filter-bar");
    
    const returnButton = document.createElement("button");
    returnButton.textContent = "Back to results";

    filterBar.append(returnButton);
  }
  
  topBarWrapper.append(menuWrapper, filterBar);

  return topBarWrapper;
}

function generateFilterBar() {
  const filterBar = document.createElement("form");
  filterBar.setAttribute("id", "filter-bar");

  filters.forEach((options, filter) => {
    const container = document.createElement("div");
    container.setAttribute("class", "filter-container");

    const label = document.createElement("label");
    label.setAttribute("for", filter.toLowerCase());
    label.textContent = filter;

    const filterDropdown = document.createElement("select");
    filterDropdown.setAttribute("id", filter.toLowerCase());

    options.forEach(option => {
      const optionElement = document.createElement("option");
      optionElement.textContent = option;
      filterDropdown.append(optionElement);
    });
    
    container.append(label, filterDropdown);
    filterBar.append(container);
  });

  return filterBar;
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

function renderAnimalList(animalArray){
  const wrapper = document.querySelector("#wrapper");

  // Clear wrapper
  while(wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }

  let animalContainer;

  if (animalArray.length > 0) {
    animalContainer = buildAnimalContainer(animalArray);
  } else {
    animalContainer = document.createElement("h2");
    animalContainer.setAttribute("class", "no-results");
    animalContainer.textContent = "No animals match your search criteria. Try broadening your search!";
  }

  const trainerHeader = document.createElement("h2");
  trainerHeader.textContent = "Featured Trainers";
  const trainerContainer = buildTrainerContainer(sampleTrainers);

  wrapper.append(animalContainer, trainerHeader, trainerContainer);
  bindAnimalCards();
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
    animalCard.dataset.animalId = animal.id;

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

function bindAnimalCards() {
  const animalCards = document.querySelectorAll(".animal-card");
  console.log(animalCards);
  animalCards.forEach(card => {
    card.addEventListener("click", (e) => {
      console.log(e.currentTarget.dataset.animalId);
    });
  });
}

// Initial functions
generateSampleData();
renderPage();
renderAnimalList(animalDatabase);
bindFilters();