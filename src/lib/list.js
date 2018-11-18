import { empty } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
  }

  load() {
    // Tæmir efnið úr þessum container.
    empty(this.container);
  }
}
