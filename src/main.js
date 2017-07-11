import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

import index from './component/index.vue';

import message from './component/message/index.vue';
import session from './component/message/session.vue';

import contact from './component/contact/index.vue';
import userinfo from './component/contact/userinfo.vue';

import login from './component/login.vue';

import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://app-hqqsk5cknw2ke29.leanapp.cn:9999');

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/index/message'},
    {path: '/login', component: login},
    {path: '/index', component: index,
      children: [
        {path: 'message', component: message, 
          children: [
            {path: ':sessionId', component: session}
          ]
        },
        {path: 'contact', component: contact, 
          children: [
            {path: 'userinfo/:userId', component: userinfo}
          ]
        },
      ],
    },
    
  ]
});

router.beforeEach((to, from, next) => {
  if(to.path != '/login'){
    if(!sessionStorage.userId){
      next('/login');
    }
  }
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});