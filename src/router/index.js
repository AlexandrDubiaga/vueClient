import Vue from 'vue'
import Router from 'vue-router'
import AllCars from '@/components/AllCars'
//import Registration from '@/components/Registration'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cars',
      component: AllCars
    }
  ]
})
