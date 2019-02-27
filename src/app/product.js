import React from 'react'
import {navigate} from 'gatsby';
import {Flex, Box} from '@rebass/grid'
import ResultListItem from '../design-system/Results/result-list-item';

class Product extends React.Component {
    render() {
        return (
            <Flex justifyContent="center">
                <ResultListItem
                    product={this.props.product}
                    onSelect={(item) => this.props.onSelectItem(item)}/>
            </Flex>
        )
    }
}

export default Product
