const cmo = require('../modules/actions/singleElim/createMatchObject');
const cio = require('../modules/actions/singleElim/createInitObj');

describe('createStartingArray', () => {
  it('sending 8', () => {
    const testObj = cmo(cio(8));
    expect(testObj).toEqual({
      match7: { heat: 3 },
      match6: { heat: 2 },
      match5: { heat: 2 },
      match4: { heat: 1 },
      match3: { heat: 1 },
      match2: { heat: 1 },
      match1: { heat: 1 }
    });
  });

  it('sending 15', () => {
    const testObj = cmo(cio(15));
    expect(testObj).toEqual({
      match14: { heat: 4 },
      match13: { heat: 3 },
      match12: { heat: 3 },
      match11: { heat: 2 },
      match10: { heat: 2 },
      match9: { heat: 2 },
      match8: { heat: 2 },
      match7: { heat: 1 },
      match6: { heat: 1 },
      match5: { heat: 1 },
      match4: { heat: 1 },
      match3: { heat: 1 },
      match2: { heat: 1 },
      match1: { heat: 1 }
    });
  });
});
