<template>
  <div class="goods">
     <goodsnews-item v-for="(item,index) in goods" :key="index" :goodsitem="item" />
  </div>
</template>

<script>
import GoodsnewsItem from './GoodsnewsItem'
export default {
    name:'Goodsnews',
    components:{
      GoodsnewsItem,
    },
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
}
</script>

<style lang="scss" scoped>
.goods{
  display: -webkit-flex;
    display: flex;
    position: relative;
    box-sizing: border-box;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    place-content: flex-start space-between;
    flex-shrink: 0;
    overflow: hidden;
    -webkit-box-pack: justify;
    -webkit-box-lines: multiple;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 7.5px;
    background: #f2f2f2;
    padding-bottom: 12px;
}

</style>