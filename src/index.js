import "./style.css";
import Animal from "./animal";
import Trainer from "./trainer";
import {sampleTrainers, sampleAnimals} from "./sample-data";
import Storage from "./storage";
import tokens from "../tokens";

// Filter data
function filterAnimals(query) {
  const filteredArray = Storage.animalDatabase.filter(animal => {
    const result = [];

    Storage.filters.forEach((value, key) => {
      console.log(`value: ${value}, key: ${key}`);
      if (value === "All") return true; // For "all" value, skip the test

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
      
      Storage.filters.forEach((value, key) => {
        const lowerKey = key.toLowerCase();
        const select = Array.from(filterDropdowns).find(element => element.dataset.filter === lowerKey);
        query[lowerKey] = select.value;
      });

      Storage.query = query;
      console.log(Storage.query);
      renderAnimalList(filterAnimals(query));
    });
  });
}

// Render functions
function renderPage() {
  const body = document.querySelector("body");
  body.classList.remove("hero");

  while(body.firstChild) {
    body.removeChild(body.firstChild);
  }

  // Create elements
  const navBar = generateNavBar(true);
  const footer = generateFooter();

  // Create wrapper element
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "wrapper");

  body.append(navBar, wrapper, footer);
}

function generateNavBar() {
  const topBarWrapper = document.createElement("div");
  topBarWrapper.setAttribute("id", "top-bar");

  const menuWrapper = document.createElement("div");
  menuWrapper.setAttribute("id", "nav-bar");

  const logo = document.createElement("div");
  logo.setAttribute("class", "logo");

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
  const filterBar = generateFilterBar();

  topBarWrapper.append(menuWrapper, filterBar);

  return topBarWrapper;
}

function generateFilterBar() {
  const filterBar = document.createElement("div");
  filterBar.setAttribute("id", "filter-bar");

  const zipCode = document.createElement("div");
  zipCode.setAttribute("class", "zip-code");
  zipCode.textContent = Storage.location || "No location set";

  filterBar.append(zipCode);

  Storage.filters.forEach((options, filter) => {
    const container = document.createElement("div");
    container.setAttribute("class", "filter-container");
    const value = filter.toLowerCase();

    const label = document.createElement("label");
    label.setAttribute("for", value);
    label.textContent = filter;

    const filterDropdown = document.createElement("select");
    filterDropdown.setAttribute("id", value);
    filterDropdown.dataset.filter = value;

    options.forEach(option => {
      const optionElement = document.createElement("option");
      optionElement.textContent = option;
      filterDropdown.append(optionElement);

      if (Storage.query[value] === option) {
        optionElement.setAttribute("selected", true);
      }
    });
    
    container.append(label, filterDropdown);
    filterBar.append(container);
  });

  return filterBar;
}

// Home page display
function renderHomePage() {
  // Remove filter bar
  const filterBar = document.querySelector("#filter-bar");
  filterBar.remove();

  // Add hero wrapper
  const body = document.querySelector("body");
  body.classList.add("hero");

  const wrapper = document.querySelector("#wrapper");

  const heroContainer = document.createElement("div");
  heroContainer.setAttribute("class", "hero-container");

  // Add heading and call to action
  const heading = document.createElement("h1");
  heading.textContent = "Find your future companion";

  const subheading = document.createElement("h2");
  subheading.textContent = "Browse registered service and support animals near you";

  const cta = document.createElement("form");
  cta.setAttribute("class", "cta");

  const zipInput = document.createElement("input");
  zipInput.setAttribute("type", "number");
  zipInput.setAttribute("id", "zip-input")
  zipInput.setAttribute("placeholder", "ZIP code");

  const zipButton = document.createElement("button");
  zipButton.setAttribute("id", "zip-button");
  zipButton.textContent = "Search";

  cta.append(zipInput, zipButton);
  heroContainer.append(heading, subheading, cta);
  wrapper.append(heroContainer);
  bindZipButton();
}

let zipPending = true;

function bindZipButton() {
  const zipButton = document.querySelector("#zip-button");

  zipButton.addEventListener("click", (e) => {
    e.preventDefault();

    const zipCodeElement = document.querySelector("#zip-input");

    if (zipCodeElement.value.length !== 5) {
      zipCodeElement.classList.add("error");
      setTimeout(() => {
        zipCodeElement.classList.remove("error");
      }, "150");
    } else {
      Storage.location = "Somewhere!";
      Storage.nearZipCodes = ['85213'];
      
      renderPage();
      renderAnimalList(Storage.animalDatabase);
      bindFilters();

      // processZipCode(zipCodeElement.value).then(() => {
      //   zipPending = false; // Prevent overuse of API credits!
      //   renderPage();
      // }); 
    }
  });
}

// Get information with ZIP code API
async function processZipCode(zipCode) {
  if (zipPending) {
    getLocation(zipCode).then(response => {
      Storage.location = response;
  
      getNearbyZipCodes(zipCode)
        .then(response => {
          Storage.nearZipCodes = response;
        });
    });
  }
}

async function getLocation(zipCode) {
  const response = await fetch(`https://app.zipcodebase.com/api/v1/search?apikey=${tokens.ZIP_CODEBASE_KEY}&codes=${zipCode}&country=us`, 
    {mode: 'cors'})
    .then(location => location.json());

  return `${response.results[zipCode][0].city}, ${response.results[zipCode][0].state_code}`;
}

