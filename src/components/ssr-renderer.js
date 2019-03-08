import React from 'react'
import styled from 'styled-components'

// why all of this, you may ask this code supports mobile and desktop rendering
// different components thru condition like isMobile? but gatsby build would
// only render one and as isMobile would be false, it would render only the
// desktop version so instead, let's render the two components and add in some
// css media queries to display/hide

export const SSRRendererComponent = ({className, mobileComponent, desktopComponent}) => (
    <div className={className}>
        <div className="MobileRenderer">
            {mobileComponent}
        </div>
        <div className="DesktopRenderer">
            {desktopComponent}
        </div>
    </div>
)

const SSRRenderer = styled(SSRRendererComponent)`
    width: 100%;
    
    .MobileRenderer, .DesktopRenderer {
        display: block;
    }

    @media only screen and (max-device-width: 480px) {
        .DesktopRenderer {
            display: none;
        }   
    }
    @media only screen and (min-device-width: 481px) {
        .MobileRenderer {
            display: none;
        }   
    }
`

export default SSRRenderer