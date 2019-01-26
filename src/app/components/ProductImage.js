import React from 'react';
// import './ProductImage.css'
import placeholderImage from '../../images/product-placeholder.jpg'
import _get from 'lodash/get'
import _first from 'lodash/first'
import {Flex, Box} from '@rebass/grid'

const ProductImage = ({images, size, hover}) => {

  const imageUrl = images
    ? _first(_get(images, size))
    : placeholderImage
  const withHover = hover && 'ProductImageContainer-HoverCover';

  return (
    <Flex>
      <div
        className={`ProductImageContainer ${withHover}`}
        data-content={'blablabla'}>
        <div className="ProductImage-AlignWrapper">
          <img src={imageUrl} alt="" className="ProductImage"/>
        </div>
      </div>
    </Flex>
  )
}

export default ProductImage;
