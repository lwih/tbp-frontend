import React from 'react'
import { render } from '@testing-library/react'
import Result from './result'
import fetchMock from 'fetch-mock'
import { act } from 'react-dom/test-utils'
import resultMock from '../../test-config/mocks/result'

const props = ({ item, search }) => ({
  location: {
    state: {
      search,
    },
  },
  item,
})

describe('Result Component', () => {
  describe('The redirection to the homepage', () => {
    global.___navigate = jest.fn()
    it('should not happen when there is an item', async () => {
      fetchMock.get(
        'https://api.thebetterplay.com/product/1?image_sizes=tiny,large',
        resultMock()
      )
      await act(async () =>
        render(<Result {...props({ item: resultMock(), search: undefined })} />)
      )
      expect(global.___navigate).not.toHaveBeenCalled()
      fetchMock.restore()
    })
    it('should not happen when there data in the store', async () => {
      fetchMock.get(
        'https://api.thebetterplay.com/product/1?image_sizes=tiny,large',
        resultMock()
      )
      await act(async () =>
        render(<Result {...props({ item: resultMock(), search: undefined })} />)
      )
      expect(global.___navigate).not.toHaveBeenCalled()
      fetchMock.restore()
    })
    it('should happen when there is no item nor data in the store', () => {
      render(<Result {...props({ item: undefined, search: undefined })} />)
      expect(global.___navigate).toHaveBeenCalledWith('/', undefined)
    })
  })

  describe('Rendering the component', () => {
    let testingLib

    it('should not render any result when there is no selectedItem', () => {
      const { queryByText } = render(
        <Result {...props({ item: undefined, search: {} })} />
      )
      expect(queryByText(/Zum Produkt/i)).toBeNull()
    })

    it('should render the result details', async () => {
      fetchMock.get(
        'https://api.thebetterplay.com/product/1?image_sizes=tiny,large',
        resultMock()
      )
      await act(
        async () =>
          (testingLib = render(
            <Result {...props({ item: { id: '1' }, search: {} })} />
          ))
      )

      expect(testingLib.queryByText(/toy name/i)).not.toBeNull()
      expect(testingLib.queryByText(/20,00/i)).not.toBeNull()
      expect(testingLib.queryByText(/description1/i)).not.toBeNull()
      expect(testingLib.queryByText(/description2/i)).not.toBeNull()
      fetchMock.restore()
    })

    it('should not render the price when not given', async () => {
      fetchMock.get(
        'https://api.thebetterplay.com/product/1?image_sizes=tiny,large',
        resultMock('')
      )
      await act(
        async () =>
          (testingLib = render(
            <Result {...props({ item: { id: '1' }, search: {} })} />
          ))
      )

      expect(testingLib.queryByText(/20,00/i)).toBeNull()
      fetchMock.restore()
    })
    it('should not render the description when none', async () => {
      fetchMock.get(
        'https://api.thebetterplay.com/product/3?image_sizes=tiny,large',
        resultMock('20,00', [])
      )
      await act(
        async () =>
          (testingLib = render(
            <Result {...props({ item: { id: '3' }, search: {} })} />
          ))
      )

      expect(testingLib.queryByText(/description1/i)).toBeNull()
      fetchMock.restore()
    })
  })
})
