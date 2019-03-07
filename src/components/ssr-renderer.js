import React from 'react'
import styled from 'styled-components'

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