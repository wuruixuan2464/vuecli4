<template>
  <div>
      购物车
      {{$store.state.cont}}
    <button @click="add()">++</button>
    <button @click="sub()">--</button>
  </div>
</template>

<script>
  import axios from 'axios'
  axios({
    url:'http://123.207.32.32:8000/home/multidata'
  }).then(res =>{
    console.log(res);
  })
    axios({
    url:'http://123.207.32.32:8000/home/data',
    params:{
      type:'pop',
      page:1
    }
  }).then(res =>{
    console.log(res);
  })
export default {
    name:'Shop',
    methods: {
      add(){
        this.$store.commit('increment')
      },
      sub(){
        this.$store.commit('decrement')
      }
    },
}
</script>

<style>

</style>