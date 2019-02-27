import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../Buttons/primary-button';
import Price from '../Price/price';
import Truncate from 'react-truncate';
import ProductImage from './product-image';
import {ExternalLink} from '../Links/external-link';
import {Flex, Box} from '@rebass/grid';
import {colors, radii, sizes} from '../theme';
import Card from '../Cards/card';
import _isEmpty from 'lodash/isEmpty'
import Skeleton from '../Skeletons/skeleton';
import {isMobile} from 'react-device-detect';

export const SkeletonCard = (props) => (
    <Card>
        <Flex flexDirection="row">
            <Box width={1}>
                <Flex width={1}>
                    <Box width={1 / 3} alignSelf="center">
                        <Skeleton height="96px" width="100%"/>
                    </Box>
                    <Box width={2 / 3} pl={3}>
                        <Flex
                            flexDirection="column"
                            style={{
                            height: '100%'
                        }}>
                            <Box>
                                <Skeleton height="22px" width="100%"/>
                            </Box>

                            <Box mt={3} width={1}>
                                <Flex width={1} flexDirection="column">
                                    <Box alignSelf="flex-end">
                                        <Skeleton height="22px" width="40px"/>
                                    </Box>
                                    <Box width={1} mt={1}>
                                        <Skeleton height="32px" width="100%"/>
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    </Card>
)

const ResultListItemComponentMobile = ({product, onSelect, className}) => {
    return _isEmpty(product)
        ? SkeletonCard({})
        : (
            <Card>
                <Flex flexDirection="row" className={className}>
                    <Box width={1}>
                        <Flex width={1}>
                            <Box width={1 / 3} alignSelf="center" onClick={e => onSelect(product)}>
                                <ProductImage images={product.imageUrls} size="tiny" hover={false}/>
                            </Box>
                            <Box width={2 / 3} pl={3}>
                                <Flex
                                    flexDirection="column"
                                    style={{
                                    height: '100%'
                                }}>
                                    <Box>
                                        <Truncate width={200}>
                                            {product.name}
                                        </Truncate>
                                    </Box>
                                    <Box mt="auto" alignSelf="flex-end">
                                        <Price price={product.price.displayPrice}/>
                                    </Box>
                                    <Box mt={2}>
                                        <PrimaryButton onClick={e => onSelect(product)} size="small">Zum Product</PrimaryButton>
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Card>
        )
}

const ResultListItemMobile = styled(ResultListItemComponentMobile)``

const ResultListItemComponentDesktop = ({product, onSelect, className}) => {
    return _isEmpty(product)
        ? SkeletonCard({})
        : (
            <Card onClick={e => onSelect(product)}>
                <Flex flexDirection="column-reverse" className={className}>

                    <Box>
                        <Flex
                            flexDirection="column"
                            style={{
                            height: '100%'
                        }}>
                            <Box>
                                <Truncate lines={2}>
                                    {product.name}
                                </Truncate>
                            </Box>
                            <Box mt="auto" mb={2} alignSelf="flex-end">
                                <Price price={product.price.displayPrice} size={sizes.big}/>
                            </Box>
                            <Box mt={2}>
                                <PrimaryButton onClick={e => onSelect(product)} size="small">Zum Product</PrimaryButton>
                            </Box>
                        </Flex>
                    </Box>
                    <Box width={1} alignSelf="center">
                        <ProductImage images={product.imageUrls} size="tiny" hover={false}/>
                    </Box>
                </Flex>
            </Card>
        )
}

const ResultListItemDesktop = styled(ResultListItemComponentDesktop)`
    min-height: 300px;

    &:hover {
        cursor: pointer;
    }
`

const ResultListItem = isMobile
    ? ResultListItemMobile
    : ResultListItemDesktop;

export default ResultListItem