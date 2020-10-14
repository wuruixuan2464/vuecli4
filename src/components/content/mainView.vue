<template>
      <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-text>
          <div>首页</div>
        </template>
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/home.png" />
        </template>
        <template v-slot:item-icon-act>
          <img src="~assets/img/tabbar/home-cur.png" />
        </template>
      </tab-bar-item>
      <tab-bar-item path="/fenlei">
        <template v-slot:item-text>
          <div>分类</div>
        </template>
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/fenlei.png" />
        </template>
        <template v-slot:item-icon-act>
          <img src="~assets/img/tabbar/fenlei-cur.png" />
        </template>
      </tab-bar-item>
      <tab-bar-item path="/shop">
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/shop.png" />
        </template>
        <template v-slot:item-icon-act>
          <img src="~assets/img/tabbar/shop-cur.png" />
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-text>
          <div>我的</div>
        </template>
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/profile.png" />
        </template>
        <template v-slot:item-icon-act>
          <img src="~assets/img/tabbar/profile-cur.png" />
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
    components: {
    TabBar,
    TabBarItem,
  },
}
</script>

<style>

</style>