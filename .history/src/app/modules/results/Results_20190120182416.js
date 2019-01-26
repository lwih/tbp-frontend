import React from 'react'
import Select from 'react-select'
import {navigate} from 'gatsby'

class Results extends React.Component {

    state = {
        results: undefined
    }

    componentDidMount() {
        `https://api.thebetterplay.com/product/search?c=Brettspiele&image_sizes=medium&age_until=${this.props.searchParams.age_until}&age_from=${this.props.searchParams.age_from}`
        fetch(`https://api.thebetterplay.com/product/${this.props.item.id}?image_sizes=tiny,large`)
            .then(response => response.json())
            .then(result => {
                debugger
                this.setState({result})
            })
    }

    render() {
        // debugger
        return (
            <div>
                results {/* {this.props.searchParams.age_from}
                {this.props.searchParams.age_until} */}
                {/* {this.props.searchParams.term} */}
                {/* {this.props.searchParams.category}
                {this.props.searchParams.id} */}
            </div>
        )
    }
}

export default Results