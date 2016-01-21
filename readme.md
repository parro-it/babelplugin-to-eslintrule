# babelplugin-to-eslintrule

> Map babel plugins to corresponding eslint ecmaFeatures

[![Travis Build Status](https://img.shields.io/travis/parro-it/babelplugin-to-eslintrule.svg)](http://travis-ci.org/parro-it/babelplugin-to-eslintrule)
[![NPM module](https://img.shields.io/npm/v/babelplugin-to-eslintrule.svg)](https://npmjs.org/package/babelplugin-to-eslintrule)
[![NPM downloads](https://img.shields.io/npm/dt/babelplugin-to-eslintrule.svg)](https://npmjs.org/package/babelplugin-to-eslintrule)

## Installation

```bash
npm install --save babelplugin-to-eslintrule
```

## Usage

```javascript
  const eslintFeature = require('babelplugin-to-eslintrule');
  console.log(eslintFeature('es2015-parameters'));
```
> ['defaultParams']

return an array containing eslint's ecmaFeatures corresponding to
the es2015 feature provided by the babel plugin.

Return an empty array if no corresponding ecmaFeature exists.


## License

The MIT License (MIT)

Copyright (c) 2015 parro-it
