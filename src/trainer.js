import Animal from "./animal";

export default class Trainer {
  constructor({name, location, imageUrl}) {
    this.id = Math.round(Math.random() * 1000000);
    this.animals = [];
    this.name = name;
    this.location = location;
    this.imageUrl = imageUrl;
  }

  addAnimal(animalDetails) {
    const newAnimal = new Animal(animalDetails, this.id);
    this.animals.push(newAnimal);
    return newAnimal;
  }
}