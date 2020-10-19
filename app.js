let profile = require('./profile.js');

let profiles = ['dwipasca', 'rizafahmi'];

profiles.map(user => {
    return profile.get(user);
})
