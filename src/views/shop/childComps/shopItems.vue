<template>
  <div id="cartshop">
    <div v-if="$store.state.carlist.length !== 0">
      <div
        class="shopItem"
        v-for="(item, index) in $store.state.carlist"
        :key="index"
      >
        <img class="shopItemImage" :src="item.image" alt="" />
        <p class="shopItemTitle">{{ item.title }}</p>
        <div class="bottomItem">
          <span class="shopItemPric">￥{{ (item.pric * item.cont).toFixed(2) }}</span>
          <span class="shopItemNum">{{ item.cont }}个</span>
          <span class="del" @click="del(index)">删除</span>
        </div>
      </div>
       <pricesup></pricesup>
    </div>
    <div v-else class="noinfo">
        购物车空空如也，快去添加商品吧！
    </div>
  </div>
</template>

<script>
import pricesup from "./pricesup";

export default {
  name: "shopItems",
  created() {
    console.log(this.$store.state.carlist);
  },
  components:{
    pricesup,

  },
  methods: {
    del(e) {
      console.log(e);
      this.$store.commit("delshop", e);
    },
  },
  filters: {
    filterpic(e) {
      //   var result = e * ;
      //   if (e > 10000) {
      //     result = (result / 10000).toFixed(1) + "万";
      //   }
      //   return result;
    },
  },
};
</script>

<style lang="scss" scoped>
#cartshop{
    height: calc(100% - 93px);
    overflow-y: hidden;
}
.noinfo{
    position: fixed;
    width: 100%;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
}
.shopItem {
  display: flex;
  background-color: white;
  z-index: 10;
  position: relative;
  box-sizing: border-box;
  padding: 10px 20px;
  margin-top: 10px;
  width: 100%;
  height: 130px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  .shopItemImage {
    width: 100px;
    height: 110px;
    padding-right: 10px;
  }
  .bottomItem {
    position: absolute;
    bottom: 15px;
    right: 20px;
  }
  .shopItemTitle {
    font-size: 14px;
    line-height: 18px;
  }
  .shopItemPric {
    margin-right: 10px;
  }
  .shopItemNum {
    margin-right: 10px;
  }
  .del {
    color: red;
  }
}
</style>