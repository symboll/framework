
import React from 'react'
import { 
  createBrowserRouter, 
  redirect 
} from 'react-router-dom'

import Layout from '@/layout'
import Home from '@/pages/home'
import About from '@/pages/about'
import Login from '@/pages/login'

import { isLoginApi } from '../api/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: async ({ request }) => {
      // try {
      //   const res = await isLoginApi()
      //   if (!res) {
      //     throw redirect("/login")
      //   }
      // }catch (err) {
      //   console.log(err)
      //   throw redirect("/login")
      // }
    },
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router