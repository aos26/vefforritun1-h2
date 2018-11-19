import List from './lib/list';

/**
 * Immediately-infoked functions expression (iife)
 * Keyrir mismunandi eftir því hvort fyrirlestur eða index hlóðst.
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
     * Þ.e. "index.html" síðan. Þar kemur allur kóðinn fyrir forsíðuna.
     */
    const list = new List();
    list.load();
  }
});
