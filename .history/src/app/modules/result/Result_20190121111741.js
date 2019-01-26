import React from 'react'
import Select from 'react-select'
import {navigate} from 'gatsby'
import {Flex, Box} from '@rebass/grid'
import PrimaryButton from '../../../design-system/Buttons/PrimaryButton'

function escapeHTML(data) {
    return {__html: data}
}

class Result extends React.Component {

    state = {
        result: undefined
    }

    componentDidMount() {
        fetch(`https://api.thebetterplay.com/product/${this.props.item.id}?image_sizes=tiny,large`)
            .then(response => response.json())
            .then(result => {
                debugger
                this.setState({result})
            })
    }

    render() {
        return !!this.state.result && (
            <Flex flexDirection="column">
                <Box>
                    {this.state.result.name}
                </Box>
                <Box>
                    <Price
                        price={this.state.result.price
                        ? this.state.result.price.displayPrice
                        : ''}/>
                </Box>
                <Box>
                    {(!!this.state.result.description) && this.state.result.description.map((d, i) => (
                        <Flex
                            key={`description-${i}`}
                            margin="5px"
                            dangerouslySetInnerHTML={escapeHTML('-&nbsp;' + d)}></Flex>
                    ))
}
                </Box>

                {/* {this.state.result.term} */}
                {/* {this.state.result.category}
                {this.state.result.id} */}

                <a href={this.state.result.deeplinkUrl} target="_blank">
                    <PrimaryButton>Zum product</PrimaryButton>
                </a>
            </Flex>
        )
    }
}

export default Result