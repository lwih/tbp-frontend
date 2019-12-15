const resultMock = (price = '20,00', description = ['description1', 'description2']) => ({
    id: '1',
    name: 'toy name',
    price: !!price ? {
        displayPrice: price
    } : {},
    imageUrls: {
        tiny: [],
        large: []
    },
    deeplinkUrl: 'http://deep.link',
    description
})

export default resultMock