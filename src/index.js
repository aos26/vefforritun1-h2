import List from './lib/list';


/**
 * Immediately-infoked functions expression (iife)
 * Keyrir mismunandi eftir því hvort fyrirlestur eða index hlóðst
 */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
  /**
   * Ef DOM síðan sem hlóðst hefur class="lecture-page", þá er eftirfarandi keyrt
   */

  } else {
    /**
     * Ef DOM síðan sem hlóðst er ekki "lecture-page", þá er eftirfarandi keyrt
     * Þ.e. "index.html" síðan
     */
    const list = new List();
    list.load();
  }


/**
 * Veit ekkert hvar á að setja neitt eða hvar á að byrja
 * Hér eru allavega breytur sem við munum þurfa, mögulega á röngu format
 */

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

const 

});
