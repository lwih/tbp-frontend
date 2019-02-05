import React from 'react'
import {navigate} from 'gatsby';
import {Flex, Box} from '@rebass/grid'
import MobileResultListItem from '../../design-system/Results/result-list-item';

class Product extends React.Component {
    _select() {
        this
            .props
            .select(this.props.product.id)
    }

    _routeToProduct(item) {
        const url = `/app/details?id=${item.id}`
        debugger
        navigate(url, {
            state: {
                selectedItem: item
            }
        })
    }

    render() {
        return (
            <Flex justifyContent="center">
                {/* {isMobile()
                    ? showMobileProduct(this.props.product, (id) => this._routeToProduct(id))
                    : showDesktopProduct(this.props.product, () => this._select())
} */}
                <MobileResultListItem
                    product={this.props.product}
                    onSelect={(item) => this.props.onSelectItem(item)}/>
            </Flex>
        )
    }
}

export default Product
