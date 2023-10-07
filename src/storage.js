import { sampleAnimals, sampleTrainers } from "./sample-data";
import Trainer from "./trainer";

const Storage = {
    // Create "database" global variables
  animalDatabase: [],
  trainerDatabase: [],
  filters: new Map(),

  generateFilters() {
    this.filters.set("Species", ["Dog", "Cat", "Miniature Horse"]);
    this.filters.set("Training", ["Certified Service Animal", "Emotional Support Animal"]);
    this.filters.set("Age", ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
    this.filters.set("Gender", ["Male", "Female"]);
  }
}

function generateSampleData() {
  sampleTrainers.forEach(trainer => {
    const newTrainer = new Trainer(trainer);
    Storage.trainerDatabase.push(newTrainer);
  });
  
  sampleAnimals.forEach(animal => {
    // Select random trainer to assign animals to
    const randomIndex = Math.floor(Math.random() * Storage.trainerDatabase.length);
    const newAnimal = Storage.trainerDatabase[randomIndex].addAnimal(animal);
    Storage.animalDatabase.push(newAnimal);
  });
}

Storage.generateFilters();
generateSampleData();

export default Storage;