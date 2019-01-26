import React from 'react'
import Select from 'react-select'

const values = [
    {
        id: "535905",
        name: "Lego 42094 Technic Raupenlader, bunt"
    }, {
        id: "86541",
        name: "Ministeck 31448 - Leuchtturm, Steckplatten, ca. 9700 Steine und Zubehör"
    }
]

class Search extends React.Component {

    state = {
        value: ''
    }

    render() {
        return (
            <div>
                <Select
                    value={this.state.value}
                    options={values}
                    getOptionLabel={option => option.name}
                    getOptionValue={option => option.id}/>
            </div>
        )
    }
}

export default Search