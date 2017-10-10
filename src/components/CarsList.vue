<template>
  <div class="title">
    <div>
    </div>
    <div class="cars">
      <ul class="carsList" v-for="car in cars" >
        <li>
          <span class="carSpan btn" v-on:click="getCarById(car.car_id)">ID: {{car.car_id}} Brand: {{car.marka}}
            Model: {{car.model}}</span>
        </li>
      </ul>
    </div>
   
  </div>
</template>

<script>
import axios from 'axios'
import Car from './Car'
//import Login from './Login'

export default {
  name: 'CarsList',
  data () {
    return {
      car: '',
      cars: []
    }
  },
  methods: {
    getAllCars: function(){
      var self = this
     axios.get('http://192.168.0.15/~user2/REST/client/api/cars/')
            .then(function (response) {
            self.cars = response.data
        })
    },
    getCarById: function($id){
      var self = this
     axios.get('http://192.168.0.15/~user2/REST/client/api/cars/' + $id)
          // 
            .then(function (response) {
            self.car = response.data[0]            
        })
    }
  },

  created(){
    this.getAllCars()
    this.getCarById(1)
  },
  components: {
    'Car': Car,
   // 'loginForm': Login
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cars{
 float: left;
 width: 300px;
 height: 200px;
}

.carsList li{
  list-style-type: none;
}

.carSpan{
  border-color: darkblue;
  margin-bottom: 2px;
}
.title{
  width: 1000px;
}
</style>
