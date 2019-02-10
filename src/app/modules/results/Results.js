import React from 'react'
import Select from 'react-select'
import {navigate} from 'gatsby'
import Product from '../../components/Product';
import {Flex, Box} from '@rebass/grid';
import _slice from 'lodash/slice'
import _get from 'lodash/get'
import PrimaryButton from '../../../design-system/Buttons/primary-button';
import SecondaryButton from '../../../design-system/Buttons/secondary-button';
import Card from '../../../design-system/Cards/card';
import {SkeletonCard} from '../../../design-system/Results/result-list-item';
import WordCloud from '../../../design-system/WordClouds/wordcloud';
import {MIN_AGE, MAX_AGE} from '../../components/Ages';

class Results extends React.Component {

    state = {
        results: [],
        categories: [],
        offset: 0,
        isFetching: false
    }

    componentDidMount() {
        this.setState({isFetching: true})
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
                    this.setState({isFetching: false})
                    this.setState({results: results.products})
                    this.setState({categories: results.categories})
                })
        } else {
            const url = `https://api.thebetterplay.com/product/search?&image_sizes=medium&age_until=1200&age_from=0`
            fetch(url)
                .then(response => response.json())
                .then(results => {
                    // debugger
                    this.setState({results: results.products})
                    this.setState({categories: results.categories})
                    this.setState({isFetching: false})
                })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.searchParams && this.props.searchParams !== nextProps.searchParams) {
            this.setState({isFetching: true})
            const url = `https://api.thebetterplay.com/product/search?offset=${ 0}&${nextProps.searchParams.category
                ? `c=${_get(nextProps.searchParams, 'category.name')}`
                : ''}${nextProps.searchParams.q
                    ? `&q=${nextProps.searchParams.q}`
                    : ''}&image_sizes=medium&age_until=${nextProps.searchParams.age_until}&age_from=${nextProps.searchParams.age_from}`
            fetch(url)
                .then(response => response.json())
                .then(results => {
                    // debugger
                    this.setState({isFetching: false})
                    this.setState({results: results.products})
                    this.setState({categories: results.categories})
                })
        }
    }

    onClickCloud = (category) => {
        const a = this.props.searchParams
        const newState = Object.assign({}, {
            state: {
                search: Object.assign({}, this.props.searchParams, {category}),
                selectedItem: undefined
            }
        })
        debugger

        navigate('/app/results', newState)
    }

    onLoadMore = () => {
        const newOffset = this.state.offset + 1
        this.setState({offset: newOffset})
        this.setState({isFetching: true})
        const url = `https://api.thebetterplay.com/product/search?offset=${newOffset * 20}&${this.props.searchParams.category
            ? `c=${_get(this.props.searchParams, 'category.name')}`
            : ''}${this.props.searchParams.q
                ? `&q=${this.props.searchParams.q}`
                : ''}&image_sizes=medium&age_until=${this.props.searchParams.age_until}&age_from=${this.props.searchParams.age_from}`
        fetch(url)
            .then(response => response.json())
            .then(results => {
                // debugger
                this.setState({isFetching: false})
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
        if (this.state.isFetching && this.state.offset === 0) {
            return (
                <Flex flexWrap="wrap" flexDirection="column">
                    {results.map(result => (
                        <Box
                            key={result.id}
                            px={2}
                            py={1}
                            width={[
                            1, 1 / 2,
                            1 / 4
                        ]}>
                            <SkeletonCard/>
                        </Box>
                    ))}
                </Flex>
            )
        }

        if (this.state.results.length) {
            results = itemsAmount
                ? _slice(this.state.results, 0, itemsAmount)
                : this.state.results
        } else {
            return (
                <Box p={2}>
                    <Card>
                        <Flex py={6} justifyContent="center">
                            <Box>
                                Keine Resultate gefunden :(
                            </Box>
                        </Flex>
                    </Card>
                </Box>
            )
        }

        return (
            <Flex flexWrap="wrap" flexDirection="column">
                {results.map(result => (
                    <Box
                        key={result.id}
                        px={2}
                        py={1}
                        width={[
                        1, 1 / 2,
                        1 / 4
                    ]}>
                        <Product product={result} onSelectItem={this.props.onSelectItem}/>
                    </Box>
                ))}

                {!this.props.hideLoadMore && this.state.results.length && this.state.results.length % 20 === 0 && (
                    <Box m={3}>
                        <Flex justifyContent="center">
                            <Box width={3 / 5}>
                                <SecondaryButton onClick={() => this.onLoadMore()}>Load more</SecondaryButton>
                            </Box>
                        </Flex>
                    </Box>
                )
}

                {this.state.categories.length && (
                    <Box p={3} mb={3}>
                        <WordCloud
                            clouds={this.state.categories}
                            onClickCloud={category => this.onClickCloud(category)}/>
                    </Box>
                )}
            </Flex>
        )
    }
}

Results.defaultProps = {
    searchParams: {
        age_from: MIN_AGE,
        age_until: MAX_AGE,
        q: ''
    }
}

export default Results