import React from 'react'
import styled from 'styled-components'
import AsyncSelect from 'react-select/lib/Async'
import {navigate} from 'gatsby'
import _isString from 'lodash/isString'
import _get from 'lodash/get'
import {MIN_AGE, MAX_AGE} from './ages';
import {colors, fontSizes} from '../design-system/theme';
import {isMobile} from 'react-device-detect';
import {Flex, Box} from '@rebass/grid';
import PrimaryButton from '../design-system/Buttons/primary-button';

const DesktopSearchBar = styled.div `
    display: flex;
    flex-direction: row;
    background: ${colors.white};
    border: 1px solid ${colors.lightBlue};
    border-radius: 24px;
    width: 100%;
    box-sizing: border-box;
`

const styles = {
    control: (base, state) => {
        return ({
            ...base,
            borderRadius: '4px',
            boxShadow: 'none',
            minHeight: isMobile
                ? '40px'
                : '50px',
            borderColor: isMobile
                ? colors.sortOfPinkLight
                : 'transparent',
            '&:hover': {
                borderColor: 'transparent'
            },
            '&:focus': {
                borderColor: 'transparent'
            }
        })
    },
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

export const defaultSearchParams = {
    q: '',
    age_from: MIN_AGE,
    age_until: MAX_AGE
}

const defaultOptions = [
    {
        id: "*",
        name: `Zeige alle Spielzeuge`
    }
]

const selectAllOption = (term) => term === ''
    ? defaultOptions
    : [
        {
            id: "*",
            name: `Zeige alle Spielzeuge für '${_isString(term)
                ? term
                : term.name}'`
        }
    ]

const groupedOptions = (term, options) => [
    {
        label: '',
        options: selectAllOption(term)
    }, {
        label: 'Spielzeuge',
        options
    }
];

const formatGroupLabel = data => {
    return (
        <div>
            <span>{data.label}</span>
        </div>
    );
}

const setValueInState = (value) => {
    if (value) {
        if (_isString(value)) {
            return {id: '', name: value}
        } else {
            return value
        }
    } else {
        return ''
    }
}

class Search extends React.Component {

    state = {
        value: setValueInState(this.props.value)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            this.setState({
                value: setValueInState(nextProps.value)
            })
        }
    }

    promiseOptions = input => {
        const url = `https://api.thebetterplay.com/product/suggest?q=${input === ''
            ? 'Spielzeug'
            : input}`

        return fetch(url).then((response) => {
            return response.json()
        }).then((json) => {
            const options = json.map(result => Object.assign({}, result, {name: result.name}))
            return groupedOptions(this.state.value, options)
        })
    }

    // this is when the value of the input changes
    onInputChange = (newValue, actionMeta) => {
        //  action: 'set-value' | 'input-change' | 'input-blur' | 'menu-close';
        if (actionMeta.action === 'input-blur') {}
        if (actionMeta.action === 'input-change') {
            this.setState({value: newValue})
        }
    }

    // this is when selecting a product in the list
    onChange = (newValue, actionMeta) => {
        let state = {}
        if (!newValue) {
            state = {
                search: Object.assign({}, defaultSearchParams, {q: 'Spielzeug'}),
                selectedItem: undefined
            }
            navigate('/app/results', {state})
        } else if (newValue.id === '*') {
            state = {
                search: Object.assign({}, defaultSearchParams, {q: this.state.value}),
                selectedItem: undefined
            }
            navigate('/app/results', {state})
        } else {
            state = {
                search: Object.assign({}, defaultSearchParams, {
                    id: newValue.id,
                    category: newValue.category
                }),
                selectedItem: newValue
            }
            navigate('/app/details', {state})
        }
    }

    onClickSearchButton = (e) => {
        const state = {
            search: Object.assign({}, defaultSearchParams, {
                id: newValue.id,
                category: newValue.category
            }),
            selectedItem: newValue
        }
        navigate('/app/details', {state})
    }

    render() {
        return isMobile
            ? (
                <React.Fragment>
                    <AsyncSelect
                        text=""
                        noOptionsMessage={() => 'Keine Resultate gefunden, bitte versuche es mit einem anderen Stichwort.'}
                        placeholder={'Was für ein Spielzeug suchst du?'}
                        value={this.state.value}
                        loadOptions={this.promiseOptions}
                        defaultOptions={true}
                        getOptionLabel={option => option.name}
                        getOptionValue={option => option.id}
                        formatGroupLabel={formatGroupLabel}
                        onChange={this.onChange}
                        styles={styles}
                        isClearable={true}
                        onInputChange={this.onInputChange}/>
                </React.Fragment>
            )
            : (
                <React.Fragment>
                    <DesktopSearchBar>
                        <Box width={1 / 20} alignSelf="center">
                            <Flex justifyContent="center">
                                <img src="https://www.thebetterplay.com/images/icon-search.svg"/>
                            </Flex>
                        </Box>
                        <Box width={15 / 20}>
                            <AsyncSelect
                                text=""
                                noOptionsMessage={() => 'Keine Resultate gefunden, bitte versuche es mit einem anderen Stichwort.'}
                                placeholder={'Was für ein Spielzeug suchst du?'}
                                value={this.state.value}
                                loadOptions={this.promiseOptions}
                                defaultOptions={true}
                                getOptionLabel={option => option.name}
                                getOptionValue={option => option.id}
                                formatGroupLabel={formatGroupLabel}
                                onChange={this.onChange}
                                styles={styles}
                                isClearable={true}
                                onInputChange={this.onInputChange}/>
                        </Box>
                        <Box width={4 / 20}>
                            <button
                                onClick={this.onClickSearchButton}
                                style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: colors.lightBlue,
                                borderRadius: '0 24px 24px 0',
                                fontSize: `${fontSizes['18']}px`,
                                fontWeight: 700,
                                textAlign: 'center',
                                color: colors.white,
                                border: `1px solid ${colors.lightBlue}`,
                                outline: 0,
                                cursor: 'pointer'
                            }}>Suchen</button>
                        </Box>
                    </DesktopSearchBar>
                </React.Fragment>
            )
    }
}

export default Search