var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write(`Yo! ${req.url}`);


    res.end();
    // fetch('https://www.google.com/recaptcha/api/siteverify', {
    //     method: 'POST',
    //     // mode: 'no-cors',
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    //     body: JSON.stringify({
    //         secret: '6LfvcJ8jAAAAAGIDiRhcdKo5d3hGDmJ_s7RfhwVZ',
    //         response: token
    //     })
    // }).then((res) => {
    //     console.log(res)
    // })
}).listen(process.env.PORT || 3000);