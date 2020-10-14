<template>
  <div id="detail">
    <div>{{$store.state.carlist}}</div>
    <detail-nav-bar />
    <scroll  ref="scroll">
        <div class="scr-cont">
           <detail-swiper :topImage="topImage"></detail-swiper>
            <detail-info :detailinfo="dinfo"></detail-info>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <div>参数11111111111111111111111111111111111111111111</div>

          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
       
    </scroll>
    <addshop @addCart="addToCart"></addshop>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/detailNavBar.vue";
import DetailSwiper from "./childComps/detailSwiper.vue";
import DetailInfo from "./childComps/detailInfo.vue";
import addshop from "./childComps/addshop.vue";

import Scroll from "components/common/scroll/Scroll";

import { getdetail } from "network/detail.js";
export default {
  name: "Detail",
  data() {
    return {
      itemId: null,
      topImage: [],
      dinfo: {},
    };
  },
  methods: {
    addToCart(){
      const shopinfo = {}
      shopinfo.image = this.dinfo.pict_url
      shopinfo.title = this.dinfo.title
      shopinfo.pric = this.dinfo.zk_final_price
      shopinfo.id = this.dinfo.num_iid

      this.$store.dispatch('addCart' , shopinfo)
      // this.$store.commit('addCart' , shopinfo)
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailInfo,
    Scroll,
    addshop,
  },
 mounted() {
    this.$nextTick(() => {
      this.$refs.scroll && this.$refs.scroll.refresh();
    });
    console.log( this.$refs.scroll)
  },
  updated() {
       this.$nextTick(() => {
      this.$refs.scroll && this.$refs.scroll.refresh();
    });
  },
  created() {
    // 拿到商品id
    this.itemId = this.$route.query.id;
    getdetail(this.itemId).then((res) => {
      console.log(res);
      this.dinfo =
        res.data.detail.tbk_item_info_get_response.results.n_tbk_item[0];
      this.topImage =
        res.data.detail.tbk_item_info_get_response.results.n_tbk_item[0]
          .small_images.string ||
        res.data.detail.tbk_item_info_get_response.results.n_tbk_item[0]
          .pict_url;
    });
  },
};
</script>

<style lang="scss" scoped>
#detail {
  background-color: rgb(248, 248, 248);
  position: relative;
  z-index: 99;
  height: 100vh;
  .wrapper {
    height: calc(100% - 93px);
    overflow: hidden;
  }
}
</style>