<template>
  <div class="dinfo" v-show="overinfo">
    <p class="price"><span>￥</span>{{ detailinfo.zk_final_price }}</p>
    <p class="price-rev"><span>价格￥</span> {{ detailinfo.reserve_price }}</p>
    <div class="title-de">
      {{ detailinfo.title }}
    </div>
    <div class="by-info">
      <ul>
        <li>快递包邮</li>
        <li>月销{{ detailinfo.volume }}</li>
        <li>{{ detailinfo.provcity }}</li>
      </ul>
    </div>
    <div class="deimg">
      <img :src="detailinfo.pict_url" alt="" />

      <!-- <img v-for="(item,index) in detailinfo.small_images.string || detailinfo.pict_url" :key="index" :src= item alt=""> -->
    </div>
    <div class="kk"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overinfo: false,
    };
  },
  created() {},
  mounted() {
    if (this.detailinfo) {
      this.overinfo = true;
    }
  },
  filters: {
    // filterinfo(e) {
    //   var result = e;
    //   if (e > 10000) {
    //     result = (result / 10000).toFixed(1) + "万";
    //   }
    //   return result;
    // },
  },
  props: {
    detailinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.dinfo {
  background-color: white;
  padding: 0 10px 0 10px;
  .title-de {
    position: relative;
    display: flex;
    margin-top: 4px;
    height: auto;
    width: 331px;
    font-size: 16px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0);
    color: rgb(51, 51, 51);
    font-weight: bold;
    visibility: visible;
    justify-content: flex-start;
    -webkit-box-pack: start;
    align-items: center;
    -webkit-box-align: center;
    max-width: none;
  }
  .price-rev {
    text-decoration: line-through;
  }
  .price {
    color: #ff5000;
    padding-top: 20px;
    font-size: 24px;
    margin-right: 5px;
    line-height: 30px;
    height: 30px;
    span {
      font-size: 18px;
      margin-right: 5px;
      vertical-align: top;
      line-height: 30px;
    }
  }
}
.by-info {
  display: flex;
  padding-top: 20px;
  color: rgb(153, 153, 153);
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
.deimg {
  img {
    width: 100%;
    height: 100%;
  }
}
.kk {
  height: 1000px;
}
</style>