const test = require('tape');
const babelpluginToEslintrule = require('./');

test('it work!', t => {
  const result = babelpluginToEslintrule();
  t.equal(result, 42);
  t.end();
});
