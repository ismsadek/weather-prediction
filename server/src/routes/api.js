const express = require('express');
const router = express.Router();

const request = require('request');


router.get('/', async (req, res) => {
        //Aquí va la url de openweathermap con la key 

    request('', function (error, response, body) {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode); 
        console.log('body:', body); 
        });
    
        res.send({
            success: true,
            message: "llamada get correcta"
        });
});






module.exports = router;