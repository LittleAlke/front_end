import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
//   // url: 'https://httpbin.org/get'
//   // url: 'https://httpbin.org/image'
  
// }).then(res =>{
//   console.log(res);
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 3
//   }
// }).then(res =>{
//   console.log(res);
// })

// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
// axios.all([
//   axios({
//     url: '/home/multidata'
//   }),
//   axios({
//     url: '/category',
//     params: {
//       type: 'pop',
//       page: 3
//     }
//   })
// ]).then(res => {
//     console.log(res);
//   })

import {request} from "./network/request";

// request({
//   url: '/home/multidata'
// }, res=>{
//   console.log(res);
// },err => {
//   console.log(err);
// })

// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success: function(res){
//     console.log(res);
//   },
//   failure: function(err){

//   }
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})