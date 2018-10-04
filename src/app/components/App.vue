<template>
<div class="background">
    <nav class="navbar navbar-light bg-light">
        <a href="/" class="navbar-brand">OpenWeatherMap API</a>
    </nav>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-body">
                        <div class="form-group">
                            <select class="form-control" v-model="locationWeather">
                                <option value="lat=37,14114&lon=-2,780104">Álava</option>
                                <option value="lat=20,14114&lon=-5,780104">A Coruña</option>
                                <option value="lat=45,14114&lon=-2,780104">Albacete</option>
                                <option value="lat=20,14114&lon=4,780104">Alicante</option>
                                <option value="lat=11,14114&lon=-2,780104">Almería</option>
                                <option value="lat=11,14114&lon=-2,780104">Asturias</option>
                                <option value="lat=11,14114&lon=-2,780104">Ávila</option>
                                <option>Badajoz</option>
                                <option>Barcelona</option>
                                <option>Baleares</option>
                                <option>Burgos</option>
                                <option>Cáceres</option>
                                <option>Cádiz</option>
                                <option>Cantabria</option>
                                <option>Castellón</option>
                                <option>Ceuta</option>
                                <option>Ciudad Real</option>
                                <option>Córdoba</option>
                                <option>Cuenca</option>
                                <option>Girona</option>
                                <option>Granada</option>
                                <option>Guadalajara</option>
                                <option>Guipúzcoa</option>
                                <option>Huelva</option>
                                <option>Huesca</option>
                                <option>Jaén</option>
                                <option>La Rioja</option>
                                <option>Las Palmas</option>
                                <option>León</option>
                                <option>Lleida</option>
                                <option>Lugo</option>
                                <option>Madrid</option>
                                <option>Málaga</option>
                                <option>Melilla</option>
                                <option>Murcia</option>
                                <option>Navarra</option>
                                <option>Ourense</option>
                                <option>Palencia</option>
                                <option>Pontevedra</option>
                                <option>Salamanca</option>
                                <option>Santa Cruz de Tenerife</option>
                                <option>Segovia</option>
                                <option>Sevilla</option>
                                <option>Soria</option>
                                <option>Tarragona</option>
                                <option>Teruel</option>
                                <option>Toledo</option>
                                <option>Valencia</option>
                                <option>Valladolid</option>
                                <option>Vizcaya</option>
                                <option>Zamora</option>
                                <option>Zaragoza</option>
                                                                                            
                            </select><hr>
                            <button class="btn btn-primary" v-on:click="showTemperature()">Consult the temperature</button>

                        </div>
                    </div>
                </div>
            </div>
            <div>
              <p><strong>temperature:</strong>{{ temperature }}ºC</p>
              <p><strong>humidity:</strong>{{ humidity }}%</p>
              <p><strong>pressure:</strong>{{ pressure }}bar</p>
            


            </div>
          
        </div>

        <!--  -->

                <div class="row pt-5">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-body">
                        <div class="form-group">
                            <select class="form-control" v-model="locationPollution">
                                <option value="42,2">Álava</option>
                                <option value="60,15">A Coruña</option>
                                <option value="39,1">Albacete</option>
                                <option value="38,29">Alicante</option>
                                <option value="36,2">Almería</option>
                                <option>Asturias</option>
                                <option>Ávila</option>
                                <option>Badajoz</option>
                                <option>Barcelona</option>
                                <option>Baleares</option>
                                <option>Burgos</option>
                                <option>Cáceres</option>
                                <option>Cádiz</option>
                                <option>Cantabria</option>
                                <option>Castellón</option>
                                <option>Ceuta</option>
                                <option>Ciudad Real</option>
                                <option>Córdoba</option>
                                <option>Cuenca</option>
                                <option>Girona</option>
                                <option>Granada</option>
                                <option>Guadalajara</option>
                                <option>Guipúzcoa</option>
                                <option>Huelva</option>
                                <option>Huesca</option>
                                <option>Jaén</option>
                                <option>La Rioja</option>
                                <option>Las Palmas</option>
                                <option>León</option>
                                <option>Lleida</option>
                                <option>Lugo</option>
                                <option>Madrid</option>
                                <option>Málaga</option>
                                <option>Melilla</option>
                                <option>Murcia</option>
                                <option>Navarra</option>
                                <option>Ourense</option>
                                <option>Palencia</option>
                                <option>Pontevedra</option>
                                <option>Salamanca</option>
                                <option>Santa Cruz de Tenerife</option>
                                <option>Segovia</option>
                                <option>Sevilla</option>
                                <option>Soria</option>
                                <option>Tarragona</option>
                                <option>Teruel</option>
                                <option>Toledo</option>
                                <option>Valencia</option>
                                <option>Valladolid</option>
                                <option>Vizcaya</option>
                                <option>Zamora</option>
                                <option>Zaragoza</option>
                                                                                            
                            </select><hr>
                            <button class="btn btn-primary" v-on:click="showPollution()">Consult the pollution</button>

                        </div>
                    </div>
                </div>
            </div>
           
            <div>
                <p>CO{{  pollutionCo }}</p>
                <p>SO2{{  pollutionSo2 }}</p>
                <p>O3{{  pollutionO3 }}</p>
                <p>NO2{{  pollutionNo2 }}</p>


            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            weather: {},
            pollutionCo: [],
            pollutionSo2: [],
            pollutionO3: [],
            pollutionNo2: [],
            locationWeather: "",
            locationPollution: "",
            temperature: "",
            humidity: "",
            pressure: ""
        }
    },

    methods: {
        showPollution() {

            //Co
            axios.post('/api/weather/pollution/co', {
                location: this.locationPollution,
            })
            .then(response =>{
                this.pollutionCo = JSON.parse(response.data)
                console.log(this.pollutionCo)
            })
            .catch(error =>{
                console.log(error);
            })

            //So2
            axios.post('/api/weather/pollution/so2', {
                location: this.locationPollution,
            })
            .then(response =>{
                this.pollutionSo2 = JSON.parse(response.data)
                console.log(this.pollutionSo2)
            })
            .catch(error =>{
                console.log(error);
            })

            //o3
            axios.post('/api/weather/pollution/o3', {
                location: this.locationPollution,
            })
            .then(response =>{
                this.pollutionO3 = JSON.parse(response.data)
                console.log(this.pollutionO3)
            })
            .catch(error =>{
                console.log(error);
            })

            //No2
            axios.post('/api/weather/pollution/no2', {
                location: this.locationPollution,
            })
            .then(response =>{
                this.pollutionNo2 = JSON.parse(response.data)
                console.log(this.pollutionNo2)
            })
            .catch(error =>{
                console.log(error);
            })



        },

        showTemperature() {
         console.log(this.locationWeather)

            axios.post('/api/weather', {
                location: this.locationWeather
            })
            .then(response =>{

            this.weather = JSON.parse(response.data)
            this.temperature = parseInt(this.weather.main.temp - 273)
            this.humidity = this.weather.main.humidity
            this.pressure = this.weather.main.pressure/1000

            })
            .catch(error =>{
            console.log(error);
            })

        }
    },
  
}
</script>

<style>
    /* template {
        background-color: lightgrey;
    } */
</style>
