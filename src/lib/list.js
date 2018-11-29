import { empty, displayAllLecturesOnIndex } from './helpers';

const buttonBool = new Array(3).fill(false);
let jsonData;
const lectureKeys0 = ['title', 'category', 'thumbnail'];
const DATA_URL = '/lectures.json';
const container = document.querySelector('.list');

function loadLecture(e) { // TODO
  const parentNodeList = e.target.parentNode.parentNode.childNodes;
  const parentNodeList2 = e.target.parentNode.childNodes;
  const parentNodeTextContent = parentNodeList[0].textContent;
  let parentNodeTextContent2 = 0;
  if (parentNodeList2[0].firstChild != null) {
    parentNodeTextContent2 = parentNodeList2[0].firstChild.textContent;
  }
  let title;
  if (parentNodeTextContent === 'Málfræðicss' || parentNodeTextContent === 'Saganhtml') {
    title = parentNodeTextContent2;
  } else if (parentNodeTextContent != null && typeof parentNodeTextContent === 'string') {
    title = parentNodeTextContent;
  }
  jsonData.lectures.forEach((el) => {
    const elTitle = el.title;
    const elSlug = el.slug;
    if (title === elTitle) { // Hægt að klikka hvar sem er. Hálfgert "skítmix"
      sessionStorage.setItem('data', JSON.stringify(el));
      window.location.href = (`http://localhost:3000/fyrirlestur.html?slug=${elSlug}`);
    }
  });
}

function addEventHandler() {
  const lecture = document.getElementsByClassName('lecture');
  for (let i = 0; i < lecture.length; i += 1) {
    lecture[i].addEventListener('click', loadLecture);
  }
}

function onClickHtml() {
  if (!buttonBool[0]) {
    buttonBool[0] = true;
    empty(container);
    displayAllLecturesOnIndex(container, lectureKeys0, jsonData.lectures, buttonBool);
    addEventHandler();
  } else {
    buttonBool[0] = false;
    empty(container);
    displayAllLecturesOnIndex(container, lectureKeys0, jsonData.lectures, buttonBool);
    addEventHandler();
  }
}

function onClickCss() {
  if (!buttonBool[1]) {
    buttonBool[1] = true;
    empty(container);
    displayAllLecturesOnIndex(container, lectureKeys0, jsonData.lectures, buttonBool);
    addEventHandler();
  } else {
    buttonBool[1] = false;
    empty(container);
    displayAllLecturesOnIndex(container, lectureKeys0, jsonData.lectures, buttonBool);
    addEventHandler();
  }
}

function onClickJs() {
  if (!buttonBool[2]) {
    buttonBool[2] = true;
    empty(container);
    displayAllLecturesOnIndex(container, lectureKeys0, jsonData.lectures, buttonBool);
    addEventHandler();
  } else {
    buttonBool[2] = false;
    empty(container);
    displayAllLecturesOnIndex(container, lectureKeys0, jsonData.lectures, buttonBool);
    addEventHandler();
  }
}


export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.htmlButt = document.querySelector('.html-butt');
    this.cssButt = document.querySelector('.css-butt');
    this.jsButt = document.querySelector('.js-butt');
  }

  /**
   * Hleður inn efninu úr lectures.json
   */
  load() {
    // Tæmir efnið úr þessum container.
    empty(this.container);
    this.htmlButt.addEventListener('click', onClickHtml);
    this.cssButt.addEventListener('click', onClickCss);
    this.jsButt.addEventListener('click', onClickJs);

    // Þetta er fylkið með lyklum að efni á forsíðuna, þurfum svo annað fyrir fyrirlestur.html
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
        jsonData = data;
        displayAllLecturesOnIndex(this.container, lectureKeys0, data.lectures, buttonBool);
        addEventHandler();
      })
      .catch((error) => {
        console.error(error); // eslint-disable-line
      });
  }
}
