import React from 'react'
import styled from 'styled-components'
import {fontWeights} from '../theme'

const PriceComponent = ({price, className}) => {
    return (
        <b className={className}>
            {price}
        </b>
    )
}

const Price = styled(PriceComponent)`
    font-size: 18px;
    font-weight: ${fontWeights.heavy};
`

export default Price;
