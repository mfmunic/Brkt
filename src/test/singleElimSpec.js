import getBrktInfo from '../modules/actions/singleElim/getBrktInfo';
import getHeatsInfo from '../modules/actions/singleElim/getHeatsInfo';

describe('Single Elimination Bracket', () => {
  describe('Initial Bracket Info', () => {
    it('returns an object', () => {
      const testObj = typeof getBrktInfo(8) === 'object';
      expect(testObj).toBe(true);
    });

    it('reaches getHeatsInfo function', () => {
      const testObj = getBrktInfo(8);
      expect(Array.isArray(testObj.heats)).toBe(true);
    });

    describe('8 players', () => {
      it('8 players = 3 heats', () => {
        const testObj = getBrktInfo(8);
        expect(testObj.heatsTotal).toBe(3);
      });

      it('8 players = 8 main', () => {
        const testObj = getBrktInfo(8);
        expect(testObj.main).toBe(8);
      });

      it('8 players =  7 matches', () => {
        const testObj = getBrktInfo(8);
        expect(testObj.matchesTotal).toBe(7);
      });
    });

    describe('15 players', () => {
      it('15 players = 4 heats', () => {
        const testObj = getBrktInfo(15);
        expect(testObj.heatsTotal).toBe(4);
      });

      it('15 players = 8 main', () => {
        const testObj = getBrktInfo(15);
        expect(testObj.main).toBe(8);
      });

      it('15 players =  14 matches', () => {
        const testObj = getBrktInfo(15);
        expect(testObj.matchesTotal).toBe(14);
      });
    });
  });

  describe('Get Heat Info', () => {
    it('returns an object', () => {
      const testObj = typeof getBrktInfo(8).heats[0] === 'object';
      expect(testObj).toBe(true);
    });
    describe('8 players', () => {
      it(' = 3 heats', () => {
        const testObj = getBrktInfo(8);
        expect(testObj.heats.length).toBe(3);
      });

      describe('1st heat', () => {
        it('has 1 match', () => {
          const testObj = getBrktInfo(8);
          const heatObj = testObj.heats[0];
          expect(heatObj.noMatch).toBe(1);
        });

        it('is heat number 3', () => {
          const testObj = getBrktInfo(8);
          const heatObj = testObj.heats[0];
          expect(heatObj.heat).toBe(3);
        });

        it('is neither main heat nor extra heat', () => {
          const testObj = getBrktInfo(8);
          const heatObj = testObj.heats[0];
          expect(!heatObj.main && !heatObj.extra).toBe(true);
        });
      });

      describe('3rd heat', () => {
        it('has 4 matches', () => {
          const testObj = getBrktInfo(8);
          const heatObj = testObj.heats[2];
          expect(heatObj.noMatch).toBe(4);
        });

        it('is heat number 1', () => {
          const testObj = getBrktInfo(8);
          const heatObj = testObj.heats[2];
          expect(heatObj.heat).toBe(1);
        });

        it('is main heat and not extra heat', () => {
          const testObj = getBrktInfo(8);
          const heatObj = testObj.heats[2];
          expect(heatObj.main && !heatObj.extra).toBe(true);
        });
      });
    });
    describe('15 players', () => {
      it(' = 4 heats', () => {
        const testObj = getBrktInfo(15);
        expect(testObj.heats.length).toBe(4);
      });

      describe('1st heat', () => {
        it('has 1 match', () => {
          const testObj = getBrktInfo(15);
          const heatObj = testObj.heats[0];
          expect(heatObj.noMatch).toBe(1);
        });

        it('is heat number 4', () => {
          const testObj = getBrktInfo(15);
          const heatObj = testObj.heats[0];
          expect(heatObj.heat).toBe(4);
        });

        it('is neither main heat nor extra heat', () => {
          const testObj = getBrktInfo(15);
          const heatObj = testObj.heats[0];
          expect(!heatObj.main && !heatObj.extra).toBe(true);
        });
      });

      describe('3rd heat', () => {
        it('has 4 matches', () => {
          const testObj = getBrktInfo(15);
          const heatObj = testObj.heats[2];
          expect(heatObj.noMatch).toBe(4);
        });

        it('is heat number 2', () => {
          const testObj = getBrktInfo(15);
          const heatObj = testObj.heats[2];
          expect(heatObj.heat).toBe(2);
        });

        it('is main heat and not extra heat', () => {
          const testObj = getBrktInfo(15);
          const heatObj = testObj.heats[2];
          expect(heatObj.main && !heatObj.extra).toBe(true);
        });
      });

      describe('4th heat', () => {
        it('has 7 matches', () => {
          const testObj = getBrktInfo(15);
          const heatObj = testObj.heats[3];
          expect(heatObj.noMatch).toBe(7);
        });

        it('is heat number 1', () => {
          const testObj = getBrktInfo(15);
          const heatObj = testObj.heats[3];
          expect(heatObj.heat).toBe(1);
        });

        it('is extra heat and not main heat', () => {
          const testObj = getBrktInfo(15);
          const heatObj = testObj.heats[3];
          expect(heatObj.extra && !heatObj.main).toBe(true);
        });
      });
    });
  });
});
