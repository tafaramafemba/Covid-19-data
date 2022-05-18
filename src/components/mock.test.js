
jest.mock('./Home');
const testHome = require('./Home');

describe('Mock Home API Call', () => {
  it('Retrive store data', () => {
    expect(testHome.getData()).toBe('The API data is displayed');
  });
});