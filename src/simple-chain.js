const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      position - 1 < 0 ||
      position - 1 >= this.chainArr.length ||
      isNaN(position)
    ) {
      this.chainArr = [];
      throw new Error();
    } else {
      this.chainArr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let total = this.chainArr.join("~~");
    this.chainArr = [];
    return total;
  }
};

module.exports = chainMaker;
