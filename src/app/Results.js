import React from 'react'
import Select from 'react-select'
import { navigate } from 'gatsby'
import Product from './product'
import { Flex, Box } from '@rebass/grid'
import _slice from 'lodash/slice'
import _get from 'lodash/get'
import PrimaryButton from '../design-system/Buttons/primary-button'
import SecondaryButton from '../design-system/Buttons/secondary-button'
import Card from '../design-system/Cards/card'
import {
  SkeletonCardMobile,
  SkeletonCardDesktop,
} from '../design-system/Results/result-list-item'
import WordCloud from './wordcloud'
import { MIN_AGE, MAX_AGE } from './ages'
import { isMobile } from 'react-device-detect'
import queryString from 'query-string'

const resultsRequest = (searchParams, offset) => {
  let params = {
    image_sizes: 'medium',
    offset: offset * 20,
    age_from: searchParams.age_from,
    age_until: searchParams.age_until,
  }

  if (searchParams.category && searchParams.category.id !== '*') {
    params.c = _get(searchParams, 'category.name')
  } else if (searchParams.q) {
    params.q = searchParams.q
  } else if (searchParams.coreCategory) {
    params.cc = _get(searchParams, 'coreCategory.id')
  }

  let url =
    'https://api.thebetterplay.com/product/search/?' +
    queryString.stringify(params)

  return url
}

class Results extends React.Component {
  state = {
    results: [],
    categories: [],
    offset: 0,
    isFetching: false,
    hasStartedFetchingOnce: false,
  }

  componentDidMount() {
    this.setState({ isFetching: true })
    if (this.props.searchParams) {
      const url = resultsRequest(this.props.searchParams, this.state.offset)

      fetch(url)
        .then((response) => response.json())
        .then((results) => {
          this.setState({
            isFetching: false,
            hasStartedFetchingOnce: true,
            results: results.products,
            categories: results.categories,
          })
        })
    } else {
      const url = `https://api.thebetterplay.com/product/search?&image_sizes=medium&age_until=1200&age_from=0`
      fetch(url)
        .then((response) => response.json())
        .then((results) => {
          this.setState({
            isFetching: false,
            hasStartedFetchingOnce: true,
            results: results.products,
            categories: results.categories,
          })
        })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.searchParams &&
      this.props.searchParams !== nextProps.searchParams
    ) {
      this.setState({ isFetching: true })
      const url = resultsRequest(nextProps.searchParams, this.state.offset)
      fetch(url)
        .then((response) => response.json())
        .then((results) => {
          this.setState({
            isFetching: false,
            hasStartedFetchingOnce: true,
            results: results.products,
            categories: results.categories,
          })
        })
    }
  }

  onLoadMore = () => {
    const newOffset = this.state.offset + 1
    this.setState({ offset: newOffset })
    this.setState({ isFetching: true })
    const url = resultsRequest(this.props.searchParams, newOffset)
    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        this.setState({ isFetching: false })
        this.setState({
          results: [...this.state.results, ...results.products],
        })
      })
  }

  onSelectItem = (item) => {
    navigate(`/app/details`, {
      state: {
        search: this.props.searchParams,
        selectedItem: item,
      },
    })
  }

  render() {
    const { itemsAmount } = this.props
    let results = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    if (this.state.isFetching && this.state.offset === 0) {
      return (
        <Flex flexWrap="wrap">
          {results.map((result, index) => (
            <Box
              key={`result-skeleton-${index}`}
              px={2}
              py={1}
              width={[1, 1 / 2, 1 / 5]}
            >
              {isMobile ? <SkeletonCardMobile /> : <SkeletonCardDesktop />}
            </Box>
          ))}
        </Flex>
      )
    }

    if (this.state.results.length) {
      results = itemsAmount
        ? _slice(this.state.results, 0, itemsAmount)
        : this.state.results
    } else if (!this.state.isFetching && this.state.hasStartedFetchingOnce) {
      return (
        <Box p={2}>
          <Card>
            <Flex py={6} justifyContent="center">
              <Box>Keine Resultate gefunden :(</Box>
            </Flex>
          </Card>
        </Box>
      )
    }

    return (
      <React.Fragment>
        <Flex flexWrap="wrap">
          {results.map((result) => (
            <Box key={result.id} px={2} py={1} width={[1, 1 / 2, 1 / 5]}>
              <Product product={result} onSelectItem={this.onSelectItem} />
            </Box>
          ))}
        </Flex>
        <Flex>
          {!this.props.hideLoadMore &&
            this.state.results.length &&
            this.state.results.length % 20 === 0 && (
              <Box p={3} width={1}>
                <Flex justifyContent="center">
                  <Box width={[3 / 5, 3 / 5, 2 / 10]}>
                    <SecondaryButton onClick={() => this.onLoadMore()}>
                      Mehr zeigen
                    </SecondaryButton>
                  </Box>
                </Flex>
              </Box>
            )}
        </Flex>
      </React.Fragment>
    )
  }
}

Results.defaultProps = {
  searchParams: {
    age_from: MIN_AGE,
    age_until: MAX_AGE,
    q: '',
  },
}

export default Results
