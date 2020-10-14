<template>
  <div class="backtop">
      <img src="~assets/img/common/back_top.png" alt="">
  </div>
</template>

<script>
export default {
    name:'bakcTop',
}
</script>

<style lang="scss" scope>
    .backtop{
        position: fixed;
        right: 10px;
        bottom: 60px;
        z-index: 100;
           width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            background-color: aliceblue;
        img{
            width: 40px;
            height: 40px;
        }
    }
</style>