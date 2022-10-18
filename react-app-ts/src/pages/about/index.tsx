
import React from 'react'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { decrement, increment } from './slice'

import style from './index.module.less'

const About = () => {

  const count = useAppSelector((state) => state.about.count)
  const name = useAppSelector(state => state.home.name)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className={ style.title }>About: {count}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>

      <div className={style['sub-title']}>name: {name}</div>
    </>
  )
}

export default About