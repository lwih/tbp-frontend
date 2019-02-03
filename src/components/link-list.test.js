import {sortPagesByWeight} from './link-list'

describe('test sortPagesByWeight', () => {

  const data = [
    {
      "node": {
        "frontmatter": {
          "title": "Spielzeug für einjähriges Kind",
          "path": "/de/spielzeug/einjaehriges-kind",
          "language": "de",
          "weight": 1
        }
      }
    }, {
      "node": {
        "frontmatter": {
          "title": "Spielzeug für dreijähriges Kind",
          "path": "/de/spielzeug/dreijaehriges-kind",
          "language": "de",
          "weight": 3
        }
      }
    }, {
      "node": {
        "frontmatter": {
          "title": "Spielzeug für zweijähriges Kind",
          "path": "/de/spielzeug/zweijaehriges-kind",
          "language": "de",
          "weight": 2
        }
      }
    }
  ]
  it('should return undefined when no data given', () => {
    expect(sortPagesByWeight(undefined)).toEqual(undefined)
  })
  it('should sort by weight asc when no order given', () => {
    expect(sortPagesByWeight(data)).toEqual(undefined)
  })
  it('should sort by weight asc when asc given', () => {
    expect(sortPagesByWeight(data, 'asc')).toEqual(undefined)
  })
  it('should sort by weight desc when desc given', () => {
    expect(sortPagesByWeight(data, 'desc')).toEqual(undefined)
  })
})