/**
 * Tæmir HTML element
 */
export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/**
 * Fyrir: Element el, almennt sjálfsagt .list
 *        lectInfo er fylki með útvöldum strengjum úr lectures.json
 *          þeir innihalda title, category og thumbnail
 * Eftir: Smíðar eftirfarandi HTML element og setur það inní <div class="grid__row list">
         <div class="grid__col"><!--Sample content, þetta á raunverulega að vera lesið úr lectures.json-->
          <div class="lecture">
            <div class="lecture__title"><h2 class="headline2">lectureTitleString</h2></div>
            <div class="lecture__category"><h3 class="headline3">lectureCategoryString</h3></div>
            <div class="lecture__image"><img src="lectureThumbString" alt="" class="img"></div>
          </div>
        </div>
 */
function displayLectureOnIndex(el, lectInfo) {
  const element = el;
  const lectureTitleString = lectInfo[0];
  const lectureCategoryString = lectInfo[1];
  let lectureThumbString = lectInfo[2];
  if (lectureThumbString === undefined) lectureThumbString = '';

  // Númer 1
  const gridCol = document.createElement('div');
  gridCol.className = 'grid__col';
  // Númer 2
  const lecture = document.createElement('div');
  lecture.className = 'lecture';
  // 3 hlutir inní Númer 2
  const lectureTitle = document.createElement('div');
  lectureTitle.className = 'lecture__title';
  const lectureCategory = document.createElement('div');
  lectureCategory.className = 'lecture__category';
  const lectureImage = document.createElement('div');
  lectureImage.className = 'lecture__image';
  // 3 hlutir, einn inní hvern ofangreindra hluta
  const lectureTitleH2 = document.createElement('h2');
  lectureTitleH2.className = 'headline2';
  lectureTitleH2.appendChild(document.createTextNode(lectureTitleString));
  const lectureCategoryH3 = document.createElement('h3');
  lectureCategoryH3.className = 'headline3';
  lectureCategoryH3.appendChild(document.createTextNode(lectureCategoryString));
  const lectureImageImg = document.createElement('img');
  lectureImageImg.className = 'img';
  lectureImageImg.src = lectureThumbString;

  // Púslum þessu saman
  lectureTitle.appendChild(lectureTitleH2);
  lectureCategory.appendChild(lectureCategoryH3);
  lectureImage.appendChild(lectureImageImg);
  lecture.appendChild(lectureTitle);
  lecture.appendChild(lectureCategory);
  lecture.appendChild(lectureImage);
  gridCol.appendChild(lecture);
  element.appendChild(gridCol);
}


export function displayAllLecturesOnIndex(el, lectKeys, allLects) {
  const element = el;
  const lectureKeys = lectKeys;
  const allLectures = allLects;
  console.log(typeof allLectures); // eslint-disable-line no-console
  console.log(allLectures.length); // eslint-disable-line no-console

  allLectures.forEach((k) => {
    const lectureInfo = [k[lectureKeys[0]], k[lectureKeys[1]], k[lectureKeys[2]]];
    displayLectureOnIndex(element, lectureInfo);
  });


  /*
  allLectures.forEach((k) => {
    console.log(typeof k); // eslint-disable-line no-console
    const kStr = JSON.stringify(k);
    console.log(kStr); // eslint-disable-line no-console
    const kP = JSON.parse(kStr);
    console.log(kP); // eslint-disable-line no-console
  });
  console.log(typeof allLectures); // eslint-disable-line no-console
  */

  /*
  allLectures.forEach((i) => {
    const lecture = allLectures[i];
    lectureKeys.forEach((k) => {
      const lectureInfo = lecture[k];
      displayLectureOnIndex(element, lectureInfo);
    });
  });
  */
}
