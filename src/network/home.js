
import {request} from "./request";

// 请求轮播图
export function getBannerDate(){
    return request({
        url:'/w/website/bannerList'
    })
};
// 请求分类
export function getcommdDate(){
    return request({
        url:'/w/website/findGoodsTypeList'
    })
};
// 请求商品分类查询
export function getHomeGoodsDate(info,pageNo){
    return request({
        url:'/w/website/findGoodsList',
        params:{
            platId :'d0a500ecf8ab41aa9ffe8e18ac6419e1',
            info,
            pageNo,
        }
    })
}