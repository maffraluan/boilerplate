import React from 'react'
import Main from './main'
import { render } from '@testing-library/react'

describe('Main', () => {
  test('Should render main component on screen', () => {
    const { container } = render(<Main />)
    expect(container).toBeInTheDocument()
  })
})
