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
import SSRRenderer from '../../components/ssr-renderer';
import {isMobile} from 'react-device-detect';

export const SkeletonCardMobile = (props) => (
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

export const SkeletonCardDesktop = (props) => (
    <Card >
        <Flex flexDirection="column-reverse">
            <Box>
                <Flex
                    flexDirection="column"
                    style={{
                    height: '100%'
                }}>
                    <Box py={2}>
                        <Skeleton height="50px" width="100%"/>
                    </Box>
                    <Box mt="auto" mb={2} alignSelf="flex-end">
                        <Skeleton height="24px" width="100%"/>
                    </Box>
                    <Box mt={2}>
                        <Skeleton height="44px" width="100%"/>
                    </Box>
                </Flex>
            </Box>
            <Box width={1} alignSelf="center">
                <Skeleton height="150px" width="100%"/>
            </Box>
        </Flex>
    </Card>
)

const ResultListItemComponentMobile = ({product, onSelect, className}) => {
    return _isEmpty(product)
        ? SkeletonCardMobile({})
        : (
            <Card onClick={(e) => onSelect(product)}>
                <Flex flexDirection="row" className={className}>
                    <Box width={1}>
                        <Flex width={1}>
                            <Box width={1 / 3} alignSelf="center" onClick={e => onSelect(product)}>
                                <ProductImage images={product.imageUrls} size="medium" hover={false}/>
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
                                        <PrimaryButton onClick={e => onSelect(product)} size="small">Zum Produkt</PrimaryButton>
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
        ? SkeletonCardDesktop({})
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
                                <PrimaryButton onClick={e => onSelect(product)} size="small">Zum Produkt</PrimaryButton>
                            </Box>
                        </Flex>
                    </Box>
                    <Box width={1} alignSelf="center">
                        <ProductImage images={product.imageUrls} size="medium" hover={false}/>
                    </Box>
                </Flex>
            </Card>
        )
}

const ResultListItemDesktop = styled(ResultListItemComponentDesktop)`
    min-height: 300px;

    &:hover {
        cursor: ${isMobile
    ? 'none'
    : 'pointer'};
    }
`

const ResultListItem = (props) => (
    <SSRRenderer
        mobileComponent={< ResultListItemMobile {
        ...props
    } />}
        desktopComponent={< ResultListItemDesktop {
        ...props
    } />}/>
)

export default ResultListItem