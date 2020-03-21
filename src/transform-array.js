module.exports = function transform(arr) {
  //  throw 'Not implemented';
  if (!Array.isArray(arr)) {
    throw new Error();
  } else {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case "--discard-next":
          i++;
          break;
        case "--discard-prev":
          newarr.pop();
          break;
        case "--double-prev":
          if (i - 1 > 0) {
            arr[i] = arr[i - 1];
            newarr.push(arr[i]);
          }
          break;
        case "--double-next":
          if (i + 1 < arr.length) {
            arr[i] = arr[i + 1];
            newarr.push(arr[i]);
          }
          break;
        default:
          newarr.push(arr[i]);
      }
    }
    return newarr;
  }
};
