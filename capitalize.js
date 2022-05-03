function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalize('hillary'));

module.exports = capitalize;
