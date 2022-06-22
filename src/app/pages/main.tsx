import React, { useCallback } from 'react'
import { RootState } from '~/store/features/store'
import { useDispatch, useSelector } from 'react-redux'
import {
  increment,
  decrement
} from '~/store/features/counter/slices/counter-slice'

const Main = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const handleIncrement = useCallback(() => {
    dispatch(increment())
  }, [])

  return (
    <div>
      <button onClick={handleIncrement}>Counter</button>
      <span>{counter}</span>
    </div>
  )
}
export { Main }
