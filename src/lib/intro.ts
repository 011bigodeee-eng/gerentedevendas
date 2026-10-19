export const INTRO_SESSION_KEY = 'marcus-intro-seen-v1';

// Runs in the document head before page content can paint.
export const introBootstrap = `(function(){var skip=window.matchMedia('(prefers-reduced-motion: reduce)').matches;try{skip=skip||sessionStorage.getItem('${INTRO_SESSION_KEY}')==='1';}catch(e){}document.documentElement.setAttribute('data-intro-state',skip?'skip':'pending');})();`;
