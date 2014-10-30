/**
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

**/
module.exports = function(container, subject) {
  var cw = container[2];
  var ch = container[3];
  var cr = cw / ch;

  function contain(subject) {
    var sw = subject[2];
    var sh = subject[3];
    var sr = sw / sh;
    var result = [];

    if (sr < cr) {
      result[2] = (ch * sr) | 0;
      result[3] = ch;
      result[0] = (cw - result[2]) >> 1;
      result[1] = 0;
    }
    else {
      result[2] = cw;
      result[3] = (cw / sr) | 0;
      result[0] = 0;
      result[1] = (ch - result[3]) >> 1;
    }

    // apply the offset
    result[0] += container[0];
    result[1] += container[1];

    return result;
  }

  return subject ? contain(subject) : contain;
};
