<template>
  <div v-if="car" class="car">
  <p class="title">What Car: {{car.marka}}</p>
    <table class="table">
      <caption></caption>
      <tbody>
      <tr>
        <th>Model Car</th>
        <th>Year Car</th>
        <th>Engine Car</th>
        <th>Color Car</th>
        <th>Max speed Car</th>
        <th>Price Car</th>
      </tr>

      <tr>
      <td>{{car.model}}</td>
      <td>{{car.year_car}}</td>
      <td>{{car.engine_capacity}}</td>
      <td>{{car.color}}</td>
      <td>{{car.max_speed}}</td>
      <td>{{car.price}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Car',
  props: ['car']
}
</script>
<style scoped>
.car{
  text-align: center;
}

.table{
  width: 500px;
  margin: auto;
  border: 2px dashed red;
}


.table tr th{
  text-align: center;
   border: 2px solod pink;
}

.title{
  color: blue;
  font-size: 18px;
}
</style>
