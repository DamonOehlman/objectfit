const fit = require('../contain');
const crel = require('crel');
const img = crel('img', { src: 'http://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Plasma_globe_60th.jpg/1024px-Plasma_globe_60th.jpg' });
const canvas = crel('canvas');
const css = require('fdom/css');
const context = canvas.getContext('2d');

// set document.body styling
[ ['margin', 0], ['overflow', 'hidden'] ].forEach(css(document.body));

function redraw() {
  var bounds = fit(
    [0, 0, window.innerWidth, window.innerHeight],
    [0, 0, img.width, img.height]
  );

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.drawImage(img, ...bounds);
}

// redraw on image load and window resize
img.onload = redraw;
window.onresize = redraw;

document.body.appendChild(canvas);
