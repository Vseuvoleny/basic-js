const map = [
  "winter",
  "winter",
  "spring",
  "spring",
  "spring",
  "summer",
  "summer",
  "summer",
  "autumn",
  "autumn",
  "autumn",
  "winter"
];

module.exports = function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";
 if (!(date instanceof Date)) {
    throw new Error ();
  } 
    return map[date.getMonth()];

  // remove line with error and write your code here
};
