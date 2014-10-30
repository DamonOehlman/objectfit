var test = require('tape');
var validate = require('./helpers/validate');

test('[0,0,200,200] within [100,100,100,100] => [100,100,100,100]', validate);
test('[0,0,200,100] within [100,100,100,100] => [100,125,100,50]', validate);
