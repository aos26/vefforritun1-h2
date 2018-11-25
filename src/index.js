import List from './lib/list';
import {
  displayYoutubeVideo,
  displayText,
  displayCode,
  displayHeading,
  displayImage,
  displayQuote,
  displayList,
} from './lib/helpers';


// TODO setja gráan bakgrunn ef það er engin lpImg
function displayHeader(el, lpCategory, lpTitle, lpImg) {
  // Búa til hausinn
  const lecHeader = document.createElement('header');
  lecHeader.className = 'header';
  const lecHeaderContent = document.createElement('div');
  lecHeaderContent.className = 'header__content';
  const lecHeaderH3 = document.createElement('h3');
  lecHeaderH3.className = 'headline3';
  lecHeaderH3.appendChild(document.createTextNode(lpCategory));
  const lecHeaderH1 = document.createElement('h1');
  lecHeaderH1.className = 'headline1';
  lecHeaderH1.appendChild(document.createTextNode(lpTitle));

  // Setja hausinn á síðuna
  lecHeader.style.backgroundImage = lpImg;
  lecHeaderContent.appendChild(lecHeaderH3);
  lecHeaderContent.appendChild(lecHeaderH1);
  lecHeader.appendChild(lecHeaderContent);
  el.appendChild(lecHeader);
}

function displayContent(el, lpContent) {
  const element = document.createElement('main');
  element.className = 'lecture-content';
  el.appendChild(element);

  const types = [
    'youtube',
    'text',
    'quote',
    'image',
    'heading',
    'list',
    'code',
  ];

  lpContent.forEach((k) => {
    const kt = k.type;
    const kd = k.data;
    let k0;
    switch (kt) {
      case types[0]:
        displayYoutubeVideo(element, kd);
        break;
      case types[1]:
        displayText(element, kd);
        break;
      case types[2]:
        k0 = k.attribute;
        if (k0 === undefined) k0 = '';
        displayQuote(element, kd, k0);
        break;
      case types[3]:
        k0 = k.caption;
        if (k0 === undefined) k0 = '';
        displayImage(element, kd, k0);
        break;
      case types[4]:
        displayHeading(element, kd);
        break;
      case types[5]:
        displayList(element, kd);
        break;
      case types[6]:
        displayCode(element, kd);
        break;
      default:
        break;
    }
  });
}

/**
 * Undirbýr birtingu efnis á fyrirlestur.html
 * Sækir gögn í sessionStorage eftir því hvaða fyrirlestur var smellt á
 * Kallar á displayHeader til að birta upplýsingar í header
 * Kallar a'displayContent til að birta restina af upplýsingunum
 */
function loadLecturePage(page) {
  const lectureData = JSON.parse(sessionStorage.getItem('data'));
  console.log(lectureData);
  console.log(lectureData.content);

  const lpCategory = lectureData.category;
  const lpTitle = lectureData.title;
  const lpImg = `url('/${lectureData.image}')`;
  const lpContent = lectureData.content;
  displayHeader(page, lpCategory, lpTitle, lpImg);
  displayContent(page, lpContent);
}

/**
 * eventListener á DomContentLoaded
 * Keyrir mismunandi eftir því hvort fyrirlestur eða index hlóðst.
 */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');
  if (isLecturePage) {
    /**
     * Sækir gögn í sessionStorage eftir því hvaða fyrirlestur var smellt á
     * Ef DOM síðan sem hlóðst hefur class="lecture-page", þá er
     * kallað á fallið loadLecturePage
     */
    // const lectureData = JSON.parse(sessionStorage.getItem('data'));
    loadLecturePage(page);
  } else {
    /**
     * Ef DOM síðan sem hlóðst er ekki "lecture-page", þ.e. "index.html" síðan,
     *  þá er eftirfarandi keyrt. Kóðinn fyrir forsíðuna er í list.js
     */
    const list = new List();
    list.load();
  }
});
