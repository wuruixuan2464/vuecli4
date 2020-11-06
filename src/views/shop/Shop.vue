<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="back">
         返回>
            
        </div>
      </template>
      <template v-slot:center>
        <div class="shoptitle">购物车</div>
        
      </template>
    </nav-bar>
    <shop-items> </shop-items>
   
  </div>
</template>

<script>
import shopItems from "./childComps/shopItems";
import navBar from "components/common/navbar/navBar";
export default {
  name: "Shop",
  created() {
    console.log(this.$store.state.carlist);
  },
  methods: {
     back(){
        this.$router.back();
    }
  },
  components: {
    shopItems,
    navBar,
  },
};
</script>

<style lang="scss" scoped>
.shoptitle {
    
}
.back{
    width: 60px;
    height: 44px;
}
</style>