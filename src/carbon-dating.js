const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let sample = parseFloat(sampleActivity);
  if (
    typeof sampleActivity != "string" ||
    isNaN(sample) ||
    sampleActivity === undefined ||
    sample <= 0 || sample >= 15
  ){
    return false
  }
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / sample) / (0.693/HALF_LIFE_PERIOD)
    );
};
