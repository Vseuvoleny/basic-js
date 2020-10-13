module.exports = function repeater(str, options) {
  let result = String(str);
  if (options) {
    if (options.repeatTimes) {
      result = repeatTimes(str, options.repeatTimes);
    } else {
      return result + options.addition;
    }
    if (options.separator) {
      result = separator(
        repeatTimes(str, options.repeatTimes),
        options.separator
      );
    }
    if (
      options.addition ||
      typeof options.addition === "boolean" ||
      options.addition === null
    ) {
      result = addition(str, options);
    }
  }
  return result;
};

function repeatTimes(str, repeat, addition = "+") {
  if (str === null) {
    str = String(str);
  }
  const array = [];
  let result;
  for (let i = 0; i < repeat; i++) {
    array.push(str);
  }
  if (addition === "+") {
    result = array.join(addition);
  } else {
    result = array.join(addition) + addition;
  }
  return result;
}

function separator(str, separator, addition = "+") {
  if (str === null) {
    str = String(str);
  }
  return str.split(addition).join(separator);
}

function addition(
  str,
  {
    repeatTimes,
    separator,
    addition,
    additionSeparator,
    additionRepeatTimes = 1
  }
) {
  if (str === null) {
    str = String(str);
  }
  const array = [];
  let result = str;
  let newone = "";
  if (typeof addition === "boolean" || addition === null) {
    addition = String(addition);
  }
  for (let i = 0; i < repeatTimes; i++) {
    array.push(str);
  }
  for (let i = 1; i < additionRepeatTimes; i++) {
    if (additionSeparator) {
      const additionwithS = addition + additionSeparator;
      newone += additionwithS;
    } else {
      newone += addition;
    }
  }
  newone += addition;
  result = array.join(newone);
  result = result.split(newone).join(newone + separator);

  return result + newone;
}
