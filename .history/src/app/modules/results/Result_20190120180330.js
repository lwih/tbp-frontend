import React from 'react'
import Select from 'react-select'
import {navigate} from 'gatsby'

class Result extends React.Component {

    render() {
        // debugger
        return (
            <div>
                {this.props.item.name}
                {/* {this.props.searchParams.term} */}
                {/* {this.props.searchParams.category}
                {this.props.searchParams.id} */}
            </div>
        )
    }
}

export default Result