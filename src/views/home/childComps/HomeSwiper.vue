<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <img :src="item.img" alt="" @load="bannerImgLoad" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  data() {
    return {
      imageLoadStaus:false,
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  props:{
      banners:{
          type:Array,
          default() {
              return []
          }
      }
  },
  methods: {
    bannerImgLoad(){
      if(!this.imageLoadStaus){
      this.$emit('swiperImageLoad');
        this.imageLoadStaus = true;
      }
    }
  },
};
</script>

<style>
</style>