import axios from 'axios';
import qs from 'qs';
import Cookies from "js-cookie";
import router from "@/router"

export default function $axios(options){
    return new Promise((resolve, reject) => {
      console.log(options)
        const instance = axios.create({
            baseURL: 'http://localhost:8080',
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
            timeout: '10000',
            transformResponse: [function (data){
              // return qs.stringify(data)
            }]
        })
        // request 拦截器
        instance.interceptors.request.use(function(config){
                let token = Cookies.get('token')
                if(1){
                  console.log("haaaaaaaaaaaaaaaaaaaaaaaaaaa")
                    config.headers.accessToken = 111
                }else{
                    //重定向到登陆页面

                    router.push('/login')
                }
                if(config.method === 'post'){ 
                    if(config.data.__proto__ === FormData.prototype
                        || config.url.endsWith('path')
                        || config.url.endsWith('mark')
                        || config.url.endsWith('patchs')
                        ){
                        }else{
                          // config.data = qs.stringify(config.data)
                          console.log(config.data)
                        }
                    }
                    return config
                },
                function (error) {
                // 请求超时
                console.log('request:', error)
                if(error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1){
                    console.log('timeout 请求超时')
                }
                // 重定向到错误页面
                const errorInfo = error.response
                console.log(errorInfo)
                if(errorInfo){
                    error = errorInfo.data
                    const errorStatus = errorInfo.statue; // 404 403 500 ...
                    router.push({
                        path:  `/error/${errorStatus}`
                    })
                }
                return Promise.reject(error)
            }
        )
        console.log(11111111111111)
        instance.interceptors.response.use(function(response){
                let data;
                console.log("hahahahahah")
                console.log(response.data)
                if(response.data == undefined){
                  data = JSON.parse(response.request.responseText)
                }else{
                    data = response.data
                }
                //根据返回的code 来进行不同的处理
                switch(data.rc){
                    case 1:
                        console.log(data.desc)
                        break;
                    case 0:
                        store.commit('changeState')
                    default:
                }
                return data
            },
            function(err){
              console.log(999999)
                if (err && err.response) {
                    switch (err.response.status) {
                      case 400:
                        err.message = '请求错误'
                        break
                      case 401:
                        err.message = '未授权，请登录'
                        break
                      case 403:
                        err.message = '拒绝访问'
                        break
                      case 404:
                        err.message = `请求地址出错: ${err.response.config.url}`
                        break
                      case 408:
                        err.message = '请求超时'
                        break
                      case 500:
                        err.message = '服务器内部错误'
                        break
                      case 501:
                        err.message = '服务未实现'
                        break
                      case 502:
                        err.message = '网关错误'
                        break
                      case 503:
                        err.message = '服务不可用'
                        break
                      case 504:
                        err.message = '网关超时'
                        break
                      case 505:
                        err.message = 'HTTP版本不受支持'
                        break
                      default:
                    }
                  }
                  console.error(err)
                  return Promise.reject(err)
            }
        )
        //请求处理
        instance(options).then(res => {
          console.log(2222222)
            resolve(res)
            return false
        }).catch(error => {
          console.log(33333)
            reject(error)
        })
        console.log(4444)
    })
}

