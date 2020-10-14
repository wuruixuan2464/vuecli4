<template>
  <div class="recommd">
    <div class="recommd-list" v-for="(item, index) in recommd" :key="index">
      <div class="img-box">
        <img :src="item.icon" alt="" />
      </div>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommd",
  props: {
    recommd: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.recommd {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
  .recommd-list {
    width: 30%;
    height: 130px;
    border: 1px solid #cccccc;
    background-color: #F8F8F8;
    .img-box {
      width: 100%;
      height: 100px;
    }
    img {
      width: 100%;
      height: 100%;
    }
    span {
      color: black;
      font-size: 18px;
      text-align: center;
      display: block;
    }
  }
}
</style>