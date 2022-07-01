import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '~/store/features/store'
import Router from '~/app/routes/router'
import { MantineProvider, Global } from '@mantine/core'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <Global
          styles={() => ({
            '*, *::before, *::after': {
              boxSizing: 'border-box'
            },
            body: {
              margin: 0,
              padding: 0
            }
          })}
        />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  </StrictMode>
)
