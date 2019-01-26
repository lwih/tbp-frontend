import React from 'react'
import Select from 'react-select'
import {navigate} from 'gatsby'
import Product from '../../components/Product';
import {Flex, Box} from '@rebass/grid';
import _slice from 'lodash/slice'

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

        const {itemsAmount} = this.props
        const results = itemsAmount
            ? _slice(this.state.results, 0, itemsAmount)
            : this.state.results
        return (
            <Flex flexWrap="wrap">
                {results.map(result => (
                    <Box
                        key={result.id}
                        my={2}
                        my={3}
                        width={[
                        1, 1 / 2,
                        1 / 4
                    ]}>
                        <Product product={result}/>
                    </Box>
                ))}
            </Flex>
        )
    }
}

export default Results