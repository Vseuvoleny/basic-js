
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr.find(item => Array.isArray(item))) {
        total++;
        return this.calculateDepth(arr.flat());
      } else {
        return total;
      }
    }
  }
};
