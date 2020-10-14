<template>
  <div id="tabbar">
   <slot></slot>
  </div>
</template>

<script>

export default {
  name: "TabBar",
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
#tabbar {
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-shadow: 0px -3px 1px rgba($color: #000000, $alpha: 0.04);
}

</style>

