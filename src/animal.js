export default class Animal {
  constructor({species, name, breed, age, training, tags, imageUrl}) {
    this.id = Math.round(Math.random() * 1000000);
    this.name = name;
    this.species = species;
    this.breed = breed;
    this.age = age;
    this.training = training;
    this.tags = tags;
    this.imageUrl = imageUrl;
  }
}