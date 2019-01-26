import React from 'react'
import Select from 'react-select'
import {navigate} from 'gatsby'

const selectAllOption = (term) => [
    {
        id: "*",
        name: `Show me all toys for '${term}'`
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

const groupedOptions = (term) => [
    {
        label: '',
        options: selectAllOption(term)
    }, {
        label: 'Products',
        options: productsOptions
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
            ? this.props.value
            : ''
    }

    // this is when the value of the input changes
    onInputChange = (newValue, actionMeta) => {
        //  action: 'set-value' | 'input-change' | 'input-blur' | 'menu-close';
        if (actionMeta.action === 'input-blur') {}
        if (actionMeta.action === 'input-change') {
            this.setState({value: newValue})
            if (newValue !== "" && newValue.length > 2) {
                this
                    .props
                    .onChange(this.state.value)
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
                    age_until: 1000,
                    search: newValue
                }
            }
        } else {
            state = {
                search: {
                    age_from: 0,
                    age_until: 1000,
                    // search: this.state.value,
                    category: newValue.category
                },
                selectedItem: newValue
            }
        }

        navigate('/app/results', {state})
    }

    render() {
        return (
            <div>
                <Select
                    value={this.state.value}
                    options={groupedOptions(this.state.value)}
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