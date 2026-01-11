import { NavLink, useLocation } from "react-router"
import { router } from '@/router'
import style from './index.module.scss'

export const Menu = () => {
  const location = useLocation()
  console.log('router', router)
  
  const menus: any[] = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/about',
      name: 'About'
    },
    // {
    //   path: '/hooks',
    //   name: 'hooks',
    //   children: [
    //     {
    //       path: '/hooks/state',
    //       name: 'useState'
    //     },
    //     {
    //       path: '/hooks/effect',
    //       name: 'useEffect'
    //     }
    //   ]
    // }
  ]
  return ( 
    <nav className={style.menu}>
      {menus.map(menu =>
        <div key={menu.path}>
          <NavLink
            viewTransition
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isActive ? style.active : '',
                isPending ? style.pending : '',
                isTransitioning ? style.transitioning : '',
              ].join(" ")
            }
            to={menu.path}
            end
          >
            {menu.name} 
          </NavLink>
          {
            Array.isArray(menu.children) && location.pathname.startsWith(menu.path) ? menu.children.map((child: any) => 
              <NavLink
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isActive ? style.active : '',
                    isPending ? style.pending : '',
                    isTransitioning ? style.transitioning : '',
                    style.child
                  ].join(" ")
                }
                to={child.path}
                end
              >
                {child.name}
              </NavLink>
            ): null 
          }
        </div>
      )}
    </nav>
  )
}