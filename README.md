# ViaCEP Wrapper

[![Build Status](https://travis-ci.org/cicero-reis/viacep-wrapper.svg?branch=master)](https://travis-ci.org/cicero-reis/viacep-wrapper)

A wrapper to work with the [ViaCEP](https://viacep.com.br/).

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the ViaCep Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Installation

```sh
$ npm install viacep-wrapper --save
```

## How to use

### ES6

```js
// to import a specific method
import viaCepWrapper from 'viacep-wrapper';

// using  method
viaCepWrapper.search('########');
```
### CommonJS

```js
const viaCepWrapper = require('viacep-wrapper').default;
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="viacep-wrapper.umd.js"></script>

<!-- to import minified version -->
<script src="viacep-wrapper.umd.min.js"></script>
```

After that the library will be available to the Global as `viaCepWrapper`. Follow an example:

```js

const viaCep = viaCepWrapper.search('########')

```
