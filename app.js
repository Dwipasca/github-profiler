
// Todo: [x] connect to github API
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

// Todo: [x] Read The data
let request = https.request(options, (res) => {
    // mengecek apakah response yang dikembalikan berhasil atau tidak
    // response Code 200 = Sukses
    // response Code 403 = Forbidden
    console.log('got response : '+ res.statusCode);
    
    // variavle body dibuat agar data yang dikembalikan bukanlah buffer
    let body = '';
    res.on('data', (data) => {
        // console.log(data); -> data yang akan tmpil adalah buffer
        body = body + data;
    });

    res.on('end', () => {
        // ketika response sudah selesai lakukan kode program dibawah ini
        console.log(body);
    });

})

request.end();

request.on('error', (e) => {
    console.error(e);
})


// Todo: Parse the data

// Todo: Print the data out 
