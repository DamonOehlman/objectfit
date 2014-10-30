var jsonparse = require('cog/jsonparse');
var reSplit = /(\swithin\s|\s\=\>\s)/;
var contain = require('../../contain');

module.exports = function(t) {
  var parts = t.name.split(reSplit).map(jsonparse).filter(Array.isArray);

  t.plan(2);
  t.equal(parts.length, 3, 'valid test expression');
  t.deepEqual(contain(parts[1], parts[0]), parts[2], 'match');
};
