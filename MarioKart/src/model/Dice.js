export default class Dice {
   async roll() {
    return Math.floor(Math.random() * 6) + 1;
  }
}