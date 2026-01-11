import type { RouteRecordRaw } from "vue-router";
import Layout from "@/components/layout/index.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "",
    component: Layout,
    children: [
      {
        path: "",
        redirect: () => "/reactivity",
      },
      {
        path: "/reactivity",
        component: () =>
          import(
            /* webpackChunkName: 'reactivity' */ "@/pages/reactivity/index.vue"
          ),
      },
      {
        path: "/computed",
        component: () =>
          import(
            /* webpackChunkName: 'computed' */ "@/pages/computed/index.vue"
          ),
      },
    ],
  },
  {
    path: "/pinia",
    redirect: () => "/pinia/a",
    children: [
      {
        path: "a",
        component: () =>
          import(/* webpackChunkName: 'pinia-a' */ "@/pages/pinia/a.vue"),
      },
      {
        path: "b",
        component: () =>
          import(/* webpackChunkName: 'pinia-b' */ "@/pages/pinia/b.vue"),
      },
    ],
  },
];
