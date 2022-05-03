const Calculator = require('./calculator');

describe('Add Tests', () => {
  test('2+2 =4', () => {
    expect(Calculator.add(2, 2)).toBe(4);
  });

  test('5+5=10', () => {
    expect(Calculator.add(5, 5)).toBe(10);
  });

  test('5+5=0', () => {
    expect(Calculator.add(5, 5)).not.toBe(0);
  });
});
