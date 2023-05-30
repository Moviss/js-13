'use strict';

for (let elem of document.querySelectorAll('.elem')) {
  elem.addEventListener('click', e => alert(`Capturing: ${elem.tagName}`),
    true);
  elem.addEventListener('click', e => alert(`Bubbling: ${elem.tagName}`));
}

