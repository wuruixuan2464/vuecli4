<template>
  <div class="goods-box" @click="itemClick">
    <img :src="goodsitem.pict_url" alt="" @load="loadChange" />
    <div class="goods-info">
      <p class="goods-title">{{ goodsitem.title }}</p>
      <span class="goods-pic">￥{{ goodsitem.zk_final_price }}</span>
      <span class="goods-vlm">月销量{{ goodsitem.volume }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsnewsItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    loadChange() {
      this.$store.commit("imageLoad");
    },
    itemClick() {
      // 点击跳转详情页  传商品id
      this.$router.push({
        path: "/detail",
        query: {
          id: this.goodsitem.item_id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.goods-box {
  height: 260px;
  position: relative;
  width: 47%;
  box-sizing: border-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  background: #fff;
  margin-top: 9px;
  border-radius: 6px;
  overflow: hidden;
  margin-left: 4.5px;
  margin-right: 4.5px;
  img {
    width: 100%;
    height: 70%;
  }
  .goods-info {
    padding-left: 10px;
    padding-right: 9px;
    height: 94.00000000000001px;
    text-decoration: none;
    .goods-title {
      margin-top: 11.499999999999998px;
      height: 37px;
      position: relative;
      overflow: hidden;
      line-height: 18.5px;
      text-overflow: ellipsis;
      min-height: 0;
      font-size: 13.000000000000004px;
      color: #333333;
    }
    .goods-pic {
      font-size: 14px;
      line-height: 16.000000000000004px;
      color: #ff5500;
    }
    .goods-vlm {
      font-size: 11px;
      color: #999999;
      margin-top: 2.0000000000000004px;
      margin-left: 10px;
    }
  }
}
</style>