<template>
  <swiper>
    <swiper-item v-for="(item, index) in topImage" :key="index">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>

.slide{
    height: 300px;
    img{
        width: 100%;
        height: 300px;
    }
}
</style>