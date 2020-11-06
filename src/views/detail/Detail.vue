<template>
  <div id="detail" ref="detail" v-show="havedate">
    <!-- <div>{{$store.state.carlist}}</div> -->
    <detail-nav-bar />
    <scroll ref="scroll">
      <div class="scr-cont">
        <detail-swiper :topImage="topImage"></detail-swiper>
        <detail-info :detailinfo="dinfo"></detail-info>
      </div>
    </scroll>
    <addshop @addCart="addToCart"></addshop>
    <tips :msg="msg" :show="show"></tips>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/detailNavBar.vue";
import DetailSwiper from "./childComps/detailSwiper.vue";
import DetailInfo from "./childComps/detailInfo.vue";
import addshop from "./childComps/addshop.vue";

import Scroll from "components/common/scroll/Scroll";
import Tips from "components/common/tips/tips";

import { getdetail } from "network/detail.js";
export default {
  name: "Detail",
  data() {
    return {
      itemId: null,
      topImage: [],
      dinfo: {},
      show: false,
      havedate: false,
      msg: "加入购物车成功！",
    };
  },
  methods: {
    addToCart() {
      const shopinfo = {};
      let _this = this;
      shopinfo.image = this.dinfo.pict_url;
      shopinfo.title = this.dinfo.title;
      shopinfo.pric = this.dinfo.zk_final_price;
      shopinfo.id = this.dinfo.num_iid;

      this.$store.dispatch("addCart", shopinfo);
      this.show = true;
      setTimeout(function () {
        _this.show = false;
      }, 1000);
      // this.$store.commit('addCart' , shopinfo)
    },
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailInfo,
    Scroll,
    addshop,
    Tips,
  },
  mounted() {
    if (this.topImage) {
   this.$nextTick(() => {
      this.havedate = true;
    });
    }
    // this.$nextTick(() => {
    //   this.havedate = true;
    // });
    let _this = this;
  },
  updated() {},
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
[v-cloak] {
  display: none;
}
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