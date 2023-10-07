export default class Animal {
  constructor({name}) {
    this.id = Date.now() + Math.round(Math.random * 10000)
    this.name = name;
  }
}