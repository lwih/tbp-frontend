import React from 'react'
import {navigate} from 'gatsby';
import {Flex, Box} from '@rebass/grid'
import {isMobile} from 'mobile-detect'
// import {withRouter} from 'react-router' import {getShortenedLocale} from
// '../../data/translations/translations' import Flexbox from 'flexbox-react'
// import Translate from 'react-translate-component' import Truncate from
// 'react-truncate'; import Price from './Price' import {Link} from
// 'react-router-dom' import ProductButton from './ProductButton' import
// ProductImage from './ProductImage' import {isDeviceConsideredMobile} from
// '../../utils/appUtils' import {detailsUrl} from '../../data/urls' import
// './Product.css'

const showMobileProduct = (product, onSelect) => {
    return (
        <Flex>
            <Box>
                modiile {product.name}
            </Box>
        </Flex>
    // <Flexbox flexBasis="100%" flexWrap="wrap" onClick={() => select(product.id)}>
    //   <Flexbox flexBasis="40%" justifyContent="center">     <ProductImage
    // images={product.imageUrls} size="medium" hover={false}/>   </Flexbox>
    // <Flexbox flexBasis="2%" flexWrap="wrap"></Flexbox>   <Flexbox flexBasis="58%"
    // flexWrap="wrap">     <Flexbox flexBasis="100%" className="ProductName">
    // <Truncate lines={1}>         {product.name}       </Truncate>     </Flexbox>
    // <Flexbox flexBasis="100%" justifyContent="flex-start" marginTop="5px">
    // <Price         price={product.price         ? product.price.displayPrice :
    // ''}/> </Flexbox>     <Flexbox flexBasis="100%" justifyContent="center"
    // marginTop="5px">       <div className="ProductButtonLink">         <button
    // className="ProductButton">       <Translate content="product.goToDetails"/>
    // </button> </div>     </Flexbox>   </Flexbox> </Flexbox>
    )
}

const showDesktopProduct = (product, onSelect) => {
    return (
        <Flex>
            <Box>
                showDesktopProduct {product.name}
            </Box>
        </Flex>
    // <Flexbox flexBasis="100%" flexWrap="wrap" maxWidth="170px"
    // marginBottom="10px">   <Flexbox flexBasis="100%" justifyContent="center"
    // onClick={select}>     <ProductImage images={product.imageUrls} size="medium"
    // hover={true}/>   </Flexbox>   <Flexbox flexBasis="100%"
    // className="ProductName" marginTop="10px">     <Truncate lines={2}>
    // {product.name}     </Truncate>   </Flexbox>   <Flexbox flexBasis="50%"
    // justifyContent="flex-start" marginTop="5px">     <Price price={product.price
    // ? product.price.displayPrice       : ''}/> </Flexbox>   <Flexbox
    // flexBasis="90%" justifyContent="center" marginTop="5px">     <ProductButton
    // onClick={select} translationKey="product.goToDetails"/>   </Flexbox>
    // </Flexbox>
    )
}

class Product extends React.Component {
    _select() {
        this
            .props
            .select(this.props.product.id)
    }

    _routeToProduct(id) {
        const url = `/de/app/details?id=${id}`
        navigate(url)
    }

    render() {
        return (
            <Flex justifyContent="center" className="Product" p={3}>
                {/* {isMobile()
                    ? showMobileProduct(this.props.product, (id) => this._routeToProduct(id))
                    : showDesktopProduct(this.props.product, () => this._select())
} */}
                {showDesktopProduct(this.props.product, () => this._select())}
            </Flex>
        )
    }
}

export default Product
