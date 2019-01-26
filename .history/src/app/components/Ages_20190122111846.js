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
            ? counterpart('age.months')
            : ''}`
    } else if (age >= 12 && age < 24) {
        return `${age / 12} ${withText
            ? counterpart('age.year')
            : ''}`
    } else {
        return `${age / 12} ${withText
            ? counterpart('age.years')
            : ''}`
    }
}

const displayFormattedAge = range => {
    if (range.age_until === MAX_AGE) {
        return counterpart('age.allAges')
    } else if (range.age_from === 0) {
        return formatMonthOrYear(range.age_from, false) + ' - ' + range.age_until + ' ' + counterpart('age.months') // erk
    } else {
        return formatMonthOrYear(range.age_from)
    }
}

class Ages extends React.Component {
    render() {
        return (
            <React.Fragment>
                <select>
                    {ageRanges.map((ageRange) => {
                        const className = (this.state.selectedAges !== ageRange
                            ? 'AgeItem'
                            : 'AgeItem AgeItem-Active')

                        return (
                            <option
                                key={`${ageRange.age_from}-${ageRange.age_until}`}
                                className={className}
                                onClick={this._updateAges}
                                value={`${ageRange.age_from}-${ageRange.age_until}`}>
                                {displayFormattedAge(ageRange)}
                            </option>
                        )
                    })}
                </select>
            </React.Fragment>
        )
    }
}

export default Ages