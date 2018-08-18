const createInitObj = require('../createInitObj');

describe('createInitObj.js', () => {
  describe('sending 16', () => {
    test('expect total to equal 16', () => {
      expect(createInitObj(16).total).toEqual(16);
    });

    test('expect matchesTotal to equal 15', () => {
      expect(createInitObj(16).matchesTotal).toEqual(15);
    });

    test('expect main to equal 16', () => {
      expect(createInitObj(16).main).toEqual(16);
    });

    test('expect extra to equal 0', () => {
      expect(createInitObj(16).extra).toEqual(0);
    });

    test('expect heatsTotal to equal 4', () => {
      expect(createInitObj(16).heatsTotal).toEqual(4);
    });
  });

  describe('sending 15', () => {
    test('expect total to equal 15', () => {
      expect(createInitObj(15).total).toEqual(15);
    });

    test('expect matchesTotal to equal 14', () => {
      expect(createInitObj(15).matchesTotal).toEqual(14);
    });

    test('expect main to equal 8', () => {
      expect(createInitObj(15).main).toEqual(8);
    });

    test('expect extra to equal 7', () => {
      expect(createInitObj(15).extra).toEqual(7);
    });

    test('expect heatsTotal to equal 4', () => {
      expect(createInitObj(15).heatsTotal).toEqual(4);
    });
  });
});
