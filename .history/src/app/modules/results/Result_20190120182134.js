import React from 'react'
import Select from 'react-select'
import {navigate} from 'gatsby'

class Result extends React.Component {

    state = {
        result: undefined
    }

    componentDidMount() {
        fetch(`https://api.thebetterplay.com/product/${this.props.item.id}?image_sizes=tiny,large`).then(response => response.json())
    }
    render() {
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