var contain = require('../contain');
var crel = require('crel');
var img = crel('img', { src: 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Altja_paadikuurid.jpg/1024px-Altja_paadikuurid.jpg' });
var canvas = crel('canvas');
var css = require('fdom/css');
var context = canvas.getContext('2d');

// set document.body styling
[ ['margin', 0], ['overflow', 'hidden'] ].forEach(css(document.body));

function redraw() {
  var bounds = contain(
    [0, 0, window.innerWidth, window.innerHeight],
    [0, 0, img.width, img.height]
  );

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.drawImage.apply(context, [img].concat(bounds));
}

// redraw on image load and window resize
img.onload = redraw;
window.onresize = redraw;

document.body.appendChild(canvas);
