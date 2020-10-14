<template>
  <div class="addshop" @click="addshop">
      加入购物车
  </div>
</template>

<script>
export default {
    name:'addshop',
    methods: {
        addshop(){
           this.$emit("addCart");
        }
    },
}
</script>

<style lang="scss" scoped>
.addshop{
    width: 100%;
    height: 40px;
    background-color: aliceblue;
    line-height: 40px;
    text-align: center;
    color: blue;
}

</style>