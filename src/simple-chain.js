const chainMaker = {
  chain: [],
  getLength: () => {
    return this.chain.length;
  },
  addLink: (value) => {
    this.chain.push(value);
    return this;
  },
  removeLink: (position) => {
    if(position < 0 || position >= this.length) {
      throw new Error();
    }

    this.chain.splice(position, 1);
    return this;
  },
  reverseChain: () => {
    this.chain.reverse();
    return this;
  },
  finishChain: () => {
    let res = '';

    for(let i = 0; i < this.length; ++i) {
      res += `( ${chain[i]} )`;

      if(i < this.length - 1) {
        res += '~~';
      }
    }

    return res;
  }
};

module.exports = chainMaker;
