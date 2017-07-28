import Vue       from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: require('./components/Home') },
  // { path: '/fds/:id', component: require('./components/FDS/Home'), children:[
  //   { path: 'profile', component: './components/FDS/Profile'},
  //   { path: 'post', component: './components/FDS/Post'},
  // ] },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;