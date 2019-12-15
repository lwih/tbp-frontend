import React from 'react'
import Ages, { formatMonthOrYear, displayFormattedAge } from './ages'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe('formatMonthOrYear', () => {
  it('should return 11', () => {
    expect(formatMonthOrYear(11, false)).toEqual('11')
  })
  it('should return 11 Monate', () => {
    expect(formatMonthOrYear(11, true)).toEqual('11 Monate')
  })
  it('should return 1', () => {
    expect(formatMonthOrYear(12, false)).toEqual('1')
  })
  it('should return 1 Jahr', () => {
    expect(formatMonthOrYear(12, true)).toEqual('1 Jahr')
  })
  it('should return 4', () => {
    expect(formatMonthOrYear(48, false)).toEqual('4')
  })
  it('should return 4 Jahr', () => {
    expect(formatMonthOrYear(48, true)).toEqual('4 Jahre')
  })
})

describe('displayFormattedAge', () => {
  it('should return Jedes Alter when max age', () => {
    expect(displayFormattedAge({ age_from: 0, age_until: 1200 })).toEqual(
      'Jedes Alter'
    )
  })
  it('should return the age range from 0', () => {
    expect(displayFormattedAge({ age_from: 0, age_until: 12 })).toEqual(
      '0 - 12 Monate'
    )
  })
  it('should return the age range', () => {
    expect(displayFormattedAge({ age_from: 12, age_until: 24 })).toEqual(
      '1 Jahr'
    )
  })
})

let testingLib
const props = (search) => ({
  search,
  locationState: {},
})

describe('Ages component', () => {
  describe('setting the range', () => {
    it('should display the default range at first', async () => {
      await act(
        async () => (testingLib = render(<Ages {...props(undefined)} />))
      )
      expect(testingLib.getByText(/jedes alter/i)).not.toBeNull()
    })
    it('should display the given range', async () => {
      await act(
        async () =>
          (testingLib = render(
            <Ages {...props({ age_from: 0, age_until: 12 })} />
          ))
      )
      expect(testingLib.queryByText(/jedes alter/i)).toBeNull()
      expect(testingLib.getByText(/0 - 12 Monate/i)).not.toBeNull()
    })
  })
})

// describe('updating the ages', () => {
//     it('should redirect to the results page', async () => {
//     })
// })
