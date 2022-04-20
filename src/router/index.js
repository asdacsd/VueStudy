import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home'
import Register from '../views/register/Register'
import Login from '../views/login/Login'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/register',
  name: 'Register',
  component: Register,
  beforeEnter (to, from, next) {
    const { isLogin } = localStorage
    isLogin ? next({ name: 'Home' }) : next()
  }
}, {
  path: '/login',
  name: 'Login',
  component: Login,
  beforeEnter (to, from, next) {
    const { isLogin } = localStorage
    isLogin ? next({ name: 'Home' }) : next()
  }
},
{
  path: '/shop/:id',
  name: 'Shop',
  component: () => import('../views/shop/Shop.vue')
},
{
  path: '/echarts',
  name: 'MyEcharts',
  component: () => import('../views/myecharts/MyEcharts.vue')
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'Login' || name === 'Register');
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
})

export default router
