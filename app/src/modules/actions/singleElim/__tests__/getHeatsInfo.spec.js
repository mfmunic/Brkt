const getHeatsInfo = require('../getHeatsInfo');

const init16 = { main: 16, extra: 0, heatsTotal: 4, matchesTotal: 15 };
const init15 = { main: 8, extra: 7, heatsTotal: 4, matchesTotal: 14 };

describe('getHeatsInfo.js', () => {
  describe('sending init16', () => {
    test('expect array at 3 heat to equal 1', () => {
      const testObj = getHeatsInfo(init16);
      expect(testObj[3].heat).toEqual(1);
    });

    test('expect array at 2 match number to equal 4', () => {
      const testObj = getHeatsInfo(init16);
      expect(testObj[2].noMatch).toEqual(4);
    });

    test('expect array at 1 main to equal false', () => {
      const testObj = getHeatsInfo(init16);
      expect(testObj[1].main).toEqual(false);
    });

    test('expect array at 0 extra to equal false', () => {
      const testObj = getHeatsInfo(init16);
      expect(testObj[0].extra).toEqual(false);
    });

    test('expect array at 3 matches length is 8', () => {
      const testObj = getHeatsInfo(init16);
      expect(testObj[3].matches.length).toEqual(8);
    });

    test('expect array at 2 matches at 3 equals 12', () => {
      const testObj = getHeatsInfo(init16);
      console.log(testObj[2]);
      expect(testObj[2].matches[3]).toEqual(12);
    });
  });
});
