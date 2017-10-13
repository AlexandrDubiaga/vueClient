<template>
  <div class="title"> 
    <div>
    <loginForm></loginForm>
    </div>

                <select id="model"  class="form-control" v-model="model" >
                    <option value="">Model Car</option>
                    <option v-for="model in  options.models" :value="model.value">
                        {{model.title}}
                    </option>
                </select>

                <select id="color" class="form-control" v-model="color">
                    <option value="">Color Car</option>
                    <option v-for="color in  options.colors" :value="color.value">
                        {{color.title}}
                    </option>
                </select>

                    <select id="year" class="form-control" v-model="year">
                        <option value="">Year Car</option>
                        <option v-for="year in  options.years" :value="year.value">
                            {{year.title}}
                        </option>
                    </select>

                <select id="engine" class="form-control" v-model="engine">
                    <option value="">Engine Car</option>
                    <option v-for="engine in  options.engines" :value="engine.value">
                        {{engine.title}}
                    </option>
                </select>

                <select id="price" class="form-control" v-model="price">
                 <option value="">Price Car</option>
                 <option v-for="price in  options.prices" :value="price.value">
                    {{price.title}}
                </option>
                </select>
            <button id="clear" type="submit" v-on:click="greet()">Clear Filter</button>
          
    <div class="cars">
      <ul class="carsList" v-for="car in cars" >
        <li>
          <span class="carSpan btn" v-on:click="getCarById(car.car_id)">ID Car: {{car.car_id}} Brand: {{car.marka}}
            Model: {{car.model}}</span>
        </li>
      </ul>
    </div>
    <h6>Result</h6>
  <div class = "col-xs-6 col-md-5">
                <car  v-for="car in filteredProducts" :car="car" ></car>
            </div>     
    <car :car="car" ></car>
  </div>
</template>

<script>
import axios from 'axios'
import Car from './OneCar'

export default {
  name: 'AllCars',
    data() {
            return {
                errors: [],
                cars: [],
                car: '',
                checkUser: '',
                id: '',
                hash: '',
                model: '',
                year: '',
                engine: '',
                price: '',
                color: '',
                options: {
                    models: [
                        {
                            value:'Subaru',
                            title:'Subaru'
                        },
                        {
                            value:'Honda',
                            title:'Honda'
                        },
                        {
                            value:'Toyota',
                            title:'Toyota'
                        },
                        {
                            value:'Ferrary',
                            title:'Ferrary'
                        },
                        {
                            value:'Lexus',
                            title:'Lexus'
                        },
                        {
                            value:'Scuter',
                            title:'Scuter'
                        },
                        {
                            value:'Porshe',
                            title:'Porshe'
                        },
                    ],
                    engines: [
                        {
                            value:'2000',
                            title:'2000'
                        },
                        {
                            value:'1500',
                            title:'1500'
                        },
                        {
                            value:'6000',
                            title:'6000'
                        }
                    ],
                    years: [
                        {
                            value:'1987',
                            title:'1987'
                        },
                        {
                            value:'2000',
                            title:'2000'
                        },
                        {
                            value:'2003',
                            title:'2003'
                        }
                    ],
                    colors: [
                        {
                            value:'Fiolet',
                            title:'Fiolet color'
                        },
                        {
                            value:'Blue',
                            title:'Blue color'
                        },
                        {
                            value:'Green',
                            title:'Green color'
                        },
                    ],
                    prices: [
                        {
                            value:'5000',
                            title:'5000 E'
                        },
                        {
                            value:'10000',
                            title:'10000 $'
                        },
                        {
                            value:'8000',
                            title:'8000 $'
                        },
                        {
                            value:'2000',
                            title:'2000 $'
                        },
                    ],
                }
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
        
            .then(function (response) {
               console.log(response)
            self.car = response.data[0]            
        })
    },
  },
  
        computed: {
            filteredProducts () {
                var self = this
                var checkEngine = (el) => {
                    if (self.engine_capacity == "") return true
                    if (el.engine_capacity.indexOf(self.engine_capacity) != -1) return true
                    return false
                }
                var checkYear = (el) => {
                    if (self.year_car == "") return true
                    if (el.year_car.indexOf(self.year_car) != -1) return true
                    return false
                }
                var checkModel = (el) => {
                    if (self.model == "") return true
                    if (el.model == self.model) return true
                    return false
                }
                var checkColor = (el) => {
                    if (self.color == "") return true
                    if (el.color == self.color) return true
                    return false
                }
                var checkPrice = (el) => {
                    if (self.price == "") return true
                    if (el.price == self.price) return true
                    return false
                }
                var ressultArr = [];
                this.ressultArr = this.cars
                var result = this.cars.filter((el,k) => {
                    el.key = k;
                return checkEngine(el) && checkModel(el) && checkColor(el) && checkYear(el) && checkPrice(el)
            })
                return result;
            }
        },

  created(){
    this.getAllCars()
    this.getCarById()
  },
  components: {
    'Car': Car,

  }
}
</script>
<style scoped>
.cars{
 float: left;
 width: 300px;
 height: 200px;
 border:2px solid red;
}

.carsList li{
  list-style-type: none;
  
}

.carSpan{
  border-color: blue;
  margin-bottom: 2px;
}
.title{
  width: 1000px;
}
</style>

