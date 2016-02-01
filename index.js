'use strict';

var ruleMap = {
  'es3-member-expression-literals': [],
  'es3-property-literals': [],
  'es5-property-mutators': [],
  'es2015-arrow-functions': ['arrowFunctions'],
  'es2015-block-scoping': ['blockBindings'],
  'es2015-classes': ['classes'],
  'es2015-computed-properties': ['objectLiteralComputedProperties'],
  'es2015-constants': ['blockBindings'],
  'es2015-destructuring': ['destructuring'],
  'es2015-for-of': ['forOf'],
  'es2015-function-name': [],
  'es2015-literals': ['binaryLiterals', 'octalLiterals'],
  'es2015-object-super': ['superInFunctions'],
  'es2015-parameters': ['defaultParams'],
  'es2015-shorthand-properties': ['objectLiteralShorthandProperties'],
  'es2015-spread': ['spread'],
  'es2015-sticky-regex': ['regexYFlag'],
  'es2015-template-literals': ['templateStrings'],
  'es2015-typeof-symbol': [],
  'es2015-unicode-regex': ['regexUFlag'],
  'es2015-modules': ['modules'],
  'es2015-generators': ['generators'],
  'regenerator': ['generators'],
  'es3-function-scope': []
};

module.exports = function babelpluginToEslintrule(pluginName) {
  if (!ruleMap.hasOwnProperty(pluginName)) {
    return [];
  }
  return ruleMap[pluginName];
};
