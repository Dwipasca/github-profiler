let username = "dwipasca22";

// Todo: [x] connect to github API
let https = require('https');
let options = {
    hostname: 'api.github.com',
    port: 443,
    path: `/users/${username}`,
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
        // console.log(body);

        // console.log(typeof(body)); -> hasilnya yaitu string, ini alasan mengapa kita harus menggunakan json.parse agar datanya diubah kedalam bentuk object atau json

        // Todo: [x] Parse the data
        // Convert String to JSON (Javascript Object)
        let profile = JSON.parse(body); // -> akan merubah yang tadinya string sekarang menjadi object
        // console.log(typeof(profile)); // hasilnya adalah object

       if ( res.statusCode == 200) {
        // Todo: [x] Print the data out 
        console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} followers `);
       } else {
           console.log(`Profile with username ${username} not found`);
       }
       
         
    });


    
})
 
request.end();

request.on('error', (e) => {
    console.error(e);
})


