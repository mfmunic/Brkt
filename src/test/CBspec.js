const gbi = require('../modules/actions/singleElim/getBrktInfo');

describe('createStartingArray', () => {
  it('sending 8', () => {
    const testObj = gbi(8);
    expect(testObj.box).toEqual({
      width: 640,
      height: 302.5,
      rndWid: 200,
      rndHgt: 55,
      svgWid: 20
    });
  });
  it('sending 6', () => {
    const testObj = gbi(6);
    expect(testObj.box).toEqual({
      width: 640,
      height: 192.5,
      rndWid: 200,
      rndHgt: 55,
      svgWid: 20
    });
  });

  it('sending 15', () => {
    const testObj = gbi(15);
    expect(testObj.box).toEqual({
      width: 860,
      height: 440,
      rndWid: 200,
      rndHgt: 55,
      svgWid: 20
    });
  });
});
