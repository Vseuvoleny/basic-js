module.exports = function countCats(backyard) {
  let total = 0;
  let arr = [];
  for (let i = 0; i < backyard.length; i++) {
    arr = arr.concat(backyard[i]);
  }
  for (let cat of arr) {
    if (cat === "^^") {
      total++;
    }
  }
  return total;
};
