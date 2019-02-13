import React from 'react'
import {Flex, Box} from '@rebass/grid';
import Chip from '../Chips/chip';

const clouds = [
    {
        name: 'Holzspielzeug',
        id: '01'
    }, {
        name: 'Bauklötze',
        id: '02'
    }, {
        name: 'Bau und Konstruktionsspielzeug',
        id: '03'
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
        name: 'Spiele',
        id: '08'
    }, {
        name: 'Elektronisches Spielzeug',
        id: '09'
    }, {
        name: 'Basteln und Malen',
        id: '10'
    }, {
        name: 'Experimentieren und Forschen',
        id: '11'
    }, {
        name: 'Sport und Outdoor',
        id: '12'
    }, {
        name: 'Fahrzeuge',
        id: '13'
    }
]

const WordCloud = ({onClickCloud}) => (
    <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
        {clouds.map(cloud => (
            <Box py={1} px={1} key={cloud.id}>
                <Chip onClick={e => onClickCloud(cloud)}>{cloud.name}</Chip>
            </Box>
        ))}
    </Flex>
)

export default WordCloud