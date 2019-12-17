import { setValueInState } from './search'

describe('setValueInState', () => {
  it('should return the value as an object when it is given as a string', () =>
    expect(setValueInState('string')).toEqual({ id: '', name: 'string' }))
  it('should return the value as an object when it is given as an opbject', () =>
    expect(setValueInState({ id: '', name: 'string' })).toEqual({
      id: '',
      name: 'string',
    }))
  it('should return an empty string when value is falsy', () =>
    expect(setValueInState(undefined)).toEqual(''))
})
