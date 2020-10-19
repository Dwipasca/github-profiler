// console.log('Hello world!');
// problem : we need a simple to look at github profile
// solution : use NodeJS to connect to github API to get profile info and print out the console

let https = require('https');
let options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/users/dwipasca',
    method: 'GET',
    headers: {
        'user-agent': 'first-App'
    }
}
// Todo: [x] connect to github API
let request = https.request(options, (res) => {
    console.log('got response : '+ res.statusCode);
})

request.end();

request.on('error', (e) => {
    console.error(e);
})

// Todo: Read The data

// Todo: Parse the data

// Todo: Print the data out 
