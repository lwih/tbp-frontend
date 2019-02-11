import React from 'react'
import {navigate} from 'gatsby';
import Select from 'react-select'
import _get from 'lodash/get'
import _last from 'lodash/last'
import _find from 'lodash/find'
import _matches from 'lodash/matches'
import _isEmpty from 'lodash/isEmpty'
import {Flex} from '@rebass/grid';
import {colors} from '../../design-system/theme';

const styles = {
    control: (base) => ({
        ...base,
        borderRadius: '4px',
        minHeight: '30px',
        borderColor: colors.sortOfPinkLight
    }),
    container: (base) => ({
        ...base,
        borderRadius: '4px',
        background: colors.white
    }),
    input: (base) => ({
        ...base,
        width: '100%',
        borderRadius: '0'
    }),
    menu: (base) => ({
        ...base,
        margin: '0',
        borderRadius: '0 0 4px 4px'
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected
            ? colors.greenBlue
            : colors.white
    })
}

export const MIN_AGE = 0
export const MAX_AGE = 1200

const defaultRange = {
    age_from: 0,
    age_until: MAX_AGE
}

const ageRanges = [
    defaultRange, {
        age_from: 0,
        age_until: 12
    }, {
        age_from: 12,
        age_until: 24
    }, {
        age_from: 24,
        age_until: 36
    }, {
        age_from: 36,
        age_until: 48
    }, {
        age_from: 48,
        age_until: 60
    }, {
        age_from: 60,
        age_until: 72
    }, {
        age_from: 72,
        age_until: 84
    }, {
        age_from: 84,
        age_until: 96
    }, {
        age_from: 96,
        age_until: 108
    }, {
        age_from: 108,
        age_until: 120
    }, {
        age_from: 120,
        age_until: 132
    }, {
        age_from: 132,
        age_until: 144
    }, {
        age_from: 144,
        age_until: 156
    }
]

const formatMonthOrYear = (age, withText = true) => {
    if (age < 12) {
        return `${age} ${withText
            ? 'Monate'
            : ''}`
    } else if (age >= 12 && age < 24) {
        return `${age / 12} ${withText
            ? 'Jahr'
            : ''}`
    } else {
        return `${age / 12} ${withText
            ? 'Jahre'
            : ''}`
    }
}

const displayFormattedAge = range => {
    if (range.age_until === MAX_AGE) {
        return 'Alle Altersklassen'
    } else if (range.age_from === 0) {
        return formatMonthOrYear(range.age_from, false) + ' - ' + range.age_until + ' Monate' // erk
    } else {
        return formatMonthOrYear(range.age_from)
    }
}

class Ages extends React.Component {

    state = {
        selectedRange: _find(ageRanges, _matches({
            age_from: parseInt(_get(this.props.search, 'age_from'), 10),
            age_until: parseInt(_get(this.props.search, 'age_until'), 10)
        }))
    }

    componentWillReceiveProps(nextProps) {
        if (_get(this.props, 'locationState.search') !== _get(nextProps, 'locationState.search') && !_isEmpty(nextProps.locationState)) {
            this.setState({
                age_from: parseInt(_get(nextProps.search, 'age_from'), 10),
                age_until: parseInt(_get(nextProps.search, 'age_until'), 10)
            })
        }
    }

    _updateAges = (selectedRange) => {
        this.setState({selectedRange})

        const newSearch = Object.assign({}, this.props.search, {
            ...selectedRange,
            id: undefined
        })
        const state = Object.assign({}, this.props.locationState, {
            search: newSearch,
            selectedItem: undefined
        })
        navigate('/app/results', {state})
    }

    render() {
        return (
            <React.Fragment>
                <Select
                    isSearchable={false}
                    value={this.state.selectedRange}
                    defaultValue={defaultRange}
                    options={ageRanges}
                    getOptionLabel={option => displayFormattedAge(option)}
                    getOptionValue={option => `${option.age_from}-${option.age_until}`}
                    onChange={this._updateAges}
                    styles={styles}/>
            </React.Fragment>
        )
    }
}

export default Ages