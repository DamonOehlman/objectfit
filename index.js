/**
  # objectfit

  This is a suite of functions for fitting (possibly overflowing depending on
  the technique) one rectangular shape into another rectangular region,
  preserving aspect ratio.

  ## Example Usage

  Displayed below is an example of drawing an image on a canvas using the
  `objectfit/contain` function.  It should be noted that as the functions
  all use the same function signature, `objectfit/cover` could be used in
  it's place.

  <<< examples/contain.js

  ## Reference

  All objectfit functions use the following function signature:

  ```
  fit(container, => subject) => [x, y, width, height]
  ```

  ## Implementations

**/
exports.contain = require('./contain');
