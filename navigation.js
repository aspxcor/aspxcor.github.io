// Both languages share the same section and article IDs.
const header = document.querySelector('.mast');
const languageLink = document.querySelector('[data-switch]');
const otherPage = languageLink.getAttribute('href');
const navLinks = [...document.querySelectorAll('nav a')];
const sections = [...document.querySelectorAll('.main-section')];
const positions = [...document.querySelectorAll('.main-section, main article[id]')];
let queued = false;

function updateNavigation() {
  queued = false;
  const readingLine = header.getBoundingClientRect().bottom + 64;
  const lastReached = nodes => nodes.filter(node => node.getBoundingClientRect().top <= readingLine).pop();
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const atEnd = maxScroll > 0 && window.scrollY >= maxScroll - 2;
  let activeSection = atEnd ? sections[sections.length - 1] : lastReached(sections) || sections[0];
  let position = lastReached(positions);
  if (position && position.closest('.main-section') !== activeSection) position = activeSection;

  // A short final section can reach the bottom before its heading reaches the header.
  // Keep an explicit anchor while the browser is at that anchor's attainable position.
  const target = document.getElementById(window.location.hash.slice(1));
  const targetSection = target?.closest('.main-section');
  if (targetSection) {
    const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
    const idealScroll = window.scrollY + target.getBoundingClientRect().top - margin;
    const attainableScroll = Math.max(0, Math.min(idealScroll, maxScroll));
    if (Math.abs(window.scrollY - attainableScroll) < 4) {
      activeSection = targetSection;
      position = target;
    }
  }
  const fragment = window.scrollY < 8 ? '' : '#' + (position || activeSection).id;
  languageLink.setAttribute('href', otherPage + fragment);
  for (const link of navLinks) {
    if (link.hash === '#' + activeSection.id) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

function scheduleUpdate() {
  if (!queued) {
    queued = true;
    window.requestAnimationFrame(updateNavigation);
  }
}

window.addEventListener('scroll', scheduleUpdate, {passive: true});
window.addEventListener('resize', scheduleUpdate);
window.addEventListener('pageshow', scheduleUpdate);
window.addEventListener('hashchange', scheduleUpdate);
languageLink.addEventListener('click', updateNavigation);
updateNavigation();
