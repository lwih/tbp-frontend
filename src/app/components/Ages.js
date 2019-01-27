import React from 'react'
import {navigate} from 'gatsby';
import Select from 'react-select'
import _get from 'lodash/get'
import _last from 'lodash/last'
import _find from 'lodash/find'
import _matches from 'lodash/matches'

export const MIN_AGE = 0
export const MAX_AGE = 1200

const ageRanges = [
    {
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
    }, {
        age_from: 0,
        age_until: MAX_AGE
    }
]

const formatMonthOrYear = (age, withText = true) => {
    if (age < 12) {
        return `${age} ${withText
            ? 'months'
            : ''}`
    } else if (age >= 12 && age < 24) {
        return `${age / 12} ${withText
            ? 'year'
            : ''}`
    } else {
        return `${age / 12} ${withText
            ? 'years'
            : ''}`
    }
}

const displayFormattedAge = range => {
    if (range.age_until === MAX_AGE) {
        return 'all ages'
    } else if (range.age_from === 0) {
        return formatMonthOrYear(range.age_from, false) + ' - ' + range.age_until + ' months' // erk
    } else {
        return formatMonthOrYear(range.age_from)
    }
}

class Ages extends React.Component {

    state = {
        selectedRange: _find(ageRanges, _matches({
            age_from: _get(this.props.locationState, 'search.age_from'),
            age_until: _get(this.props.locationState, 'search.age_until')
        }))
    }

    _updateAges = (selectedRange) => {
        this.setState({selectedRange})

        const newSearch = Object.assign({}, _get(this.props.locationState, 'search'), {
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
                    value={this.state.selectedRange}
                    defaultValue={_last(ageRanges)}
                    options={ageRanges}
                    getOptionLabel={option => displayFormattedAge(option)}
                    getOptionValue={option => `${option.age_from}-${option.age_until}`}
                    onChange={this._updateAges}/>
            </React.Fragment>
        )
    }
}

export default Ages