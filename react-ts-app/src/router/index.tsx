import { createBrowserRouter } from "react-router";
import { Root } from "@/components/root";
import { Home } from "@/pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        lazy: {
          loader: async () => (await import("@/pages/about/loader")).loader,
          action: async () => (await import("@/pages/about/action")).action,
          Component: async () => (await import("@/pages/about/index")).About,
        },
      },
    ],
  },
  {
    path: 'auth',
    Component: Root,
    loader: () => ({ menu: false }),
    children: [
      {
        path: 'login',
        lazy: {
          Component: async () => (await (import('@/pages/auth/login'))).Login
        }
      },
      {
        path: 'register',
        lazy: {
          Component: async () => (await (import('@/pages/auth/register'))).Register
        }
      }
    ]
  },
  {
    path: '*',
    element: <div>NotFound</div>
  }
]);
