import cio from '../modules/actions/singleElim/createInitObj';

describe('createStartingArray', () => {
  it('sending 8', () => {
    const testObj = cio(8);
    expect(testObj).toEqual({
      main: 8,
      extra: 0,
      heatsTotal: 3,
      matchesTotal: 7
    });
  });
  it('sending 15', () => {
    const testObj = cio(15);
    expect(testObj).toEqual({
      main: 8,
      extra: 7,
      heatsTotal: 4,
      matchesTotal: 14
    });
  });
});
