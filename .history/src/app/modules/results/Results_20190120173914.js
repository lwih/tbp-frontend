import React from 'react'
import Select from 'react-select'
import {navigate} from 'gatsby'

class Results extends React.Component {

    render() {
        // debugger
        return (
            <div>
                {this.props.searchParams.age_from}
            </div>
        )
    }
}

export default Results