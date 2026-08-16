const SELECTORS = '#desktop-dynamic-upsell-dialog, #mobile-dynamic-upsell-dialog, [id*="upsell-dialog"]';

function removeModalElements() {
  document.querySelectorAll(SELECTORS).forEach(el => el.remove());
}

function restoreScroll() {
  document.body.classList.remove('rpl-scroll-lock');
}

function handleMutations(mutations) {
  for (const mutation of mutations) {
    if (mutation.addedNodes.length) {
      removeModalElements();
      restoreScroll();
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = { removeModalElements, restoreScroll };
} else {
  const observer = new MutationObserver(handleMutations);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  removeModalElements();
  restoreScroll();
}
