module.exports = function getSeason(date) {
  if(date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if(Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  }

  const month = date.getMonth()

  if(month >= 2 && month < 5) {
    return 'spring';
  } else if(month >= 5 && month < 8) {
    return 'summer';
  } else if(month >= 8 && month < 11) {
    return 'autumn';
  }

  return 'winter';
};
