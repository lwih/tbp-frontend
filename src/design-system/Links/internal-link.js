import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../theme'

const InternalLinkComponent = (props) => <Link {...props} />

const InternalLink = styled(InternalLinkComponent)`
  color: ${(props) => (props.color ? props.color : colors.teal)};
  text-decoration: none;
`

export default InternalLink
