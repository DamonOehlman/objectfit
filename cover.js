/**
  ### cover

  Ensure the subject completely fills the container leaving no whitespace
  visible in the container.

**/
module.exports = function(container, subject) {
  var cw = container[2];
  var ch = container[3];
  var cr = cw / ch;

  function fit(subject) {
    var sw = subject[2];
    var sh = subject[3];
    var sr = sw / sh;
    var result = [];

    if (sr < cr) {
      result[2] = cw;
      result[3] = (cw / sr) | 0;
      result[0] = 1;
      result[1] = -(result[3] - ch) >> 1;
    }
    else {
      result[2] = (ch * sr) | 0;
      result[3] = ch;
      result[0] = -(result[2] - cw) >> 1;
      result[1] = 0;
    }

    // apply the offset
    result[0] += container[0];
    result[1] += container[1];

    return result;
  }

  return subject ? fit(subject) : fit;
};