async function getNearbyZipCodes(zipCode) {
  const response = await fetch(`https://app.zipcodebase.com/api/v1/radius?apikey=${tokens.ZIP_CODEBASE_KEY}&code=${zipCode}&radius=50&country=us&unit=miles`,
    {mode: 'cors'})
    .then(location => location.json());

  let nearbyZips = response.results;
  nearbyZips = nearbyZips.map(location => location.code);

  return nearbyZips;
}

function generateFooter() {
  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");

  const logo = document.createElement("div");
  logo.setAttribute("class", "logo");

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

  const copyright = document.createElement("p");
  copyright.setAttribute("id", "copyright");
  const year = new Date().getFullYear()
  copyright.textContent = `© ${year} | Made with ♥ at Hacks for Humanity`;

  footer.append(copyright);

  return footer;
}

function renderAnimalList(animalArray){
  // Clear wrapper
  const wrapper = document.querySelector("#wrapper");
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
    container.append(buildTrainerCard(trainer));
  });

  return container;
}

function buildTrainerCard(trainer) {
  const trainerCard = document.createElement("div");
  trainerCard.setAttribute("class", "trainer-card");

  const trainerPhoto = document.createElement("div");
  trainerPhoto.setAttribute("class", "photo");
  trainerPhoto.style.backgroundImage = `url(${trainer.imageUrl})`;

  const trainerName = document.createElement("h2");
  trainerName.textContent = trainer.name;
  const trainerLocation = document.createElement("p");
  trainerLocation.textContent = trainer.location;

  trainerCard.append(trainerPhoto, trainerName, trainerLocation);

  return trainerCard;
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
  animalCards.forEach(card => {
    card.addEventListener("click", (e) => {
      renderDetailPage(e.currentTarget.dataset.animalId);
    });
  });
}

// Render detail page
function renderDetailPage(animalId) {
  // Change filter to back button
  const filterBar = document.querySelector("#filter-bar");

  while(filterBar.firstChild) {
    filterBar.removeChild(filterBar.firstChild);
  }
  
  const backButton = document.createElement("button");
  backButton.setAttribute("id", "back-button");
  backButton.textContent = "Back to results";
  filterBar.append(backButton);

  // Clear wrapper
  const wrapper = document.querySelector("#wrapper");
  while(wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }

  const animal = Storage.animalDatabase.find(entry => entry.id === Number(animalId));

  const detailWrapper = document.createElement("div");
  detailWrapper.setAttribute("class", "detail-wrapper");

  const photo = document.createElement("div");
  photo.setAttribute("class", "photo");
  photo.style.backgroundImage = `url(${animal.imageUrl})`;

  // Add text details on the animal
  const detailBlock = document.createElement("div");
  detailBlock.setAttribute("class", "detail-block");

  const name = document.createElement("h1");
  name.textContent = animal.name;

  const training = document.createElement("h2");
  training.setAttribute("class", "training");
  training.textContent = animal.training;

  // Specify breed if available, otherwise leave it blank
  let species;
  if (animal.breed !== null) {
    species = `${animal.species} (${animal.breed})`;
  } else {
    species = animal.species;
  }

  const tagCloud = document.createElement("div");
  tagCloud.setAttribute("class", "tag-cloud");
  
  animal.tags.forEach(tag => {
    const tagDiv = document.createElement("div");
    tagDiv.setAttribute("class", "tag");
    tagDiv.textContent = tag;
    tagCloud.append(tagDiv);
  });

  const summary = document.createElement("p");
  summary.setAttribute("class", "summary-box");
  summary.textContent = `${species} | ${animal.gender} | ${animal.age} years old`;

  const description = document.createElement("p");
  description.setAttribute("class", "description");
  description.textContent = "This cute canine is ready to provide the helpful companionship you need. He has four years of exensive training and experience as an emotional support animal. He's friendly and calm, and loves to be around kids and other dogs.";

  // Trainer card box
  const trainer = Storage.trainerDatabase.find(trainer => trainer.id === animal.trainerId);

  const trainerInfo = document.createElement("div");
  trainerInfo.setAttribute("class", "trainer-info");

  const contact = document.createElement("div");
  contact.setAttribute("class", "contact-card");

  const price = document.createElement("h3");
  price.setAttribute("class", "price");
  price.textContent = "$15,000";

  const contactButton = document.createElement("button");
  contactButton.setAttribute("class", "contact-button");
  contactButton.textContent = `Get in touch with ${trainer.name}`;

  contact.append(price, contactButton);

  const trainerCard = buildTrainerCard(trainer);
  trainerCard.append(price, contactButton);
  // trainerInfo.append(contact, trainerCard);

  detailBlock.append(name, training, summary, description, tagCloud, trainerCard);
  detailWrapper.append(photo, detailBlock);
  wrapper.append(detailWrapper);
  bindBackButton();
}

function bindBackButton() {
  const backButton = document.querySelector("#back-button");
  backButton.addEventListener("click", () => {
    renderPage();
    renderAnimalList(Storage.query);
  });

}

// Initial functions
renderPage();
renderHomePage();
