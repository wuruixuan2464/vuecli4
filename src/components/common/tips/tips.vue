<template>
  <div class="tips" v-show="show">
      {{msg}}
  </div>
</template>

<script>
export default {
    name:'tips',
    props:{
        msg:{
            type:String,
            default:'',
        },
        show:{
            type:Boolean,
            default:false,
        }
    }
}
</script>

<style>
    .tips{
        position: fixed;
        top: 50%;
        left: 50%;
        background-color: rgba(0,0,0, .5);
        width: 30%;
        text-align: center;
        line-height: 18px;
        font-size: 18px;
        color: white;
        padding: 10px;
        transform: translate(-50% , -50%);
        border-radius: 5px;
    }
</style>