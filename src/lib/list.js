import { empty } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
  }

  load() {
    empty(this.container);
  }
}
/*
Þetta og helpers.js eru dæmi af skrám sem við getum notað og gert fleiri af með hjálparföllum o.fl.
*/
