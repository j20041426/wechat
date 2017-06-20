import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

import message from './component/message/index.vue';
import session from './component/message/session.vue';

import contact from './component/contact/index.vue';
import userinfo from './component/contact/userinfo.vue';

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/message'},
    {path: '/message', component: message, 
      children: [
        {path: ':sessionId', component: session}
      ]
    },
    {path: '/contact', component: contact, 
      children: [
        {path: 'userinfo/:userId', component: userinfo}
      ]
    },
  ]
});

new Vue({
  el: '#app',
   router: router,
  render: h => h(App)
})
