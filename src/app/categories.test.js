import React from 'react'
import Categories from './categories'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

let testingLib
const props = (search) => ({
  search,
  locationState: {
    search,
  },
})

describe('Ages component', () => {
  describe('setting the range', () => {
    it('should display the default range at first', async () => {
      await act(
        async () => (testingLib = render(<Categories {...props(undefined)} />))
      )
      expect(testingLib.getByText(/alle kategorien/i)).not.toBeNull()
    })
    it('should display the given range', async () => {
      await act(
        async () =>
          (testingLib = render(
            <Categories
              {...props({ category: { id: '1', name: 'Familienspiele' } })}
            />
          ))
      )
      expect(testingLib.queryByText(/alle kategorien/i)).toBeNull()
      expect(testingLib.getByText(/Familienspiele/i)).not.toBeNull()
    })
  })
})
