(function () {

  const SCHEME_ATTRIBUTE = 'data-rf-theme';
  const TRANSITION_ATTRIBUTE = 'data-rf-transition';

  const modeToggle = document.getElementById('rf-dark-mode-toggle-switch');
  const root = document.documentElement;

  let scheme = window.localStorage.getItem('scheme') ? window.localStorage.getItem('scheme') : null;

  if (scheme === null) {
    // TODO does this work ?
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      scheme = 'dark';
      localStorage.setItem('scheme', 'dark');
    } else {
      scheme = 'light';
    }
  }

  if (modeToggle && scheme === 'dark') {
    modeToggle.checked = true
  }

  if (scheme === 'dark') {
    if (!root.hasAttribute(TRANSITION_ATTRIBUTE)) {
      root.setAttribute(SCHEME_ATTRIBUTE, 'dark');
    } else {
      root.removeAttribute(TRANSITION_ATTRIBUTE);
      root.setAttribute(SCHEME_ATTRIBUTE, 'dark');
      setTimeout(function () {
        _root.setAttribute(TRANSITION_ATTRIBUTE, '');
      }, 300);
    }
  } else root.setAttribute(SCHEME_ATTRIBUTE, 'light');

  modeToggle.addEventListener('change', function(e) {
    if (modeToggle.checked) {
      scheme = 'dark';
      window.localStorage.setItem('scheme', 'dark');
      root.setAttribute(SCHEME_ATTRIBUTE, 'dark');
    } else {
      scheme = 'light';
      window.localStorage.setItem('scheme', 'light');
      root.removeAttribute(SCHEME_ATTRIBUTE);
    }
  });
})();
