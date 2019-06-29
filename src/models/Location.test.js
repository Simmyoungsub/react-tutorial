import { Location } from './Location';

describe('Location', () => {
    test('constructor_makeInstance_isDefined', () => {
        const p = {
            'id': 1835848,
            'name': 'Seoul',
            'country': 'KR',
            'lon': 126.977829,
            'lat': 37.56826
        };
        const location = new Location(p);
        expect(location).toBeDefined();
    });
});