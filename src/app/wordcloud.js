import React from 'react'
import {Flex, Box} from '@rebass/grid';
import Chip from '../design-system/Chips/chip';
import {navigate, StaticQuery, graphql} from 'gatsby';
import {defaultSearchParams} from './search';
import {colors, radii} from '../design-system/theme';
import SSRRenderer from '../components/ssr-renderer';
import Img from "gatsby-image"
import _get from 'lodash/get'

const clouds = [
    {
        name: 'Holzspielzeug',
        id: 'Holzspielzeug',
        searchParamToUse: 'q',
        img: 'holzspielzeug.jpg'
    }, {
        name: 'Bau und Konstruktionsspielzeug',
        id: 'BauUndKonstruktionsSpielzeug',
        searchParamToUse: 'c',
        img: 'bau-und-konstruktionsspielzeug.jpg'
    }, {
        name: 'Spiele',
        id: 'Spiele',
        searchParamToUse: 'c',
        img: 'spiele.jpg'
    }, {
        name: 'Musikinstrumente',
        id: 'Musikinstrumente',
        searchParamToUse: 'c',
        img: 'musikinstrumente.jpg'
    }, {
        name: 'Plüschtiere',
        id: 'Plueschtiere',
        searchParamToUse: 'c',
        img: 'plueschtiere.jpg'
    }, {
        name: 'Puppen',
        id: 'Puppen',
        searchParamToUse: 'c',
        img: 'puppen.jpg'
    }, {
        name: 'Puzzles',
        id: 'Puzzles',
        searchParamToUse: 'c',
        img: 'puzzles.jpg'
    }, {
        name: 'Elektronisches Spielzeug',
        id: 'ElektronischesSpielzeug',
        searchParamToUse: 'c',
        img: 'elektronisches-spielzeug.jpg'
    }, {
        name: 'Basteln und Malen',
        id: 'BastelnUndMalen',
        searchParamToUse: 'c',
        img: 'basteln-und-malen.jpg'
    }, {
        name: 'Sport und Outdoor',
        id: 'SportUndOutdoor',
        searchParamToUse: 'c',
        img: 'sport-und-outdoor.jpg'
    }, {
        name: 'Fahrzeuge',
        id: 'Fahrzeuge',
        searchParamToUse: 'q',
        img: 'fahrzeuge.jpg'
    }, {
        name: 'Experimentieren und Forschen',
        id: 'ExperimentierenUndForschen',
        searchParamToUse: 'c',
        img: 'experimentieren-und-forschen.jpg'
    }
]

const HorizontalListVersion = ({data, onClickCloud}) => {
    return (
        <Box>
            <Flex>
                <Box
                    ml={2}
                    style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: colors.teal
                }}>IDEEN FÜR GUTE SPIELSACHEN</Box>
            </Flex>
            <Flex
                flexDirection="row"
                justifyContent="center"
                px={2}
                style={{
                maxWidth: '100%',
                overflowX: 'auto',
                display: '-webkit-box'
            }}>
                {clouds.map(cloud => (
                    <Box
                        onClick={e => onClickCloud(cloud)}
                        py={1}
                        px={0}
                        key={cloud.id}
                        bg="white"
                        mr={1}
                        width="150px"
                        style={{
                        maxWidth: '150px',
                        minWidth: '150px',
                        border: `1px solid ${colors.sortOfPinkLight}`,
                        borderRadius: radii['2'],
                        cursor: 'pointer'
                    }}>
                        <Flex flexDirection="column">
                            <Box
                                px={1}
                                alignSelf="center"
                                style={{
                                height: '100px',
                                width: '150px'
                            }}>
                                <Img fluid={_get(data, `${cloud.id}.childImageSharp.fluid`)}/>
                            </Box>
                            <Box
                                px={1}
                                style={{
                                fontSize: '12px',
                                fontWeight: 'bold',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden'
                            }}>
                                {cloud.name}
                            </Box>
                        </Flex>
                    </Box>
                ))}
            </Flex>
        </Box>
    )
}

const ChipsVersion = ({onClickCloud}) => (
    <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
        {clouds.map(cloud => (
            <Box py={1} px={1} key={cloud.id}>
                <Chip onClick={e => onClickCloud(cloud)}>{cloud.name}</Chip>
            </Box>
        ))}
    </Flex>
)

class WordCloud extends React.Component {
    onClickCloud = (category) => {
        const newSearchFilter = category.searchParamToUse === 'c'
            ? {
                category: category,
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
            <StaticQuery
                query={wordcloudImagesQuery}
                render={data => {
                return (
                    <SSRRenderer
                        mobileComponent={(
                    < HorizontalListVersion onClickCloud = {
                        this.onClickCloud
                    }
                    data = {
                        data
                    }
                    {
                        ...this.props
                    } />)}
                        desktopComponent={< ChipsVersion onClickCloud = {
                        this.onClickCloud
                    }
                    data = {
                        data
                    }
                    {
                        ...this.props
                    } />}/>
                )
            }}/>
        )
    }
}

export const wordcloudImage = graphql `
  fragment wordcloudImage on File {
    childImageSharp {
      fluid(maxWidth: 150, maxHeight: 100) {
        ...GatsbyImageSharpFluid
        presentationWidth
      }
    }
  }
`

const wordcloudImagesQuery = graphql `
  query {
    Holzspielzeug: file(relativePath: { eq: "wordcloud/holzspielzeug.jpg" }) {
      ...wordcloudImage
    }
    BauUndKonstruktionsSpielzeug: file(relativePath: { eq: "wordcloud/bau-und-konstruktionsspielzeug.jpg" }) {
      ...wordcloudImage
    }
    Spiele: file(relativePath: { eq: "wordcloud/spiele.jpg" }) {
      ...wordcloudImage
    }
    Musikinstrumente: file(relativePath: { eq: "wordcloud/musikinstrumente.jpg" }) {
      ...wordcloudImage
    }
    Plueschtiere: file(relativePath: { eq: "wordcloud/plueschtiere.jpg" }) {
      ...wordcloudImage
    }
    Puppen: file(relativePath: { eq: "wordcloud/puppen.jpg" }) {
      ...wordcloudImage
    }
    Puzzles: file(relativePath: { eq: "wordcloud/puzzles.jpg" }) {
      ...wordcloudImage
    }
    Puppen: file(relativePath: { eq: "wordcloud/puppen.jpg" }) {
      ...wordcloudImage
    }
    ElektronischesSpielzeug: file(relativePath: { eq: "wordcloud/elektronisches-spielzeug.jpg" }) {
      ...wordcloudImage
    }
    BastelnUndMalen: file(relativePath: { eq: "wordcloud/basteln-und-malen.jpg" }) {
      ...wordcloudImage
    }
    SportUndOutdoor: file(relativePath: { eq: "wordcloud/sport-und-outdoor.jpg" }) {
      ...wordcloudImage
    }
    Fahrzeuge: file(relativePath: { eq: "wordcloud/fahrzeuge.jpg" }) {
      ...wordcloudImage
    }
    ExperimentierenUndForschen: file(relativePath: { eq: "wordcloud/experimentieren-und-forschen.jpg" }) {
      ...wordcloudImage
    }
}
`

export default WordCloud