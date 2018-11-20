import { empty, displayAllLecturesOnIndex } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    /**
     * FILTER BUTTONS
     * Þurfum örugglega að finna HTML, CSS og JS takkana:
     this.htmlButt = document.querySelector('html-butt');
     this.cssButt = document.querySelector('css-butt');
     this.jsButt = document.querySelector('js-butt');
     */
  }

  /**
   * Hleður inn efninu úr lectures.json
   */
  load() {
    // Tæmir efnið úr þessum container.
    empty(this.container);

    // Þetta er fylkið með lyklum að efni á forsíðuna, þurfum svo annað fyrir fyrirlestur.html
    const lectureKeys0 = ['title', 'category', 'thumbnail'];

    const DATA_URL = '/lectures.json';
    /**
     * Sækir gögnin úr lectures.json
     */
    fetch(DATA_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Villa við að sækja gögn');
      })
      .then((data) => {
        displayAllLecturesOnIndex(this.container, lectureKeys0, data.lectures);
      })
      .catch((error) => {
        console.error(error); // eslint-disable-line
      });
    /**
     * FILTER BUTTONS
     * Þurfum örugglega event listeners fyrir takkana þrjá
     this.htmlButt.addEventListener('click', this.click.bind(this));
     this.cssButt.addEventListener('click', this.click.bind(this));
     this.jsButt.addEventListener('click', this.click.bind(this));
     */
  }
}

/*

const [{
  slug,
  title,
  category,
  image,
  thumbnail,
  content
}] = lecture;


// Þurfum að lesa efnið úr lectures á fyrirlestrasíðunni og birta efni á viðeigandi hátt
const [{
  youtube, // inniheldur hlekk á youtube myndband
  text, // inniheldur gögn þar sem \n merkir á milli málsgreina, þ.e.a.s. texta skal birta innan <p>, skipt á \n
  quote, //  inniheldur tilvitnun, aukalega getur verið `attribute` með þeim sem vitnað er í
  image, // inniheldur slóð á mynd, aukalega getur verið ` caption`  með texta með mynd
  heading, // inniheldur fyrirsögn
  list, // inniheldur fylki af textum í lista
  code // inniheldur kóða þar sem bil og nýjar línur skipta máli
}] = datatype; // content

*/
