import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import { Flex, Box } from '@rebass/grid'
import InternalLink from '../design-system/Links/internal-link'
import { colors } from '../design-system/theme'
import WidthContainer from './width-container'
import SmallTitle from '../design-system/Typography/small-title'
import SSRRenderer from './ssr-renderer'

const HeaderComponentMobile = ({ title, className, children }) => (
  <Box className={className} justifyContent="center">
    <Flex width={1} className="Header-Background" justifyContent="center">
      <Box className="Header" width={1} p={2}>
        <Flex flexDirection="column" justifyContent="center">
          <Box
            alignSelf="center"
            className="Header-Logo-Container"
            style={{
              minHeight: '45px',
            }}
          >
            <InternalLink to="/">
              <img className="Header-Logo" src="/images/logo.svg" alt={title} />
            </InternalLink>
          </Box>
          <Box alignSelf="center" className="Header-title">
            <SmallTitle>{title}</SmallTitle>
          </Box>
        </Flex>
        <Flex width={1} mt={3}>
          {typeof window !== 'undefined' && (
            <React.Fragment>{children}</React.Fragment>
          )}
        </Flex>
      </Box>
    </Flex>
  </Box>
)

const HeaderComponentDesktop = ({ title, className, children }) => (
  <Box className={className}>
    <Flex width={1} className="D-Header-Background" flexDirection="column">
      <WidthContainer>
        <Flex width={1} flexDirection="column">
          <Box className="D-Header" width={1} mt={3}>
            <Flex justifyContent="flex-start">
              <Box
                className="D-Header-Logo-Container"
                style={{
                  minHeight: '45px',
                }}
              >
                <InternalLink to="/">
                  <img
                    className="D-Header-Logo"
                    src="/images/logo.svg"
                    alt={title}
                  />
                </InternalLink>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex flexDirection="column" justifyContent="center" mb={3} px={2}>
              <Box className="D-Header-title" alignSelf="center" p={3}>
                {title}
              </Box>
              {!!children && (
                <Box className="D-Header" width={1} mt={3} mx="auto">
                  {(typeof window !== 'undefined') === true && (
                    <Flex width={1}>{children}</Flex>
                  )}
                </Box>
              )}
            </Flex>
          </Box>
        </Flex>
      </WidthContainer>
    </Flex>
  </Box>
)

const HeaderMobile = styled(HeaderComponentMobile)`
  min-height: 132px;
  background-image: linear-gradient(to top, #ff4572, #2a079b);
  position: relative;

  .Header-Background::after {
    background: url('/images/pattern-confetti.png');
    background-repeat: repeat;
    content: '';
    opacity: 0.4;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 0;
  }

  .Header {
    z-index: 1;
    position: relative;
  }

  .Header-Logo-Container {
    width: 200px;
  }

  .Header-Logo {
    margin-bottom: 0;
  }

  .Header-title {
    color: ${colors.white};
    font-size: 14px;
  }
`

const HeaderDesktop = styled(HeaderComponentDesktop)`
  background-image: linear-gradient(to top, #ff4572, #2a079b);
  position: relative;

  .D-Header-Background::after {
    background: url('/images/pattern-confetti.png');
    background-repeat: repeat;
    content: '';
    opacity: 0.4;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 0;
  }

  .D-Header {
    z-index: 1;
    position: relative;
  }

  .D-Header-Logo-Container {
    width: 200px;
  }

  .D-Header-Logo {
    margin-bottom: 0;
  }

  .D-Header-title {
    color: ${colors.white};
    font-size: 36px;
    font-weight: bold;
  }
`

const Header = (props) => (
  <SSRRenderer
    mobileComponent={<HeaderMobile {...props} />}
    desktopComponent={<HeaderDesktop {...props} />}
  />
)

Header.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
}

Header.defaultProps = {
  title: 'Inspiration für gutes Spielzeug',
}

export default Header
