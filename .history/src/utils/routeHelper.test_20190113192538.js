import {routeWithLanguage} from '../utils/routeHelper'
import {isTablet} from '../app/utils/appUtils';

describe('routeWithLanguage', () => {
    it('should redirect to /de/lol', () => expect(routeWithLanguage('de', '/lol')).toEqual('/de/lol'))
})