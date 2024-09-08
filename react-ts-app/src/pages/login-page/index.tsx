import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementByAmount, decrement } from './slice'

import style from './index.module.scss'
import { Link } from 'react-router-dom'

export default function () {
  const count = useSelector((state: any) =>  state.login.value)
  const dispatch = useDispatch()


  return (
    <>
      <div className={style.wrap}>Login</div>
      <div>{ count }</div>
      <button aria-label='Increment' onClick={() => dispatch(increment())} >Increment</button>
      <button aria-label='Decrement' onClick={() => dispatch(decrement())} >Decrement</button>
      <Link to='/'>
        <button>go other page</button>
      </Link>
    </>
  )
}
