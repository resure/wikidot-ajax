## WikidotAJAX [![Build Status](https://travis-ci.org/resure/wikidot-ajax.svg?branch=master)](https://travis-ci.org/resure/wikidot-kit) [![Dependencies Status](https://david-dm.org/resure/wikidot-kit.svg)](https://david-dm.org/resure/wikidot-ajax)

Lib for performing requests to Wikidot AJAX connector. Returns instance of [cheerio](https://github.com/cheeriojs/cheerio) which is like jQuery-like object with loaded response body.

## Install

```
$ npm install --save wikidot-ajax
```

## Usage

```js
const WikidotAJAX = require('wikidot-ajax');

const performRequest = wikidotKit({baseURL: 'http://scpfoundation.ru'});

performRequest({
	moduleName: 'users/UserInfoWinModule',
	user_id: 716422
}).then(($) => {
	console.log($('.content.modal-body h1').text());
	// => Resure
});
```

## License

MIT © [Gadzhi Gadzhiev](https://scpfoundation.net)
