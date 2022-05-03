const capitalize = require('./capitalize');

test('THE is uppercase', () => {
  expect(capitalize('fall')).toBe('Fall');
});
