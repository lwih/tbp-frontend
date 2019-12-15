import { setFontZise, setButtonHeight } from './design-system-helpers'

describe('setFontZise', () => {
  it('should return 16 for default', () =>
    expect(setFontZise('fdsfdsfs')).toEqual(16))
  it('should return 12 for tiny', () => expect(setFontZise('tiny')).toEqual(12))
  it('should return 14 for small', () =>
    expect(setFontZise('small')).toEqual(14))
  it('should return 16 for medium', () =>
    expect(setFontZise('medium')).toEqual(16))
  it('should return 18 for big', () => expect(setFontZise('big')).toEqual(18))
  it('should return 22 for huge', () => expect(setFontZise('huge')).toEqual(22))
})

describe('setButtonHeight', () => {
  it('should return 50 for default', () =>
    expect(setButtonHeight('fdsfdsfs')).toEqual(50))
  it('should return 30 for tiny', () =>
    expect(setButtonHeight('tiny')).toEqual(30))
  it('should return 40 for small', () =>
    expect(setButtonHeight('small')).toEqual(40))
  it('should return 50 for medium', () =>
    expect(setButtonHeight('medium')).toEqual(50))
  it('should return 70 for big', () =>
    expect(setButtonHeight('big')).toEqual(70))
  it('should return 90 for huge', () =>
    expect(setButtonHeight('huge')).toEqual(90))
})
