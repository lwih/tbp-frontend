import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import { Flex, Box } from '@rebass/grid'
import PrimaryButton from '../design-system/Buttons/primary-button'
import _get from 'lodash/get'
import _toArray from 'lodash/toArray'
import _merge from 'lodash/merge'
import Card from '../design-system/Cards/card'
import Price from '../design-system/Price/price'
import Gallery from '../design-system/Galleries/gallery'
import ExternalLink from '../design-system/Links/external-link'
import Skeleton from '../design-system/Skeletons/skeleton'
import { isMobile } from 'react-device-detect'
import { trackClickout } from '../tracking'

function escapeHTML(data) {
  return { __html: data }
}

export const ResultSkeletonComponent = (
  <Card>
    <Flex width={1} flexDirection="column">
      <Box m={2}>
        <Skeleton height="48px" width="100%" />
      </Box>
      <Box m={2}>
        <Skeleton height="250px" width="100%" />
      </Box>
      <Box mt={3} alignSelf="flex-end">
        <Skeleton height="24px" width="100%" />
      </Box>
      <Box m={2}>
        <Skeleton height="32px" width="100%" />
      </Box>
      <Box m={2}>
        <Skeleton height="128px" width="100%" />
      </Box>
    </Flex>
  </Card>
)

const ResultMobile = ({ imagesForGallery, result, onClickout }) => (
  <Flex width={1} flexDirection="column">
    <Box m={2}>
      <b>{result.name}</b>
    </Box>
    <Box m={2}>
      <Gallery images={imagesForGallery} />
    </Box>
    <Box my={4} mx={2}>
      <Flex>
        <Box
          width={1 / 3}
          alignSelf="center"
          pr={2}
          style={{
            textAlign: 'right',
          }}
        >
          <Price
            size="huge"
            price={result.price ? result.price.displayPrice : ''}
          />
        </Box>
        <Box width={2 / 3}>
          <ExternalLink href={result.deeplinkUrl} target="_blank">
            <PrimaryButton size="small" onClick={() => onClickout(result)}>
              Zum Produkt
            </PrimaryButton>
          </ExternalLink>
        </Box>
      </Flex>
    </Box>

    <Box m={2}>
      {!!result.description &&
        result.description.map((d, i) => (
          <Flex
            key={`description-${i}`}
            margin="5px"
            dangerouslySetInnerHTML={escapeHTML('-&nbsp;' + d)}
          ></Flex>
        ))}
    </Box>
  </Flex>
)

const ResultDesktop = ({ imagesForGallery, result, onClickout }) => (
  <Flex p={4}>
    <Box width={1 / 2} alignSelf="center">
      <Gallery images={imagesForGallery} />
    </Box>
    <Box width={1 / 2}>
      <Flex flexDirection="column">
        <Box mb={3}>
          <b>{result.name}</b>
        </Box>
        <Box my={3}>
          <Price
            size="huge"
            price={result.price ? result.price.displayPrice : ''}
          />
        </Box>
        <Box my={3}>
          {!!result.description &&
            result.description.map((d, i) => (
              <Flex
                key={`description-${i}`}
                margin="5px"
                dangerouslySetInnerHTML={escapeHTML('-&nbsp;' + d)}
              ></Flex>
            ))}
        </Box>
        <Box width={1} alignSelf="center" mt={3}>
          <ExternalLink href={result.deeplinkUrl} target="_blank">
            <PrimaryButton size="small" onClick={() => onClickout(result)}>
              Zum Produkt
            </PrimaryButton>
          </ExternalLink>
        </Box>
      </Flex>
    </Box>
  </Flex>
)

function Result({ item, location }) {
  const [result, setResult] = useState(undefined)
  const [imagesForGallery, setImagesForGallery] = useState([])

  useEffect(() => {
    if (!_get(location.state, 'search') && !item) {
      navigate('/')
    }
  }, [location, item])

  useEffect(() => {
    if (!!item) {
      fetch(
        `https://api.thebetterplay.com/product/${_get(
          item,
          'id'
        )}?image_sizes=tiny,large`
      )
        .then((response) => response.json())
        .then((result) => {
          setResult(result)

          const flattenImagesBySize = (images, size, target) =>
            images && _get(images, size).map((image) => ({ [target]: image }))
          const images = _toArray(
            _merge(
              flattenImagesBySize(result.imageUrls, 'tiny', 'thumbnail'),
              flattenImagesBySize(result.imageUrls, 'large', 'original')
            )
          )
          setImagesForGallery(images)
        })
    }
  }, [item])

  return !!result ? (
    <Card>
      {isMobile ? (
        <ResultMobile
          imagesForGallery={imagesForGallery}
          result={result}
          onClickout={trackClickout}
        />
      ) : (
        <ResultDesktop
          imagesForGallery={imagesForGallery}
          result={result}
          onClickout={trackClickout}
        />
      )}
    </Card>
  ) : (
    ResultSkeletonComponent
  )
}

export default Result
