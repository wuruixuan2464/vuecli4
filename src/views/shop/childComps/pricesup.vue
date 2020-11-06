<template>
  <div class="bottomPrice">
    <span class="button">结算({{ $store.state.carlist.length }})</span>
    <span>总计￥{{ pricefn }}</span>
  </div>
</template>

<script>
export default {
  name: "pricesup",
  data() {
    return {
      price: 0,
    };
  },
  computed: {
    pricefn() {
      return this.$store.state.carlist
        .reduce((preValue, item) => {
          return preValue + item.pric * item.cont;
        }, 0)
        .toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
.bottomPrice {
  position: fixed;
  width: 100%;
  bottom: 0px;
  line-height: 49px;
  z-index: 11;
  height: 49px;
  background-color: white;
  span {
    display: block;
    float: right;
    font-size: 14px;
    margin-right: 10px;
  }
  .button {
    width: 60px;
    background-color: red;
    text-align: center;
    color: white;
  }
}
</style>