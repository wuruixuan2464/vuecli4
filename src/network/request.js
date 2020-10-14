import axios from 'axios'
// 封装请求
export function request(config,success,failure){
   //create axios
    const instance = axios.create({
        baseURL:'/api',
        timeout:30000,
    });
    // axios 请求拦截器
    instance.interceptors.request.use(config =>{
        // 拦截后返回
        return config
    },err =>{
        console.log(err)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }),err =>{
        console.log(err)
    }
    return instance(config)
}