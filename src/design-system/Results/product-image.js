import React from 'react';
import _get from 'lodash/get'
import _first from 'lodash/first'
import {Flex, Box} from '@rebass/grid'
import {isDesktop} from 'react-device-detect';

const ProductImage = ({images, size, hover}) => {

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
          minHeight: isDesktop
            ? '150px'
            : '100px'
        }}>
          <Box>
            <img
              style={{
              maxHeight: isDesktop
                ? '150px'
                : '100px',
              width: 'auto'
            }}
              src={_first(_get(images, size))}
              alt=""
              className="ProductImage"/>
          </Box>

        </Flex>
      </div>
    </Flex>
  )
}

export default ProductImage;
