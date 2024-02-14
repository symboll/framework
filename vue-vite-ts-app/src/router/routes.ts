import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path:'',
    redirect: () => '/reactivity'
  },
  {
    path: "/reactivity",
    component: () => import(/* webpackChunkName: 'reactivity' */'@/pages/reactivity/index.vue')
  },
  {
    path: "/computed",
    component: () => import(/* webpackChunkName: 'computed' */'@/pages/computed/index.vue')
  },
  {
    path: "/watch",
    component: () => import(/* webpackChunkName: 'watch' */'@/pages/watch/index.vue')
  },
  {
    path: "/lifecycle",
    component: () => import(/* webpackChunkName: 'lifecycle' */'@/pages/lifecycle/index.vue')
  },
  {
    path: "/bem",
    component: () => import(/* webpackChunkName: 'bem' */'@/pages/bem/index.vue')
  },
  {
    path: "/communication",
    component: () => import(/* webpackChunkName: 'communication' */'@/pages/communication/index.vue')
  },
  {
    path: "/comp",
    component: () => import(/* webpackChunkName: 'comp' */'@/pages/comp/index.vue')
  },
  {
    path: "/build-in",
    component: () => import(/* webpackChunkName: 'build-in' */'@/pages/build-in/index.vue')
  },
  {
    path: "/slot",
    component: () => import(/* webpackChunkName: 'slot' */'@/pages/slot/index.vue')
  },
  {
    path: "/tsx",
    component: () => import(/* webpackChunkName: 'tsx' */'@/pages/tsx/index.vue')
  },
  {
    path: "/v-model",
    component: () => import(/* webpackChunkName: 'v-model' */'@/pages/v-model/index.vue')
  },
  {
    path: "/v-directive",
    component: () => import(/* webpackChunkName: 'v-directive' */'@/pages/v-directive/index.vue')
  },
  {
    path: "/hooks",
    component: () => import(/* webpackChunkName: 'hooks' */'@/pages/hooks/index.vue')
  },
  {
    path: "/global",
    component: () => import(/* webpackChunkName: 'global' */'@/pages/global/index.vue')
  },
  {
    path: "/vue-style",
    component: () => import(/* webpackChunkName: 'vue-style' */'@/pages/vue-style/index.vue')
  },
  {
    path: "/next-tick",
    component: () => import(/* webpackChunkName: 'next-tick' */'@/pages/nextTick/index.vue')
  },
  {
    path: "/h",
    component: () => import(/* webpackChunkName: 'h' */'@/pages/h/index.vue')
  },
  {
    path: "/macro",
    component: () => import(/* webpackChunkName: 'macro' */'@/pages/macro/index.vue')
  },
  {
    path: "/env",
    component: () => import(/* webpackChunkName: 'env' */'@/pages/env/index.vue')
  },
  {
    path: "/pinia-a",
    component: () => import(/* webpackChunkName: 'pinia-a' */'@/pages/pinia/a.vue')
  },
  {
    path: "/pinia-b",
    component: () => import(/* webpackChunkName: 'pinia-b' */'@/pages/pinia/b.vue')
  },
  {
    path: "/router",
    component: () => import(/* webpackChunkName: 'router' */'@/pages/router_example/index.vue'),
    redirect: () => {
      return {
        name: 'a'
      }
    },
    children: [
      {
        path: 'a',
        name: 'a',
        component: () => import(/* webpackChunkName: 'router-a' */'@/pages/router_example/a.vue'),
        meta: {
          transition: 'animate__fadeIn'
        }
      },
      {
        path: 'b',
        name: 'b',
        component: () => import(/* webpackChunkName: 'router-b' */'@/pages/router_example/b.vue'),
        meta: {
          transition: 'animate__flip'
        }
      },

      {
        path: 'list',
        component: () => import(/* webpackChunkName: 'router-list' */'@/pages/router_example/list.vue'),
        meta: {
          transition: 'animate__lightSpeedInRight'
        }
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: () => import(/* webpackChunkName: 'router-detail' */'@/pages/router_example/detail.vue'),
        meta: {
          transition: 'animate__rollIn'
        }
      }
    ]
  },
]