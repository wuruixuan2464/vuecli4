<template>
  <div class="tab-control">
    <div
      class="tab-box"
      :class="{ tabcurr: staus === index }"
      v-for="(item, index) in titles"
      :key="index"
      @click="changeTab(index)"
    >
      <span>
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      staus: 0,
    };
  },
  methods: {
    changeTab(e) {
      this.staus = e;
      this.$emit("changeTab" ,e);
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scope>
.tab-control {
  box-shadow: 1px 0px 1px rgba(0, 0, 0, .5);
  display: flex;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  transition: all .5s;
}

.tab-box {
  display: block;
  flex: 1;
  text-align: center;
  color: black;
  font-size: 14px;
  padding: 3px;
}
.tabcurr {
  color: #1296db;
  span {
    border-bottom: 2px solid #1296db;
  }
}
</style>