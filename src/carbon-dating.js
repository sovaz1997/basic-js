const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity === 'string') {
    if(!/^[0-9]*[\.]{0,1}[0-9]*[\.]{0,1}[0-9]*$/.test(sampleActivity)) {
      return false;
    }



    const activity = parseFloat(sampleActivity.match(/^[0-9]*[\.]{0,1}[0-9]*/));

    if(activity <= 0 || activity >= 15) {
      return false;
    }

    const k = 0.693 / HALF_LIFE_PERIOD;
    const res = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k);
    return res;
  }
  return false;
};
