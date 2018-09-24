<template>
<div>
    <nav class="navbar navbar-light bg-light">
        <a href="/" class="navbar-brand">OpenWeatherMap API</a>
    </nav>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-body">
                        <button class="btn btn-primary" v-on:click="showData()">Show data</button>
                        
                    </div>
                </div>
            </div>
                <p>{{  weather }}</p>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            weather: []
        }
    },

    methods: {
        showData() {

            var weatherLondon = [];

                axios.get('/api/weather')
                .then(response =>{
                // this.weatherLondon = response.data
                this.weather = response.data
                // console.log(this.weatherLondon)
                })
                .catch(error =>{
                console.log(error);
                })

        // axios.get('/api/weather')
        //     .then(function (response) {
        //         // handle success
               
        //         weatherLondon = response.data.body
        //         console.log(weatherLondon)
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        }
    }
}
</script>

