import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <Link to="/">Home</Link> | 
      <NavLink to="/about">About</NavLink>

      <Outlet></Outlet>
    </>
  )
}

export default Layout