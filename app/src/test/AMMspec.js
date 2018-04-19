const gbi = require('../modules/actions/singleElim/getBrktInfo');

describe('createStartingArray', () => {
  it('sending 8', () => {
    const testObj = gbi(8);
    expect(testObj.matches).toEqual({
      match7: {
        heat: 3,
        winner: '',
        loser: '',
        match: 7,
        player1seed: '',
        player2seed: '',
        division: 'final'
      },
      match6: {
        heat: 2,
        winner: '',
        loser: '',
        match: 6,
        player1seed: '',
        division: 'lower',
        player2seed: ''
      },
      match5: {
        heat: 2,
        winner: '',
        loser: '',
        match: 5,
        player1seed: '',
        division: 'upper',
        player2seed: ''
      },
      match4: {
        heat: 1,
        winner: '',
        loser: '',
        match: 4,
        player1seed: 3,
        division: 'lower',
        player2seed: 6
      },
      match3: {
        heat: 1,
        winner: '',
        loser: '',
        match: 3,
        player1seed: 2,
        division: 'lower',
        player2seed: 7
      },
      match2: {
        heat: 1,
        winner: '',
        loser: '',
        match: 2,
        player1seed: 4,
        division: 'upper',
        player2seed: 5
      },
      match1: {
        heat: 1,
        winner: '',
        loser: '',
        match: 1,
        player1seed: 1,
        division: 'upper',
        player2seed: 8
      }
    });
  });
  it('sending 6', () => {
    const testObj = gbi(6);
    expect(testObj.matches).toEqual({
      match5: {
        heat: 3,
        winner: '',
        loser: '',
        match: 5,
        player1seed: '',
        player2seed: '',
        division: 'final'
      },
      match3: {
        heat: 2,
        winner: '',
        loser: '',
        match: 3,
        player1seed: 1,
        division: 'upper',
        player2seed: ''
      },
      match4: {
        heat: 2,
        winner: '',
        loser: '',
        match: 4,
        player1seed: 2,
        division: 'lower',
        player2seed: ''
      },
      match1: {
        heat: 1,
        winner: '',
        loser: '',
        match: 1,
        player1seed: 4,
        player2seed: 5,
        division: 'upper'
      },
      match2: {
        heat: 1,
        winner: '',
        loser: '',
        match: 2,
        player1seed: 3,
        player2seed: 6,
        division: 'lower'
      }
    });
  });

  it('sending 15', () => {
    const testObj = gbi(15);
    expect(testObj.matches).toEqual({
      match14: {
        heat: 4,
        winner: '',
        loser: '',
        match: 14,
        player1seed: '',
        player2seed: '',
        division: 'final'
      },
      match12: {
        heat: 3,
        winner: '',
        loser: '',
        match: 12,
        player1seed: '',
        division: 'upper',
        player2seed: ''
      },
      match13: {
        heat: 3,
        winner: '',
        loser: '',
        match: 13,
        player1seed: '',
        division: 'lower',
        player2seed: ''
      },
      match8: {
        heat: 2,
        winner: '',
        loser: '',
        match: 8,
        player1seed: 1,
        division: 'upper',
        player2seed: ''
      },
      match9: {
        heat: 2,
        winner: '',
        loser: '',
        match: 9,
        player1seed: '',
        division: 'upper',
        player2seed: ''
      },
      match10: {
        heat: 2,
        winner: '',
        loser: '',
        match: 10,
        player1seed: '',
        division: 'lower',
        player2seed: ''
      },
      match11: {
        heat: 2,
        winner: '',
        loser: '',
        match: 11,
        player1seed: '',
        division: 'lower',
        player2seed: ''
      },
      match1: {
        heat: 1,
        winner: '',
        loser: '',
        match: 1,
        player1seed: 8,
        player2seed: 9,
        division: 'upper'
      },
      match2: {
        heat: 1,
        winner: '',
        loser: '',
        match: 2,
        player1seed: 4,
        player2seed: 13,
        division: 'upper'
      },
      match3: {
        heat: 1,
        winner: '',
        loser: '',
        match: 3,
        player1seed: 5,
        player2seed: 12,
        division: 'upper'
      },
      match4: {
        heat: 1,
        winner: '',
        loser: '',
        match: 4,
        player1seed: 2,
        player2seed: 15,
        division: 'lower'
      },
      match5: {
        heat: 1,
        winner: '',
        loser: '',
        match: 5,
        player1seed: 7,
        player2seed: 10,
        division: 'lower'
      },
      match6: {
        heat: 1,
        winner: '',
        loser: '',
        match: 6,
        player1seed: 3,
        player2seed: 14,
        division: 'lower'
      },
      match7: {
        heat: 1,
        winner: '',
        loser: '',
        match: 7,
        player1seed: 6,
        player2seed: 11,
        division: 'lower'
      }
    });
  });
});
