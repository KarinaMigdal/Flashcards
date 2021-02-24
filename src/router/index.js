import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main.vue';
import Folder from '../views/Folder.vue';
import Game from '../views/Game.vue';
import AboutTheApp from '../views/AboutTheApp.vue';
import AboutTheAuthors from '../views/AboutTheAuthors.vue';
import Settings from '../views/Settings.vue';
import Register from '../views/Registration.vue';
import Login from '../views/Login.vue';
import Success from '../views/Success.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/folder/:id',
    name: 'Folder',
    component: Folder,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  {
    path: '/about-authors',
    name: 'AboutTheAuthors',
    component: AboutTheAuthors,
  },
  {
    path: '/about-app',
    name: 'AboutTheApp',
    component: AboutTheApp,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
 
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/success',
    name: 'Success',
    component: Success,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router