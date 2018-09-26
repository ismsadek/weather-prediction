const express = require('express');
const router = express.Router();

const request = require('request');



// router.get('/', (req, res) => {
//     var location = req.body.location
//     console.log(location)
//     request('http://api.openweathermap.org/pollution/v1/co/' + location + '/current.json?appid=1af7acad75875839f06098421676974b', function (error, response, body){

//         res.json(body);

//     }); 
// });

router.post('/', (req, res) => {
    var location = req.body.location
    request('http://api.openweathermap.org/pollution/v1/co/' + location + '/current.json?appid=1af7acad75875839f06098421676974b', function (error, response, body) {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body); 
    res.json(body);
    });

});

module.exports = router;