import React from 'react'
import {Flex, Box} from '@rebass/grid';
import Chip from '../Chips/chip';

const WordCloud = ({clouds, onClickCloud}) => (
    <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
        {clouds.map(cloud => (
            <Box py={1} px={1}>
                <Chip onClick={e => onClickCloud(cloud)}>{cloud.name}</Chip>
            </Box>
        ))}
    </Flex>
)

export default WordCloud