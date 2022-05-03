const stringLength = require('./stringLength');
const reverseString = require('./reverseString');

test('string length', () => {
  expect(stringLength('bear')).toBe(4);
});

test('string too long', () => {
  expect(stringLength('carliforniaaa')).toBe('Invalid Length');
});

test('string is reversed', () => {
  expect(reverseString('book')).toBe('koob');
});
