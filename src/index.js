import List from './lib/list';

// TODO setja gráan bakgrunn ef það er engin lpImg
function displayHeaderOnLecturePage(el, lpCategory, lpTitle, lpImg) {
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

function displayYoutubeVideo(el, data) {
  const div = document.createElement('div');
  div.className = 'lecture-video';
  const lecVideo = document.createElement('iframe');
  lecVideo.className = 'iframe';
  lecVideo.src = data;
  div.appendChild(lecVideo);
  el.appendChild(div);
}

function displayText(el, data) {
  const div = document.createElement('div');
  div.className = 'lp-div';
  const textArray = data.split('\n');
  textArray.forEach((k) => {
    const p = document.createElement('p');
    p.className = 'lp-p';
    p.appendChild(document.createTextNode(k));
    div.appendChild(p);
  });
  el.appendChild(div);
}

function displayQuote(el, data, attribute) {
  const bq = document.createElement('blockquote');
  bq.className = 'lp-div lp-bq';
  const p0 = document.createElement('p');
  p0.appendChild(document.createTextNode(data));
  bq.appendChild(p0);
  if (attribute !== '') {
    const p1 = document.createElement('p');
    p1.className = 'lp-p';
    p1.appendChild(document.createTextNode(attribute));
    bq.appendChild(p1);
  }
  el.appendChild(bq);
}

function displayImage(el, data, caption) {
  const div = document.createElement('div');
  div.className = 'lp-image';
  const img = document.createElement('img');
  img.className = 'lp-img';
  img.src = data;
  div.appendChild(img);
  el.appendChild(div);
  if (caption !== '') {
    const cite = document.createElement('cite');
    cite.appendChild(document.createTextNode(caption));
    div.appendChild(cite);
  }
}

function displayHeading(el, data) {
  const h2 = document.createElement('h2');
  h2.className = 'lp-h2';
  h2.appendChild(document.createTextNode(data));
  el.appendChild(h2);
}

function displayList(el, data) {
  const ul = document.createElement('ul');
  ul.className = 'lp-ul';
  data.forEach((k) => {
    const li = document.createElement('li');
    li.className = 'lp-li';
    li.appendChild(document.createTextNode(k));
    ul.appendChild(li);
  });
  el.appendChild(ul);
}

// TODO bæta við tómum línum eftir fyrirsögn og fyrir lista í markdown'inu
function displayCode(el, data) {
  const div = document.createElement('div');
  div.className = 'lp-div';

  const textArray = data.split('\n'); // Virðast vera tvö \n á eftir ### Markdown fyrirsögn
  textArray.forEach((k) => {
    const code = document.createElement('code');
    code.className = 'lp-code';
    code.appendChild(document.createTextNode(k));
    div.appendChild(code);
  });
  el.appendChild(div);
}

function displayContentOnLecturePage(el, lpContent) {
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

        // TODO breyta þessu í villuboð eða bara geri ekki neitt
      default:
        console.log("type passaði ekki við það sem við bjuggumst");
        break;
    }
  });
}

function loadLecturePage(page) {
  const lectureData = JSON.parse(sessionStorage.getItem('data')); //Sækir efnið sem var klikkað á
  console.log(lectureData); // eslint-disable-line no-console

  const lpCategory = lectureData.category;
  const lpTitle = lectureData.title;
  const lpImg = `url('/${lectureData.image}')`;
  const lpContent = lectureData.content;
  displayHeaderOnLecturePage(page, lpCategory, lpTitle, lpImg);
  console.log(lectureData.content);
  displayContentOnLecturePage(page, lpContent);
}

/**
 * Immediately-infoked functions expression (iife)
 * Keyrir mismunandi eftir því hvort fyrirlestur eða index hlóðst.
 */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');
  let lectureData = 0;
  if (isLecturePage) {
    /**
     * Ef DOM síðan sem hlóðst hefur class="lecture-page", þá er eftirfarandi keyrt
     */
    lectureData = JSON.parse(sessionStorage.getItem('data')); //Sækir efnið sem var klikkað á
    loadLecturePage(page);
  } else {
    /**
     * Ef DOM síðan sem hlóðst er ekki "lecture-page", þá er eftirfarandi keyrt
     * Þ.e. "index.html" síðan. Þar kemur allur kóðinn fyrir forsíðuna.
     */
    const list = new List();
    list.load();
  }
});
