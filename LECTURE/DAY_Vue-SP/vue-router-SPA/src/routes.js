/*! routes.js © yamoo9.net, 2017 */

// Load Components
import Home       from './components/Home.vue';
import Navigation from './components/Navigation.vue';
import User       from './components/User/User.vue';
import UserStart  from './components/User/UserStart.vue';
import UserDetail from './components/User/UserDetail.vue';
import UserEdit   from './components/User/UserEdit.vue';


// Route Setting
export const routes = [
  {
    path: '/', name: 'home',
    components: {
      default: Home,
      gnb: Navigation
    }
  },
  {
    path: '/user',
    components: {
      default: User,
      gnb: Navigation
    },
    children: [
      { path: '', component: UserStart },
      { path: ':id', component: UserDetail },
      { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ]
  },
  {
    // * === wild card
    path: '*', redirect: '/'
  }
];
