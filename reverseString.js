function reverseString(string) {
  return string.split('').reverse().join('');
}
console.log(reverseString('mother'));

module.exports = reverseString;
