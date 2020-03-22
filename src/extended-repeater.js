module.exports = function repeater(str, options) {
  let result = "";
  if (options) {
    if (options.repeatTimes && !isNaN(options.repeatTimes)) {
      for (let i = 0; i < options.repeatTimes; i++) {
        result += str;
      }
    }
    if (options.separator) {
      str = str + options.separator;
    } else {
      str = str + "+";
    }
  }

  return result;
};
