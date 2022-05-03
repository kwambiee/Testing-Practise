function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    return 'Invalid Length';
  }
  return string.length;
}
console.log(stringLength('belelalHGVYUVYTVCowa'));

module.exports = stringLength;
