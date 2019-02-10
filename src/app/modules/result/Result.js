import React from 'react'
import Select from 'react-select'
import {navigate} from 'gatsby'
import {Flex, Box} from '@rebass/grid'
import PrimaryButton from '../../../design-system/Buttons/primary-button'
import _get from 'lodash/get'
import _toArray from 'lodash/toArray'
import _merge from 'lodash/merge'
import Card from '../../../design-system/Cards/card';
import Price from '../../../design-system/Price/price';
import Gallery from '../../../design-system/Galleries/gallery';
import ExternalLink from '../../../design-system/Links/external-link';
import Skeleton from '../../../design-system/Skeletons/skeleton';

function escapeHTML(data) {
    return {__html: data}
}

export const ResultSkeletonComponent = (
    <Card>
        <Flex width={1} flexDirection="column">
            <Box m={2}>
                <Skeleton height="48px" width="100%"/>
            </Box>
            <Box m={2}>
                <Skeleton height="250px" width="100%"/>
            </Box>
            <Box mt={3} alignSelf="flex-end">
                <Skeleton height="24px" width="100%"/>
            </Box>
            <Box m={2}>
                <Skeleton height="32px" width="100%"/>
            </Box>
            <Box m={2}>
                <Skeleton height="128px" width="100%"/>
            </Box>
        </Flex>
    </Card>
)

class Result extends React.Component {

    state = {
        result: undefined
    }

    componentDidMount() {
        fetch(`https://api.thebetterplay.com/product/${_get(this.props.item, 'id')}?image_sizes=tiny,large`)
            .then(response => response.json())
            .then(result => {
                this.setState({result})
            })
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.item && this.props.item !== nextProps.item) {
            fetch(`https://api.thebetterplay.com/product/${_get(nextProps.item, 'id')}?image_sizes=tiny,large`)
                .then(response => response.json())
                .then(result => {
                    this.setState({result})
                })
        }
    }

    render() {
        let imagesForGallery = []
        if (!!this.state.result) {
            const flattenImagesBySize = (images, size, target) => (images && _get(images, size).map(image => ({[target]: image})))
            imagesForGallery = _toArray(_merge(flattenImagesBySize(this.state.result.imageUrls, 'tiny', 'thumbnail'), flattenImagesBySize(this.state.result.imageUrls, 'large', 'original')))
        }

        return !!this.state.result
            ? (
                <Card>
                    <Flex width={1} flexDirection="column">
                        <Box m={2}>
                            <b>
                                {this.state.result.name}
                            </b>

                        </Box>
                        <Box m={2}>
                            <Gallery images={imagesForGallery}/>
                        </Box>
                        <Box my={4} mx={2}>
                            <Flex>
                                <Box
                                    width={1 / 3}
                                    alignSelf="center"
                                    pr={2}
                                    style={{
                                    textAlign: 'right'
                                }}>
                                    <Price
                                        size="huge"
                                        price={this.state.result.price
                                        ? this.state.result.price.displayPrice
                                        : ''}/>
                                </Box>
                                <Box width={2 / 3}>
                                    <ExternalLink href={this.state.result.deeplinkUrl} target="_blank">
                                        <PrimaryButton size="small">Zum product</PrimaryButton>
                                    </ExternalLink>
                                </Box>
                            </Flex>
                        </Box>

                        <Box m={2}>
                            {(!!this.state.result.description) && this.state.result.description.map((d, i) => (
                                <Flex
                                    key={`description-${i}`}
                                    margin="5px"
                                    dangerouslySetInnerHTML={escapeHTML('-&nbsp;' + d)}></Flex>
                            ))
}
                        </Box>
                    </Flex>
                </Card>
            )
            : ResultSkeletonComponent
    }
}

export default Result