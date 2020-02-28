module.exports = function transform(arr) {
  // throw 'Not implemented';
  const valuesToRemove = [];
  arr.forEach((item, index) => {
    if (item === "--discard-next") {
      valuesToRemove[index] = true;
      valuesToRemove[index + 1] = true;
    }
    if (item === "--discard-prev") {
      valuesToRemove[index] = true;
      valuesToRemove[index - 1] = true;
    }
    if (item === "--double-prev") {
      arr.splice(index, 1, arr[index - 1]);
    }
    if (item === "--double-next") {
      arr.splice(index, 1, arr[index + 1]);
    }
  });
  return arr.filter((item, index) => !valuesToRemove[index]);
};
