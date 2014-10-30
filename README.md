# objectfit

This is a suite of functions for fitting (possibly overflowing depending on
the technique) one rectangular shape into another rectangular region,
preserving aspect ratio.


[![NPM](https://nodei.co/npm/objectfit.png)](https://nodei.co/npm/objectfit/)

[![Build Status](https://img.shields.io/travis/DamonOehlman/objectfit.svg?branch=master)](https://travis-ci.org/DamonOehlman/objectfit) 

## Example Usage

Displayed below is an example of drawing an image on a canvas using the
`objectfit/contain` function.  It should be noted that as the functions
all use the same function signature, `objectfit/cover` could be used in
it's place.

```js
var fit = require('objectfit/contain');
var crel = require('crel');
var img = crel('img', { src: 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Altja_paadikuurid.jpg/1024px-Altja_paadikuurid.jpg' });
var canvas = crel('canvas');
var css = require('fdom/css');
var context = canvas.getContext('2d');

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

All objectfit functions use the following function signature:

```
fit(container, => subject) => [x, y, width, height]
```

## Implementations

### contain

Use [letterboxing](http://en.wikipedia.org/wiki/Letterbox) or
[pillarboxing](http://en.wikipedia.org/wiki/Pillar_box_(film)) to resize
an object to fit within another containing rect, without affecting the
aspect ratio.

## License(s)

### ISC

Copyright (c) 2014, Damon Oehlman <damon.oehlman@gmail.com>

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
