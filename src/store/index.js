import { createStore } from 'vuex'

export default createStore({
  state: {
    cons :1,
    carlist:[]
  },
  mutations: {
    imageLoad(state){
      // 记录加载多少图片
      state.cons++;
    },
   addnewcart(state,shopinfo){
    state.carlist.push(shopinfo)
   },
   addoldcart(state,shopinfo){
     shopinfo.cont++;
   },
   delshop(e,index){
      console.log(e,index);
      e.carlist.splice(index,1);
   }
  },
  actions: {
    addCart(context, shopinfo ){
      let product = context.state.carlist.find((item)=>item.id === shopinfo.id)
      if(product){
        context.commit('addoldcart' ,product)
      }else{
        shopinfo.cont = 1;
        context.commit('addnewcart' ,shopinfo)
      }
    }
  },
  modules: {
  }
})
