import React from 'react'
import {Flex, Box} from '@rebass/grid';
import Chip from '../design-system/Chips/chip';
import {navigate} from 'gatsby';

const clouds = [
    {
        name: 'Bau und Konstruktionsspielzeug',
        id: '03'
    }, {
        name: 'Holz',
        id: '01'
    }, {
        name: 'Bauklötze',
        id: '02'
    }, {
        name: 'Spiele',
        id: '08'
    }, {
        name: 'Musikinstrumente',
        id: '04'
    }, {
        name: 'Plüschtiere',
        id: '05'
    }, {
        name: 'Puppen',
        id: '06'
    }, {
        name: 'Puzzles',
        id: '07'
    }, {
        name: 'Elektronisches Spielzeug',
        id: '09'
    }, {
        name: 'Basteln und Malen',
        id: '10'
    }, {
        name: 'Sport und Outdoor',
        id: '12'
    }, {
        name: 'Fahrzeuge',
        id: '13'
    }, {
        name: 'Experimentieren und Forschen',
        id: '11'
    }
]

class WordCloud extends React.Component {
    onClickCloud = (category) => {
        const newState = Object.assign({}, {
            state: {
                search: Object.assign({}, this.props.searchParams, {category}),
                selectedItem: undefined
            }
        })
        navigate('/app/results', newState)
    }

    render() {
        return (
            <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
                {clouds.map(cloud => (
                    <Box py={1} px={1} key={cloud.id}>
                        <Chip onClick={e => this.onClickCloud(cloud)}>{cloud.name}</Chip>
                    </Box>
                ))}
            </Flex>
        )
    }
}

export default WordCloud