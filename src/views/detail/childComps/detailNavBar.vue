<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="back">
            <svg t="1601962256013" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3302" width="40" height="40"><path d="M316.8 514.8c-4.1 0-8.2-1.6-11.2-4.9-5.6-6-5.1-15.4 1.1-20.9L690 148.6c6.2-5.5 15.7-5 21.3 1 5.6 6 5.1 15.4-1.1 20.9L326.9 511c-2.8 2.5-6.5 3.8-10.1 3.8z" fill="#707070" p-id="3303"></path><path d="M700.2 855c-3.6 0-7.2-1.3-10.1-3.8L306.7 511c-6.2-5.5-6.6-14.8-1.1-20.9 5.6-6 15.1-6.5 21.3-1l383.3 340.3c6.2 5.5 6.6 14.8 1.1 20.9-3 3.1-7 4.7-11.1 4.7z" fill="#707070" p-id="3304"></path></svg>
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <span
            v-for="(item, index) in detaillist"
            :key="index"
            :class="{ active: index == listIndex }"
            @click="changetitle(index)"
            class="item-title"
          >
            {{ item }}
          </span>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/navBar.vue";

export default {
  name: "detailNavBar",
  data() {
    return {
      detaillist: ["商品", "参数", "评论", "推荐"],
      listIndex: 0,
    };
  },
  methods: {
    changetitle(e) {
      this.listIndex = e;
    },
    back(){
        this.$router.back();
    }
  },
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/bgcolor.scss";

.title {
  display: flex;
}
.item-title {
  flex: 1;
}
.active {
  color: $b;
}
.back{
    width: 60px;
    height: 44px;
}
</style>