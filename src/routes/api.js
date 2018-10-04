const express = require('express');
const router = express.Router();
const request = require('request');



// router.get('/', (req, res) => {
    
//     var location = req.body.location
//     console.log(location)
//     request('http://api.openweathermap.org/data/2.5/weather?q=Madrid/current.json?appid=67b36f3da0c8141f7ff48223fe715160', function (error, response, body){
//     console.log('error:', error);
//     res.json(body);

//     }); 
// });

router.post('/', (req, res) => {
    
    var location = req.body.location
    //Aquí le tenemos que pasar las coordenadas lat & lon a diferencia de la API Pollution que es ej. 41,12
    request('http://api.openweathermap.org/data/2.5/weather?' + location + '&appid=67b36f3da0c8141f7ff48223fe715160', function (error, response, body) {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body); 
    res.json(body);
    });

});

router.post('/pollution/co', (req, res) => {
    
    var location = req.body.location


        request('http://api.openweathermap.org/pollution/v1/co/' + location + '/current.json?appid=67b36f3da0c8141f7ff48223fe715160', function (error, response, body) {
            console.log('error:', error); 
            console.log('statusCode:', response && response.statusCode); 
            console.log('body:', body); 
            res.json(body);
            });
});

router.post('/pollution/no2', (req, res) => {
    
    var location = req.body.location


        request('http://api.openweathermap.org/pollution/v1/no2/' + location + '/current.json?appid=67b36f3da0c8141f7ff48223fe715160', function (error, response, body) {
            console.log('error:', error); 
            console.log('statusCode:', response && response.statusCode); 
            console.log('body:', body); 
            res.json(body);
            });
});
 

router.post('/pollution/o3', (req, res) => {
    
    var location = req.body.location


        request('http://api.openweathermap.org/pollution/v1/o3/' + location + '/current.json?appid=67b36f3da0c8141f7ff48223fe715160', function (error, response, body) {
            console.log('error:', error); 
            console.log('statusCode:', response && response.statusCode); 
            console.log('body:', body); 
            res.json(body);
            });
});

router.post('/pollution/so2', (req, res) => {
    
    var location = req.body.location


        request('http://api.openweathermap.org/pollution/v1/so2/' + location + '/current.json?appid=67b36f3da0c8141f7ff48223fe715160', function (error, response, body) {
            console.log('error:', error); 
            console.log('statusCode:', response && response.statusCode); 
            console.log('body:', body); 
            res.json(body);
            });
});




module.exports = router;