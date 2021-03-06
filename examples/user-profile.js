'use strict';

const WikidotAJAX = require('../');
const performRequest = new WikidotAJAX({baseURL: 'http://scpfoundation.ru'});

// Example of fetching user profile by ID and extracting username from response

performRequest({
    moduleName: 'users/UserInfoWinModule',
    user_id: 716422
}).then(($) => {
    console.log($('.content.modal-body h1').text());
});
