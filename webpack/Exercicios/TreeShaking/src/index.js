import { cube } from './math.js';

function component() {
  const element = document.createElement('pre');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML [
    'Hello webpack s!',
    '5 cubes is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());
