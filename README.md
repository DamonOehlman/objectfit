# objectfit

This is a suite of functions for fitting (possibly overflowing depending on
the technique) one rectangular shape into another rectangular region,
preserving aspect ratio.


[![NPM](https://nodei.co/npm/objectfit.png)](https://nodei.co/npm/objectfit/)

[![Build Status](https://img.shields.io/travis/DamonOehlman/objectfit.svg?branch=master)](https://travis-ci.org/DamonOehlman/objectfit) 

## Reference

## contain

Use [letterboxing](http://en.wikipedia.org/wiki/Letterbox) or
[pillarboxing](http://en.wikipedia.org/wiki/Pillar_box_(film)) to resize
an object to fit within another containing rect, without affecting the
aspect ratio.

### Example Usage

To be completed.

### Reference

#### `contain(container, => subject) => result`

Given the supplied `container` and `subject` bounds, determine the maximum
`result` bounds in which the subject can be displayed within the container
without distorting the aspect ratio.

All bounds are provided in the format of `[x, y, width, height]`

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
