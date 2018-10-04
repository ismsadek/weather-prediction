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
                            <button class="btn btn-primary" v-on:click="showTemperature()">Consult the temperature</button>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p>{{  weather }}</p>
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
                <p>{{  pollution }}</p>
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
            weather: [],
            pollution: [],
            locationWeather: "",
            locationPollution: ""
        }
    },

    methods: {
        showPollution() {

            axios.post('/api/weather/pollution', {
                location: this.locationPolltion,
            })
            .then(response =>{
                this.pollution = response.data
                console.log(this.pollution)
            })
            .catch(error =>{
                console.log(error);
            })



        },

        showTemperature() {
            axios.post('/api/weather', {
                location: this.locationWeather
            })
            .then(response =>{
            this.weather = response.data
            console.log(response)
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
