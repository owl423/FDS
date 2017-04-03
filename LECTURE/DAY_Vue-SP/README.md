###### FAST CAMPUS

# Vue JS Advanced

## Agenda

1. <s>Vue CLI</s>
1. <s>Vue Component</s>
1. <s>Vue Transition</s>
1. Vue Custom Directive
1. Vue Custom Filter
1. Vue with vue-resource & Firebase
1. Vue Routing — SPA

---

### Ajax using Vue JS

`vue-resource` 모듈 설치

```sh
$ npm i -D vue-resource
```

`vue-resource` 모듈 로드 및 사용 설정

```js
import VueResource from 'vue-resource';
Vue.use(VueResource);
```

```js
this.$http.post('https://vue-js-ajax.firebaseio.com/data.json', {data})
          .then(response=>{
            // response
          }, error=> {

          });
```
