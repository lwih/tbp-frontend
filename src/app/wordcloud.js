import React from 'react'
import {Flex, Box} from '@rebass/grid';
import Chip from '../design-system/Chips/chip';
import {navigate} from 'gatsby';
import {defaultSearchParams} from './search';

const clouds = [
    {
        name: 'Bau und Konstruktionsspielzeug',
        id: '03',
        searchParamToUse: 'c'
    }, {
        name: 'Holzspielzeug',
        id: '01',
        searchParamToUse: 'q'
    }, {
        name: 'Spiele',
        id: '08',
        searchParamToUse: 'c'
    }, {
        name: 'Musikinstrumente',
        id: '04',
        searchParamToUse: 'c'
    }, {
        name: 'Plüschtiere',
        id: '05',
        searchParamToUse: 'c'
    }, {
        name: 'Puppen',
        id: '06',
        searchParamToUse: 'c'
    }, {
        name: 'Puzzles',
        id: '07',
        searchParamToUse: 'c'
    }, {
        name: 'Elektronisches Spielzeug',
        id: '09',
        searchParamToUse: 'c'
    }, {
        name: 'Basteln und Malen',
        id: '10',
        searchParamToUse: 'c'
    }, {
        name: 'Sport und Outdoor',
        id: '12',
        searchParamToUse: 'c'
    }, {
        name: 'Fahrzeuge',
        id: '13',
        searchParamToUse: 'q'
    }, {
        name: 'Experimentieren und Forschen',
        id: '11',
        searchParamToUse: 'c'
    }
]

class WordCloud extends React.Component {
    onClickCloud = (category) => {
        const newSearchFilter = category.searchParamToUse === 'c'
            ? {
                category,
                q: ''
            }
            : {
                q: category.name,
                category: undefined
            }

        const newState = Object.assign({}, {
            state: {
                search: Object.assign({}, this.props.searchParams || defaultSearchParams, newSearchFilter),
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