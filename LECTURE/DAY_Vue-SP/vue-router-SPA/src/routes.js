/*! routes.js © yamoo9.net, 2017 */

// Load Components
import Home from './components/Home.vue';
import User from './components/User/User.vue';


// Route Setting
export const routes = [
  { path: '', component: Home },
  { path: '/user/:id', component: User },
];
