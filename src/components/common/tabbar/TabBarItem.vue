<template>
  <div class="tab-bar-class" @click="itemClick">
    <div v-if="status">
      <slot name="item-icon-act"></slot>
    </div>
    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    <div :class={curr:!status}>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
    };
  },
  computed: {
      status(){
          return this.$route.path.indexOf(this.path);
      }
  },
  props: {
    path: String,
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style lang="scss">
.tab-bar-class {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #838e8d;
  img {
    display: block;
    margin: 0 auto;
    width: 30px;
    height: 30px;
  }
  .curr{
      color: #1296DB;
  }
}
</style>
