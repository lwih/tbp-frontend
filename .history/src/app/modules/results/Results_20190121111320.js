import React from 'react'
import Select from 'react-select'
import {navigate} from 'gatsby'

class Results extends React.Component {

    state = {
        results: []
    }

    componentDidMount() {
        const url = `https://api.thebetterplay.com/product/search?${this.props.searchParams.category
            ? `c=${this.props.searchParams.category.name}`
            : ''}${this.props.searchParams.term
                ? `q=${this.props.searchParams.term}`
                : ''}&image_sizes=medium&age_until=${this.props.searchParams.age_until}&age_from=${this.props.searchParams.age_from}`
        fetch(url)
            .then(response => response.json())
            .then(results => {
                // debugger
                this.setState({results: results.products})
            })
    }

    render() {
        // debugger
        return (
            <div>
                {this
                    .state
                    .results
                    .map(result => (
                        <div>
                            {result.name}
                        </div>
                    ))}
                {/* {this.props.searchParams.age_from}
                {this.props.searchParams.age_until} */}
                {/* {this.props.searchParams.term} */}
                {/* {this.props.searchParams.category}
                {this.props.searchParams.id} */}
            </div>
        )
    }
}

export default Results