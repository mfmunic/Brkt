const cma = require('../modules/actions/singleElim/createMainArray');

describe('createStartingArray', () => {
  it('sending 8', () => {
    const testObj = cma(8);
    expect(testObj).toEqual([
      { player1seed: 1, player2seed: 8, division: 'upper' },
      { player1seed: 2, player2seed: 7, division: 'lower' },
      { player1seed: 3, player2seed: 6, division: 'lower' },
      { player1seed: 4, player2seed: 5, division: 'upper' }
    ]);
  });

  it('sending 16', () => {
    const testObj = cma(16);
    expect(testObj).toEqual([
      { player1seed: 1, player2seed: 16, division: 'upper' },
      { player1seed: 2, player2seed: 15, division: 'lower' },
      { player1seed: 3, player2seed: 14, division: 'lower' },
      { player1seed: 4, player2seed: 13, division: 'upper' },
      { player1seed: 5, player2seed: 12, division: 'upper' },
      { player1seed: 6, player2seed: 11, division: 'lower' },
      { player1seed: 7, player2seed: 10, division: 'lower' },
      { player1seed: 8, player2seed: 9, division: 'upper' }
    ]);
  });
});
