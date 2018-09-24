const express = require('express');
const router = express.Router();

const request = require('request');


router.get('/', async (req, res) => {
        //Aquí va la url de openweathermap con la key 

    request('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1af7acad75875839f06098421676974b', function (error, response, body) {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode); 
        console.log('body:', body); 
        // res.json(body);
        res.send({
            body: body
        });

        });
        
       
});






module.exports = router;