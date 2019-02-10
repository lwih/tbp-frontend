import React from 'react'
import styled from 'styled-components'
import {fontWeights, sizes} from '../theme'
import {setFontZise} from '../design-system-helpers'

const PriceComponent = ({
    price,
    className,
    ...rest
}) => {
    return (
        <b className={className} {...rest}>
            {price}
        </b>
    )
}

const Price = styled(PriceComponent)`
    font-size: ${props => setFontZise(props.size)}px;
    font-weight: ${fontWeights.heavy};
`

Price.defaultProps = {
    size: sizes.medium
}

export default Price;
