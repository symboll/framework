import React, { useRef } from 'react'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { changeName } from './slice'
import style from './index.module.less'

const Home = () => {
  const count = useAppSelector((state) => state.about.count)
  const name = useAppSelector(state => state.home.name)
  const dispatch = useAppDispatch()

  const refs = useRef<HTMLInputElement>(null)

  const change = () => dispatch(changeName(refs?.current?.value as string))

  return (
    <>
      <div className={style.title}>Home</div>
      <div className={style['sub-title']}> name: { name }</div>
      <div className={style['sub-title']}> count: { count }</div>

      <input type="text" ref={refs} />
      <button onClick={ change }>Change</button>
    </>
  )
}
export default Home