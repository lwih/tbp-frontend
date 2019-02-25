import React from 'react';
import placeholderImage from '../../images/product-placeholder.jpg'
import _get from 'lodash/get'
import _first from 'lodash/first'
import {Flex, Box} from '@rebass/grid'
import {isMobile} from 'react-device-detect';

const ProductImage = ({images, size, hover}) => {

  const imageUrl = images
    ? _first(_get(images, size))
    : placeholderImage
  const withHover = hover && 'ProductImageContainer-HoverCover';

  return (
    <Flex justifyContent="center">
      <div
        className={`ProductImageContainer ${withHover}`}
        data-content={'blablabla'}>
        <Flex
          className="ProductImage-AlignWrapper"
          alignItems="center"
          style={{
          minHeight: isMobile
            ? '100px'
            : '150px'
        }}>
          <Box>
            <img
              style={{
              maxHeight: isMobile
                ? '100px'
                : '150px',
              width: 'auto'
            }}
              src={imageUrl}
              alt=""
              className="ProductImage"/>
          </Box>

        </Flex>
      </div>
    </Flex>
  )
}

export default ProductImage;
