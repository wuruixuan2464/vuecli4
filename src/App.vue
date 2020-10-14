<template>
  <div id="nav">
    <main-view></main-view>
   
    <router-view v-slot="{ Component }">
      <keep-alive include="Home">
        <component class="view" :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
//屏幕适应
(function (win, doc) {
  if (!win.addEventListener) return;
  var html = document.documentElement;
  function setFont() {
    var html = document.documentElement;
    var k = 640;
    html.style.fontSize = (html.clientWidth / k) * 100 + "px";
  }
  setFont();
  setTimeout(function () {
    setFont();
  }, 300);
  doc.addEventListener("DOMContentLoaded", setFont, false);
  win.addEventListener("resize", setFont, false);
  win.addEventListener("load", setFont, false);
})(window, document);
import mainView from "components/content/mainView.vue";

export default {
  components: {
    mainView,
  },
};
</script>
<style lang="scss">
@import "./assets/css/reset.css";
</style>
