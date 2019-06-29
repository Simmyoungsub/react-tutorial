import request from '../../data/data';

describe('Weekly', () => {
    test('requestData_toBeDefined', async () => {
        const result = request.getCurrentWeather();
        expect(result).toBeDefined();
    });
});