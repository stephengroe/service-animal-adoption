export default class Trainer {
  constructor({name, location}) {
    this.id = Math.round(Math.random() * 1000000);
    this.name = name;
    this.location = location;
    this.animals = [];
  }
  addAnimal(details) {
    const animal = new Animal(details);
  }

}