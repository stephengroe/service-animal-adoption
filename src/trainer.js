export default class Trainer {
  constructor({name, location}) {
    this.id = Date.now() + Math.round(Math.random * 10000)
    this.name = name;
    this.location = location;
    this.animals = [];
  }
  addAnimal(details) {
    const animal = new Animal(details);
  }

}