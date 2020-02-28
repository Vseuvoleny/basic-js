module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  } else {
    let newarr = [];
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        newarr.push(members[i]);
      }
    }
    let name = newarr.map(item => {
      return item.trim().toUpperCase()[0];
    });
    return name.sort().join("");
  }
};
