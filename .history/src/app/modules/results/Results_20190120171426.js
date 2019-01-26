import React from 'react'
import Select from 'react-select'
import {navigate} from 'gatsby'

class Search extends React.Component {

    render() {
        return (
            <div>
                {this.props.location.state.search.age_from}
            </div>
        )
    }
}

export default Search