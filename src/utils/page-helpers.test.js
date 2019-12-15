import { sortPagesByWeight, seoPages, companyPages } from './page-helpers'

const page1 = {
  node: {
    frontmatter: {
      title: 'Spielzeug für einjähriges Kind',
      path: '/de/spielzeug/einjaehriges-kind',
      language: 'de',
      weight: 1,
      pageType: 'seo',
    },
  },
}

const page2 = {
  node: {
    frontmatter: {
      title: 'Spielzeug für dreijähriges Kind',
      path: '/de/spielzeug/dreijaehriges-kind',
      language: 'de',
      weight: 3,
      pageType: 'company',
    },
  },
}

const page3 = {
  node: {
    frontmatter: {
      title: 'Spielzeug für zweijähriges Kind',
      path: '/de/spielzeug/zweijaehriges-kind',
      language: 'de',
      weight: 2,
      pageType: 'seo',
    },
  },
}
const data = [page1, page2, page3]

describe('test sortPagesByWeight', () => {
  it('should return [] when no data given', () => {
    expect(sortPagesByWeight(undefined)).toEqual([])
  })
  it('should sort by weight asc when no order given', () => {
    expect(sortPagesByWeight(data)).toEqual([page1, page3, page2])
  })
  it('should sort by weight asc when asc given', () => {
    expect(sortPagesByWeight(data, 'asc')).toEqual([page1, page3, page2])
  })
  it('should sort by weight desc when desc given', () => {
    expect(sortPagesByWeight(data, 'desc')).toEqual([page2, page3, page1])
  })
})

describe('test seoPages', () => {
  it('should return undefined when undefined given', () => {
    expect(seoPages(undefined)).toEqual(undefined)
  })
  it('should return [] when [] given', () => {
    expect(seoPages([])).toEqual([])
  })
  it('should return two elements', () => {
    expect(seoPages(data)).toEqual([page1, page3])
  })
})

describe('test companyPages', () => {
  it('should return undefined when undefined given', () => {
    expect(companyPages(undefined)).toEqual(undefined)
  })
  it('should return [] when [] given', () => {
    expect(companyPages([])).toEqual([])
  })
  it('should return one element', () => {
    expect(companyPages(data)).toEqual([page2])
  })
})
