import React from 'react'
import Card from '../design-system/Cards/card';
import {Flex, Box} from '@rebass/grid';

const USP = (props) => (
    <Card>
        <Flex flexDirection="column">
            <Box>
                <Flex>
                    <Box width={70}>
                        <b>Qualitat</b>
                    </Box>
                    <Box pr={2}>Gute Spielsachen für Kinder</Box>
                </Flex>
            </Box>
            <Box>
                <Flex>
                    <Box width={70}>
                        <b>Neutral</b>
                    </Box>
                    <Box pr={2}>
                        Kein Gender Marketing, Spass für alle
                    </Box>
                </Flex>
            </Box>
            <Box>
                <Flex>
                    <Box width={70}>
                        <b>Easy</b>
                    </Box>
                    <Box pr={2}>Tolle Geschenke schnell gefunden</Box>
                </Flex>
            </Box>
        </Flex>
    </Card>
)

export default USP