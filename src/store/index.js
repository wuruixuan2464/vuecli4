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
