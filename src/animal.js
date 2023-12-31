export default class Animal {
  constructor({species, gender,  name, breed, age, training, tags, imageUrl}, trainerId) {
    this.id = Math.round(Math.random() * 1000000);
    this.name = name;
    this.gender = gender;
    this.species = species;
    this.breed = breed;
    this.age = age;
    this.training = training;
    this.tags = tags;
    this.imageUrl = `https://www.thoughtfulgrowth.com/pupability-images/${name.toLowerCase()}.jpg`;
    this.trainerId = trainerId;
  }
}