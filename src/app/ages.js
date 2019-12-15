import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import Select from 'react-select'
import _get from 'lodash/get'
import _last from 'lodash/last'
import _find from 'lodash/find'
import _matches from 'lodash/matches'
import _isEmpty from 'lodash/isEmpty'
import { Flex, Box } from '@rebass/grid'
import { colors } from '../design-system/theme'
import Skeleton from '../design-system/Skeletons/skeleton'

const styles = {
  control: (base) => ({
    ...base,
    borderRadius: '8px',
    minHeight: '30px',
    borderColor: colors.sortOfPinkLight,
  }),
  container: (base) => ({
    ...base,
    borderRadius: '8px',
    background: colors.white,
  }),
  input: (base) => ({
    ...base,
    width: '100%',
    borderRadius: '0',
  }),
  menu: (base) => ({
    ...base,
    margin: '0',
    borderRadius: '0 0 4px 4px',
  }),
  option: (base, state) => ({
    ...base,
    fontSize: '10px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    wordBreak: 'break-all',
    backgroundColor: state.isSelected ? colors.greenBlue : colors.white,
  }),
  singleValue: (base, state) => ({
    ...base,
    fontSize: '12px',
    textTransform: 'uppercase',
    color: '#848484',
    fontWeight: 'bold',
  }),
}

export const MIN_AGE = 0
export const MAX_AGE = 1200

const defaultRange = {
  age_from: 0,
  age_until: MAX_AGE,
}

const ageRanges = [
  defaultRange,
  {
    age_from: 0,
    age_until: 12,
  },
  {
    age_from: 12,
    age_until: 24,
  },
  {
    age_from: 24,
    age_until: 36,
  },
  {
    age_from: 36,
    age_until: 48,
  },
  {
    age_from: 48,
    age_until: 60,
  },
  {
    age_from: 60,
    age_until: 72,
  },
  {
    age_from: 72,
    age_until: 84,
  },
  {
    age_from: 84,
    age_until: 96,
  },
  {
    age_from: 96,
    age_until: 108,
  },
  {
    age_from: 108,
    age_until: 120,
  },
  {
    age_from: 120,
    age_until: 132,
  },
  {
    age_from: 132,
    age_until: 144,
  },
  {
    age_from: 144,
    age_until: 156,
  },
]

export const formatMonthOrYear = (age, withText = true) => {
  if (age < 12) {
    return `${age}${withText ? ' Monate' : ''}`
  } else if (age >= 12 && age < 24) {
    return `${age / 12}${withText ? ' Jahr' : ''}`
  } else {
    return `${age / 12}${withText ? ' Jahre' : ''}`
  }
}

export const displayFormattedAge = (range) => {
  if (range.age_until === MAX_AGE) {
    return 'Jedes Alter'
  } else if (range.age_from === 0) {
    return (
      formatMonthOrYear(range.age_from, false) +
      ' - ' +
      range.age_until +
      ' Monate'
    ) // erk
  } else {
    return formatMonthOrYear(range.age_from)
  }
}

function Ages({ search, locationState }) {
  const [selectedRange, setSelectedRange] = useState(defaultRange)

  useEffect(() => {
    if (!!search) {
      setSelectedRange({
        age_from: parseInt(_get(search, 'age_from'), 10),
        age_until: parseInt(_get(search, 'age_until'), 10),
      })
    }
  }, [search])

  const updateAges = (selectedRange) => {
    console.log('REDIRECTEW SFSDF DSF SD')
    setSelectedRange(selectedRange)
    const newSearch = Object.assign({}, search, {
      ...selectedRange,
      id: undefined,
    })
    const state = Object.assign({}, locationState, {
      search: newSearch,
      selectedItem: undefined,
    })

    navigate('/app/results', { state })
  }

  return (
    <Box
      width={1}
      style={{
        minHeight: '40px',
      }}
    >
      {typeof window !== 'undefined' && (
        <Select
          className="react-select"
          classNamePrefix="react-select"
          isSearchable={false}
          value={selectedRange}
          defaultValue={defaultRange}
          options={ageRanges}
          getOptionLabel={(option) => displayFormattedAge(option)}
          getOptionValue={(option) => `${option.age_from}-${option.age_until}`}
          onChange={updateAges}
          styles={styles}
        />
      )}
    </Box>
  )
}

// class Ages extends React.Component {
//   state = {
//     selectedRange: _find(
//       ageRanges,
//       _matches({
//         age_from: parseInt(_get(this.props.search, 'age_from'), 10),
//         age_until: parseInt(_get(this.props.search, 'age_until'), 10),
//       })
//     ),
//   }

//   componentDidUpdate(prevProps) {
//     if (
//       _get(prevProps, 'locationState.search') !==
//         _get(this.props, 'locationState.search') &&
//       !_isEmpty(this.props.locationState)
//     ) {
//       this.setState({
//         age_from: parseInt(_get(this.props.search, 'age_from'), 10),
//         age_until: parseInt(_get(this.props.search, 'age_until'), 10),
//       })
//     }
//   }

//   _updateAges = (selectedRange) => {
//     this.setState({ selectedRange })

//     const newSearch = Object.assign({}, this.props.search, {
//       ...selectedRange,
//       id: undefined,
//     })
//     const state = Object.assign({}, this.props.locationState, {
//       search: newSearch,
//       selectedItem: undefined,
//     })
//     navigate('/app/results', { state })
//   }

//   render() {
//     return (
//       <Box
//         width={1}
//         style={{
//           minHeight: '40px',
//         }}
//       >
//         {typeof window !== 'undefined' && (
//           <Select
//             isSearchable={false}
//             value={this.state.selectedRange}
//             defaultValue={defaultRange}
//             options={ageRanges}
//             getOptionLabel={(option) => displayFormattedAge(option)}
//             getOptionValue={(option) =>
//               `${option.age_from}-${option.age_until}`
//             }
//             onChange={this._updateAges}
//             styles={styles}
//           />
//         )}
//       </Box>
//     )
//   }
// }

export default Ages
