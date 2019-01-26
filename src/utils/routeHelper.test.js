import {routeWithLanguage} from '../utils/routeHelper'

describe('routeWithLanguage', () => {
    it('should redirect to /de/lol', () => expect(routeWithLanguage('de', '/lol')).toEqual('/de/lol'))
})