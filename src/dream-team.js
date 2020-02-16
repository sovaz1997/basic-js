module.exports = function createDreamTeam(members) {
  if(typeof(members) !== 'object') {
    return false;
  }
  
  return members
  .filter((it) => {
    return typeof(it) === 'string'
  })
  .map((it) =>  {
    for(let i = 0; i < it.length; ++i) {
      if(it[i] >= 'A' && it[i] <= 'Z') {
        return it[i];
      }
    }
  })
  .sort().join('');

};