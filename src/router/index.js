import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import DailyNews from '../components/news/DailyNews.vue'
import HighRiskArea from '../components/area/HighRiskArea.vue'
import DataShow from '../components/report/DataShow.vue'
import MockForm from '../components/report/MockForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  }, {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/dailyNews',
        component: DailyNews
      },
      {
        path: '/highRiskArea',
        component: HighRiskArea
      },
      {
        path: '/dataShow',
        component: DataShow
      },
      {
        path: '/mockForm',
        component: MockForm
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()

  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  console.log(tokenStr)
  if (!tokenStr) return next('/login')

  next()
})

export default router
