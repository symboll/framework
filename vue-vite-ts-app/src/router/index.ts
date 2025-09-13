
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  // to, from, savedPosition
  scrollBehavior: (_, __, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  },
  routes
})
  
/**
 * 前置守卫
 */
router.beforeEach((to, from, next) => {
  // console.log('to', to)
  // console.log('from', from)
  next()
})

/**
 * 后置守卫
 */
router.afterEach((to, from) => {
  // console.log('to', to)
  // console.log('from', from)
})

export default router