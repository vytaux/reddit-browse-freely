const { removeModalElements, restoreScroll } = require('../src/shared/content.js');

describe('removeModalElements', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('removes element with id desktop-dynamic-upsell-dialog', () => {
    const el = document.createElement('div');
    el.id = 'desktop-dynamic-upsell-dialog';
    document.body.appendChild(el);

    removeModalElements();

    expect(document.getElementById('desktop-dynamic-upsell-dialog')).toBeNull();
  });

  test('removes element with id mobile-dynamic-upsell-dialog', () => {
    const el = document.createElement('div');
    el.id = 'mobile-dynamic-upsell-dialog';
    document.body.appendChild(el);

    removeModalElements();

    expect(document.getElementById('mobile-dynamic-upsell-dialog')).toBeNull();
  });

  test('removes element with id containing upsell-dialog', () => {
    const el = document.createElement('div');
    el.id = 'some-upsell-dialog-variant';
    document.body.appendChild(el);

    removeModalElements();

    expect(document.querySelector('[id*="upsell-dialog"]')).toBeNull();
  });

  test('does not throw when no modal present', () => {
    expect(() => removeModalElements()).not.toThrow();
  });
});

describe('restoreScroll', () => {
  test('removes rpl-scroll-lock class from body', () => {
    document.body.classList.add('rpl-scroll-lock');

    restoreScroll();

    expect(document.body.classList.contains('rpl-scroll-lock')).toBe(false);
  });

  test('does not throw when overflow not set', () => {
    document.body.style.overflow = '';
    expect(() => restoreScroll()).not.toThrow();
  });
});
