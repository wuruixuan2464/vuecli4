<template>
  <div id="home">
    <back-top @click.native="backclick" v-show="isShowBackTop"></back-top>
    <!-- 头 -->
    <nav-bar>
      <template v-slot:center>
        <div>splendid mall</div>
      </template>
    </nav-bar>
    <tab-control
      @changeTab="changeTab"
      class="tab-control1"
      :titles="['流行', '新款', '潮流']"
      v-show="isFlexTabControl"
      ref="tabControl1"
    ></tab-control>

    <!-- v-show="isFlexTabControl" -->
    <scroll
      ref="scroll"
      :probeType="3"
      :listenScroll="true"
      @scroll="listenscr"
      :pullup="true"
      @scrollToEnd="scrollUpDate"
    >
      <div class="cont">
        <!-- ul>li{122}*100 -->
        <!-- 轮播 -->
        <div class="banner">
          <home-swiper
            :banners="bannerList"
            @swiperImageLoad="swiperImageLoad"
          ></home-swiper>
        </div>
        <!-- 分类 -->
        <!-- <home-recommd :recommd="commdList"></home-recommd> -->
        <!-- tab -->
        <tab-control
          @changeTab="changeTab"
          class="tab-control"
          :titles="['流行', '新款', '潮流']"
          ref="tabControl"
        ></tab-control>
        <goodsnews :goods="showGoods"></goodsnews>
      </div>
    </scroll>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar";
import TabControl from "components/content/TabControl";
import Goodsnews from "components/content/goods/Goodsnews";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommd from "./childComps/HomeRecommd";

import { getBannerDate, getcommdDate, getHomeGoodsDate } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      control: 0,
      isShowBackTop: false,
      isFlexTabControl: false,
      bannerList: [],
      commdList: [],
      goodstab: "9.9",
      goods: {
        9.9: {
          page: 1,
          list: [],
        },
        clothes: {
          page: 1,
          list: [],
        },
        featured: {
          page: 1,
          list: [],
        },
      },
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.goodstab].list;
    },
  },
  methods: {
    debounce(func, time) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, time);
      };
    },
    // 事件监听相关
    swiperImageLoad() {
      if (this.$refs.tabControl) {
        this.control = this.$refs.tabControl.$el.offsetTop;
        console.log(this.control);
      }
    },
    listenscr(e) {
      this.isShowBackTop = -1000 >= e.y;
      // 加上元素高度
      this.isFlexTabControl = -this.control + 44 >= e.y;
    },
    backclick() {
      this.$refs.scroll && this.$refs.scroll.scrollTo(0, 0, 500);
    },
    changeTab(e) {
      switch (e) {
        case 0:
          this.goodstab = "9.9";
          break;
        case 1:
          this.goodstab = "clothes";
          break;
        case 2:
          this.goodstab = "featured";
          break;
      }
      this.$nextTick(()=> {
        this.$refs.tabControl1.staus = e;
        this.$refs.tabControl.staus = e;
      });

      //  = e
      // this.$refs.tabControl1.staus = e
    },
    // 网络请求相关
    scrollUpDate() {
      this.getgoods(this.goodstab);
    },
    getbanner() {
      getBannerDate().then((res) => {
        this.bannerList = res.data;
      });
    },
    getlist() {
      getcommdDate().then((res) => {
        this.commdList = res.data;
      });
    },
    getgoods(info) {
      const page = this.goods[info].page + 1;
      getHomeGoodsDate(info, page).then((res) => {
        console.log(res);
        this.goods[info].list.push(
          ...res.data.tbk_dg_material_optional_response.result_list.map_data
        );
        this.goods[info].page++;
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.scroll && this.$refs.scroll.refresh();
    });
  },
  created() {
    this.getbanner();
    this.getlist();

    this.getgoods("9.9");
    this.getgoods("clothes");
    this.getgoods("featured");
  },
  // 监听img加载事件
  watch: {
    "$store.state.cons": function () {
      this.$refs.scroll.refresh();
    },
  },
  components: {
    navBar,
    TabControl,
    Scroll,
    Goodsnews,
    BackTop,
    HomeSwiper,
    HomeRecommd,
  },
};
</script>

<style lang="scss" scoped>
#home {
  color: aliceblue;
  font-weight: 600;
  font-size: 18px;
  height: 100vh;
}
.nav-bar {
  background-color: #1296db;
}
.banner {
  width: 100%;
}
.tab-control1 {
  position: absolute;
  width: 100%;
  z-index: 10;
}
.wrapper {
  height: calc(100% - 93px);
  overflow: hidden;
}
.fixed {
  background-color: red;
  position: fixed;
}
</style>