import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage'

Vue.use(VueRouter)

const routes = [
  {
    path : '/login',
    name : 'LoginPage',
    component : LoginPage
}
]

const router = new VueRouter({
  routes
})

export default router
