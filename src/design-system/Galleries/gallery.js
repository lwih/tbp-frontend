import React, { Component } from 'react'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'
import _isEmpty from 'lodash/isEmpty'
import 'react-image-gallery/styles/css/image-gallery.css'
import './gallery.css'
import Skeleton from '../Skeletons/skeleton'

const SkeletonComponent = <Skeleton width="100%" height="250px" />

const Gallery = ({ images, className }) =>
  _isEmpty(images) ? (
    SkeletonComponent
  ) : (
    <ImageGallery
      className={className}
      items={images}
      disableArrowKeys={true}
      disableThumbnailScroll={false}
      showPlayButton={false}
      showFullscreenButton={false}
      showNav={false}
      slideInterval={2000}
      lazyLoad={false}
      slideOnThumbnailHover={true}
      showFullscreenButton={true}
    />
  )

export default Gallery
