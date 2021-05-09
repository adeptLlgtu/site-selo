import Vue from 'vue'
import VueRouter from 'vue-router'
import Mainpage from '../views/Mainpage.vue'

import AboutRegion from '../views/about-region/About-region'
import SymbolV from '../views/about-region/Symbol'
import History from '../views/about-region/Hystory'
import Places from '../views/about-region/Places'
import RespectDesk from '../views/about-region/Respect-desk'


import Res from '../views/social/Res'
import Health from "../views/social/Health";
import Education from "../views/social/Education";
import Culture from "../views/social/Culture";

import Corruption from "../views/corruption/Corruption";

import Sels from "../views/sels/Sels";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Mainpage
  },
  {
    path: '/about-region',
    name: 'AboutRegion',
    component: AboutRegion
  },
  {
    path: '/symbol',
    name: 'SymbolV',
    component: SymbolV
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/places',
    name: 'Places',
    component: Places
  },
  {
    path: '/respect-desk',
    name: 'RespectDesk',
    component: RespectDesk
  },

  {
    path: '/res',
    name: 'Res',
    component: Res
  },
  {
    path: '/health',
    name: 'Health',
    component: Health
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/culture',
    name: 'Culture',
    component: Culture
  },
  {
    path: '/corruption',
    name: 'Corruption',
    component: Corruption
  },
  {
    path: '/sels',
    name: 'Sels',
    component: Sels
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
