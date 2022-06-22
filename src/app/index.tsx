import React from 'react'
import { render } from 'react-dom'
import { store } from '~/store/features/store'
import { Provider } from 'react-redux'
import { Main } from './pages/main'

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.body
)
