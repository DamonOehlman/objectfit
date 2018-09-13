# objectfit

This is a suite of functions for fitting (possibly overflowing depending on
the technique) one rectangular shape into another rectangular region,
preserving aspect ratio.

[![NPM](https://nodei.co/npm/objectfit.png)](https://nodei.co/npm/objectfit/)

[![stable](https://img.shields.io/badge/stability-stable-green.svg)](https://github.com/dominictarr/stability#stable) [![Build Status](https://api.travis-ci.org/DamonOehlman/objectfit.svg?branch=master)](https://travis-ci.org/DamonOehlman/objectfit)

## Example Usage

Displayed below is an example of drawing an image on a canvas using the
`objectfit/contain` function.  It should be noted that as the functions
all use the same function signature, `objectfit/cover` could be used in
it's place.

```js
// examples/contain.js
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
  context.drawImage.apply(context, [img].concat(bounds));
}

// redraw on image load and window resize
img.onload = redraw;
window.onresize = redraw;

document.body.appendChild(canvas);
```

## Reference

All `objectfit` functions use the following function signature:

```
fit(container, => subject) => [x, y, width, height]
```

## Implementations

### contain

Use [letterboxing](http://en.wikipedia.org/wiki/Letterbox) or
[pillarboxing](http://en.wikipedia.org/wiki/Pillar_box_(film)) to resize
an object to fit within another containing rect, without affecting the
aspect ratio.

### cover

Ensure the subject completely fills the container leaving no whitespace
visible in the container.

## License(s)

### ISC

Copyright (c) 2014, Damon Oehlman <mailto:damon.oehlman@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.

