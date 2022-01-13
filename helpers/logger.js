var util = require('util');

const log = (source, obj) => {
  return console.log(source + ': ' + util.inspect(obj));
}

module.exports = { log };