// import React from 'react'
// import { render, fireEvent, waitForElement } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'
// import ResultsPage from './results'
// import { StaticQuery } from "gatsby"

// // jest.mock('axios')

// // test('loads and displays greeting', async () => {
// //   const url = '/greeting'
// //   const { getByText, getByRole } = render(<Fetch url={url} />)

// //   axiosMock.get.mockResolvedValueOnce({
// //     data: { greeting: 'hello there' },
// //   })

// //   fireEvent.click(getByText('Load Greeting'))

// //   const greetingTextNode = await waitForElement(() => getByRole('heading'))

// //   expect(axiosMock.get).toHaveBeenCalledTimes(1)
// //   expect(axiosMock.get).toHaveBeenCalledWith(url)
// //   expect(getByRole('heading')).toHaveTextContent('hello there')
// //   expect(getByRole('button')).toHaveAttribute('disabled')
// // })

// const props = ({selectedItem, search}) => ({
//     location: {
//         state: {
//             selectedItem,
//             search
//         }
//     }
// })

// describe('ResultsPage', () => {

//     beforeEach(() => {
//         StaticQuery.mockImplementationOnce(({ render }) =>
//           render({
//             site: {
//               siteMetadata: {
//                 title: `bla`,
//                 description: 'bla',
//                 author: 'bla'
//               }
//             }
//           })
//         )
//       })

//     describe('The Result component', () => {
//         // it('should not be displayed when there is no selectedItem', () => {
//         //     const { getByText } = render(<ResultsPage { ...props({ selectedItem: undefined, search: {}})} />)

//         // })
//         it('should be displayed when there is a selectedItem', () => {
//             const selectedItem = {
//                 name: 'toy name',
//                 price: {
//                     displayPrice: '18,98'
//                 },
//                 images: [],
//                 deeplinkUrl: 'http://deep.link',
//                 description: 'description'
//             }
//             const { getByText } = render(<ResultsPage { ...props({ selectedItem, search: {}})} />)
//             expect(getByText(/toy name/i)).toHaveLength(1)
//         })
//     })
// })
