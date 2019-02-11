import React from 'react'
import AsyncSelect from 'react-select/lib/Async'
import {navigate} from 'gatsby'
import _isString from 'lodash/isString'
import _get from 'lodash/get'

const defaultOptions = [
    {
        id: "*",
        name: `Show all toys`
    }
]

const selectAllOption = (term) => term === ''
    ? defaultOptions
    : [
        {
            id: "*",
            name: `Show all toys for '${_isString(term)
                ? term
                : term.name}'`
        }
    ]
const productsOptions = [
    {
        id: "535905",
        name: "Lego 42094 Technic Raupenlader, bunt",
        category: 'cat1'
    }, {
        id: "86541",
        name: "Ministeck 31448 - Leuchtturm, Steckplatten, ca. 9700 Steine und Zubehör",
        category: 'cat2'
    }
]

const groupedOptions = (term, options) => [
    {
        label: '',
        options: selectAllOption(term)
    }, {
        label: 'Products',
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

class Search extends React.Component {

    state = {
        value: this.props.value
            ? _isString(this.props.value)
                ? {
                    id: '',
                    name: this.props.value
                }
                : this.props.value : ''
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            this.setState({
                value: _get(nextProps.value, 'name')
                    ? {
                        id: "",
                        name: _get(nextProps.value, 'name')
                    }
                    : {}
            })
        }
    }

    promiseOptions = input => {

        // if (!_isArray(input)) {     if (input) {         queryParams =
        // Object.assign({}, queryParams, {q: input})     } } const url =
        // buildUrl(`$https://api.thebetterplay.com/product/suggest`, queryParams)
        const url = `https://api.thebetterplay.com/product/suggest?q=${input === ''
            ? 'toy'
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
            if (newValue !== "" && newValue.length > 2) {
                // this     .props     .onChange(this.state.value)
            }
        }
    }

    // this is when selecting a product in the list
    onChange = (newValue, actionMeta) => {
        // {   action: 'select-option' |'deselect-option' |'remove-value' | 'pop-value'
        // |'set-value' |'clear' |'create-option'; } this     .props
        // .onSelectItem(newValue)
        let state = {}

        if (newValue.id === '*') {
            state = {
                search: {
                    age_from: 0,
                    age_until: 1200,
                    q: this.state.value
                },
                selectedItem: undefined
            }
            navigate('/app/results', {state})
        } else {
            state = {
                search: {
                    age_from: 0,
                    age_until: 1200,
                    // q: this.state.value,
                    id: newValue.id,
                    category: newValue.category
                },
                selectedItem: newValue
            }
            navigate('/app/details', {state})

        }
    }

    render() {
        return (
            <div>
                {/* options={groupedOptions(this.state.value)} */}
                <AsyncSelect
                    isLoading={true}
                    value={this.state.value}
                    loadOptions={this.promiseOptions}
                    defaultOptions={true}
                    getOptionLabel={option => option.name}
                    getOptionValue={option => option.id}
                    formatGroupLabel={formatGroupLabel}
                    onChange={this.onChange}
                    onInputChange={this.onInputChange}/>
            </div>
        )
    }
}

export default Search