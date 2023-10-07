export default class Owner {
  constructor({name}) {
    this.id = Math.round(Math.random() * 1000000);
    this.name = name;
  }
}