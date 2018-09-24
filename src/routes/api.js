const express = require('express');
const router = express.Router();

const request = require('request');

router.get('/', (req, res) => {


    request('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1af7acad75875839f06098421676974b', function (error, response, body){
        res.json(response);
    }); 
});

router.post('/', (req, res) => {


    request('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1af7acad75875839f06098421676974b', function (error, response, body) {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body); 
    });

    res.send({
        body: body
    });
});

module.exports = router;