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
            : ''}${this.props.searchParams.q
                ? `&q=${this.props.searchParams.q}`
                : ''}&image_sizes=medium&age_until=${this.props.searchParams.age_until}&age_from=${this.props.searchParams.age_from}`
        fetch(url)
            .then(response => response.json())
            .then(results => {
                // debugger
                this.setState({results: results.products})
            })
    }

    componentWillReceiveProps(nextProps) {

        if (this.props.searchParams && this.props.searchParams !== nextProps.searchParams) {
            debugger
            const url = `https://api.thebetterplay.com/product/search?${nextProps.searchParams.category
                ? `c=${nextProps.searchParams.category}`
                : ''}${nextProps.searchParams.q
                    ? `&q=${nextProps.searchParams.q}`
                    : ''}&image_sizes=medium&age_until=${nextProps.searchParams.age_until}&age_from=${nextProps.searchParams.age_from}`
            fetch(url)
                .then(response => response.json())
                .then(results => {
                    // debugger
                    this.setState({results: results.products})
                })
        }
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
                {/* {this.props.searchParams.q} */}
                {/* {this.props.searchParams.category}
                {this.props.searchParams.id} */}
            </div>
        )
    }
}

export default Results