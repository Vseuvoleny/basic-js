module.exports = function transform(arr) {
  // throw 'Not implemented';
  const valuesToRemove = [];
  arr.forEach((item, index, arr) => {
    if (item === "--discard-next") {
      if (index === arr.length - 1) {
        valuesToRemove[index] = true;
      } else {
        valuesToRemove[index] = true;
        valuesToRemove[index + 1] = true;
      }
    }
    if (item === "--discard-prev") {
      if (index === 0) {
        valuesToRemove[index] = true;
      } else {
        valuesToRemove[index] = true;
        valuesToRemove[index - 1] = true;
      }
    }
    if (item === "--double-prev") {
      if (index === 0) {
        valuesToRemove[index] = true;
      } else {
        arr[index] = arr[index - 1];
      }
    }
    if (item === "--double-next") {
      if (index === arr.length - 1) {
        valuesToRemove[index] = true;
      } else {
        arr[index] = arr[index + 1];
      }
    }
  });
  return arr.filter((item, index) => !valuesToRemove[index]);
};
