import React from 'react'
import Select from 'react-select'
import {navigate} from 'gatsby'
import {Flex, Box} from '@rebass/grid'

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
        return (
            <Flex>
                <Box>
                    {this.props.item.name}
                </Box>

                {/* {this.props.searchParams.term} */}
                {/* {this.props.searchParams.category}
                {this.props.searchParams.id} */}
            </Flex>
        )
    }
}

export default Result