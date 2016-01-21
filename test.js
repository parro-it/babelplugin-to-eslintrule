var test = require('tape');
var eslintFeature = require('./');

test('return eslint ecma feature', function (t) {
  var result = eslintFeature('es2015-parameters');
  t.deepEqual(result, ['defaultParams']);
  t.end();
});

test('return empty array for non corresponding babel plugin', function (t) {
  var result = eslintFeature('es5-property-mutators');
  t.deepEqual(result, []);
  t.end();
});

test('return empty array for non known babel plugin', function (t) {
  var result = eslintFeature('unknown');
  t.deepEqual(result, []);
  t.end();
});
