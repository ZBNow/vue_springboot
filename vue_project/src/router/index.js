import { createRouter, createWebHistory } from 'vue-router'
//定义路由的文件

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/manager', component: import('../views/Manager.vue'),
      children: [
        { path: 'home', component: import('../views/Home.vue')},
        { path: 'about', component: import('../views/About.vue')},
        { path: '404', component: import('../views/404.vue')}


      ]
    },
    { path: '/:pathMatch(.*)', redirect: '/notFound'},
  ]
})

export default router
