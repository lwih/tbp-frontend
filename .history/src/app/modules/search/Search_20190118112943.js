import React from 'react'
import Select from 'react-select'
import {navigate} from 'gatsby'

const selectAllOption = [
    {
        id: "",
        name: "Select all matching products"
    }
]
const productsOptions = [
    {
        id: "535905",
        name: "Lego 42094 Technic Raupenlader, bunt"
    }, {
        id: "86541",
        name: "Ministeck 31448 - Leuchtturm, Steckplatten, ca. 9700 Steine und Zubehör"
    }
]

const groupedOptions = [
    {
        label: 'label',
        options: selectAllOption
    }, {
        label: 'label',
        options: productsOptions
    }
];

const formatGroupLabel = data => {
    debugger
    return (
        <div>
            <span>q</span>
            {/* <span>{data.label}</span> */}
            <span>{data.options.length}</span>
        </div>
    );
}

class Search extends React.Component {

    state = {
        value: ''
    }

    // this is when the value of the input changes
    onInputChange = (newValue, actionMeta) => {
        //  action: 'set-value' | 'input-change' | 'input-blur' | 'menu-close';
        if (actionMeta === 'input-blur') {
            debugger
        }
        if (actionMeta === 'input-change') {
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
        navigate('/app/results')
    }

    render() {
        return (
            <div>
                <Select
                    value={this.state.value}
                    options={groupedOptions}
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