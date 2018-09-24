<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Weather App'
    }
  },
  methods: {
    created() {
			// Calling internal API with axios request
	  	axios.get(`localhost:3000/api/weather`)
	    	.then(response => {
	      	// JSON responses are automatically parsed.
	      	this.weather = response.data
	      })
		    .catch(e => {
		      this.errors.push(e)
		    })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
