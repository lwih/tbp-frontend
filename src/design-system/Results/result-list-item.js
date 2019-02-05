import React from 'react'
import styled from 'styled-components'
import {isMobile} from 'mobile-detect'
import PrimaryButton from '../Buttons/primary-button';
import Price from '../Price/price';
import Truncate from 'react-truncate';
import ProductImage from './product-image';
import {ExternalLink} from '../Links/external-link';
import {Flex, Box} from '@rebass/grid';
import {colors, radii} from '../theme';
import Card from '../Cards/card';
import _isEmpty from 'lodash/isEmpty'
import Skeleton from '../Skeletons/skeleton';

const SkeletonCard = (
    <Card>
        <Flex flexDirection="row">
            <Box width={1}>
                <Flex width={1}>
                    <Box width={1 / 3} alignSelf="center">
                        <Skeleton height="110px" width="100%"/>
                    </Box>
                    <Box width={2 / 3} pl={3}>
                        <Flex
                            flexDirection="column"
                            style={{
                            height: '100%'
                        }}>
                            <Box>
                                <Skeleton height="24px" width="100%"/>
                            </Box>
                            <Box mt="auto" alignSelf="flex-end">
                                <Skeleton height="24px" width="100%"/>
                            </Box>
                            <Box mt={2}>
                                <Skeleton height="32px" width="100%"/>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    </Card>
)

const MobileResultListItemComponent = ({product, onSelect, className}) => {
    return _isEmpty(product)
        ? SkeletonCard
        : (
            <Card>
                <Flex flexDirection="row" className={className}>
                    <Box width={1}>
                        <Flex width={1}>
                            <Box width={1 / 3} alignSelf="center">
                                <ProductImage images={product.imageUrls} size="medium" hover={false}/>
                            </Box>
                            <Box width={2 / 3} pl={3}>
                                <Flex
                                    flexDirection="column"
                                    style={{
                                    height: '100%'
                                }}>
                                    <Box>
                                        {/* <Truncate lines={1}> */}
                                        <Truncate width={200}>
                                            {product.name}
                                        </Truncate>
                                    </Box>
                                    <Box mt="auto" alignSelf="flex-end">
                                        <Price price={product.price.displayPrice}/>
                                    </Box>
                                    <Box mt={2}>
                                        <PrimaryButton onClick={e => onSelect(product)}>Zum Product</PrimaryButton>
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Card>
        )
}

const MobileResultListItem = styled(MobileResultListItemComponent)``

const DesktopResultListItem = (product, onSelect) => (
    <Flex flexDirection="column">
        <Box>
            <ProductImage images={product.imageUrls} size="medium" hover={true}/>
        </Box>
        <Box>
            <Truncate lines={2}>
                {product.name}
            </Truncate>
        </Box>
        <Box>
            <Price price={product.price.displayPrice}/>
        </Box>
        <Box>
            <PrimaryButton onClick={e => onSelect(product.id)}>Zum Product</PrimaryButton>
        </Box>
    </Flex>
)

export default MobileResultListItem