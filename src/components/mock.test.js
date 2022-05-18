
jest.mock('./home');
const testHome = require('./Home');

describe('Mock Home API Call', () => {
  it('Retrive store data', () => {
    expect(testHome.retrieveApiData()).toBe('The API data is displayed');
  });
  it('Filter the data', () => {
    expect(testHome.filteredData()).toBe('The data is filtered');
  });
});