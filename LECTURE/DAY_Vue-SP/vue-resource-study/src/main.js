import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// Using Vue Plugin - VueResource
Vue.use(VueResource);

// Global Settings
Vue.http.options.root = 'https://vue-http-d4585.firebaseio.com';
// Vue.http.headers.common['Authorization'] = 'Token YXBpOnBhc3N3b3Jk';

// interceptors
// Vue.http.interceptors.push((request, next)=> {
//   // request를 가로채서 서버에 통신 요청할 때 변경 사항을 반영
//   // console.log(request);
//   if ( request.method === 'POST' ) {
//     request.method = 'PUT';
//   }
//   next(response => {
//     response.json = ()=> { return { data: response.body } };
//   });
// });

new Vue({
  el: '#app',
  render: h => h(App)
})
