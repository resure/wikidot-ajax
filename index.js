'use strict';

const got = require('got');
const cheerio = require('cheerio');
const Bluebird = require('bluebird');

/**
 * This function takes baseURL and returns another function
 * that is ready to make requests to certain Wikidot site.
 *
 * @param {String} baseURL
 *
 * @returns {Function}
 */
module.exports = function WikidotAJAX({baseURL}) {
    const wikidotToken7 = Math.random().toString(36).substring(7);
    const connectorURL = `${baseURL}/ajax-module-connector.php`;

	/**
	 * This function takes params object which is passed to POST request to
	 * wikidot ajax connector. The only requried param is moduleName but you'll
	 * need to pass some others depending on which ajax method you're working with.
	 *
	 * Just open dev console in browser, make some action on wikidot and look,
	 * which module is used there and what parameters are being passed to it.
	 *
	 * @param {Object} params
	 * @param {String} params.moduleName
	 *
	 * @returns {Promise}
	 */
    return (params) => {
        return Bluebird.resolve(got(connectorURL, {
            headers: {Cookie: `wikidot_token7=${wikidotToken7}`},
            body: Object.assign({}, {wikidot_token7: wikidotToken7, callbackIndex: 1}, params),
            json: true
        }).then((response) => {
            return cheerio.load(response.body.body);
        }));
    };
};
