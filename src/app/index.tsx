import React from 'react'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from '~/store/features/store'
import { Provider } from 'react-redux'
import { Main } from './pages'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>,
  </StrictMode>
)
