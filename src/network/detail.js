import {request} from "./request";
// 详情页查询
export function getdetail(e){
    return request({
        url:'/w/website/findGoodsDetail',
        params:{
            info:e
        }
    })
}