import React from 'react'
import Select from 'react-select'
import {navigate} from 'gatsby'
import Product from '../../components/Product';
import {Flex, Box} from '@rebass/grid';
import _slice from 'lodash/slice'
import _get from 'lodash/get'
import PrimaryButton from '../../../design-system/Buttons/primary-button';
import SecondaryButton from '../../../design-system/Buttons/secondary-button';

class Results extends React.Component {

    state = {
        results: [],
        offset: 0
    }

    componentDidMount() {
        if (this.props.searchParams) {
            const url = `https://api.thebetterplay.com/product/search?offset=${this.state.offset * 20}&${this.props.searchParams.category
                ? `c=${_get(this.props.searchParams, 'category.name')}`
                : ''}${this.props.searchParams.q
                    ? `&q=${this.props.searchParams.q}`
                    : ''}&image_sizes=medium&age_until=${this.props.searchParams.age_until}&age_from=${this.props.searchParams.age_from}`
            fetch(url)
                .then(response => response.json())
                .then(results => {
                    // debugger
                    this.setState({results: results.products})
                })
        } else {
            const url = `https://api.thebetterplay.com/product/search?&image_sizes=medium&age_until=1200&age_from=0`
            fetch(url)
                .then(response => response.json())
                .then(results => {
                    // debugger
                    this.setState({results: results.products})
                })
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (this.props.searchParams && this.props.searchParams !== nextProps.searchParams) {
            const url = `https://api.thebetterplay.com/product/search?offset=${this.state.offset * 20}&${nextProps.searchParams.category
                ? `c=${_get(nextProps.searchParams, 'category.name')}`
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

    onLoadMore = () => {
        const newOffset = this.state.offset + 1
        this.setState({offset: newOffset})
        const url = `https://api.thebetterplay.com/product/search?offset=${newOffset * 20}&${this.props.searchParams.category
            ? `c=${_get(this.props.searchParams, 'category.name')}`
            : ''}${this.props.searchParams.q
                ? `&q=${this.props.searchParams.q}`
                : ''}&image_sizes=medium&age_until=${this.props.searchParams.age_until}&age_from=${this.props.searchParams.age_from}`
        fetch(url)
            .then(response => response.json())
            .then(results => {
                // debugger
                this.setState({
                    results: [
                        ...this.state.results,
                        ...results.products
                    ]
                })
            })
    }

    render() {
        // debugger

        const {itemsAmount} = this.props
        let results = [
            {},
            {},
            {},
            {},
            {}, {}, {}, {}, {}, {}, {}
        ]

        if (this.state.results.length) {
            results = itemsAmount
                ? _slice(this.state.results, 0, itemsAmount)
                : this.state.results
        }

        return (
            <Flex flexWrap="wrap" flexDirection="column">
                {results.map(result => (
                    <Box
                        key={result.id}
                        width={[
                        1, 1 / 2,
                        1 / 4
                    ]}>
                        <Product product={result} onSelectItem={this.props.onSelectItem}/>
                    </Box>
                ))}
                {!this.props.hideLoadMore && (
                    <Box m={4}>
                        <Flex justifyContent="center">
                            <Box width={3 / 5}>
                                <SecondaryButton onClick={() => this.onLoadMore()}>Load more</SecondaryButton>
                            </Box>
                        </Flex>
                    </Box>
                )
}
            </Flex>
        )
    }
}

export default Results