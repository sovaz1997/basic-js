const chainMaker = {
  chain: [],
  getLength () {
    return this.chain.length;
  },
  addLink (value) {
    this.chain.push(value);
    return this;
  },
  removeLink (position) {
    if(typeof(position) !== 'number') {
      this.chain = [];
      throw new Error();
    }

    position--;
    if(position < 0 || position >= this.getLength()) {
      this.chain = [];
      throw new Error();
    }

    this.chain.splice(position, 1);
    return this;
  },
  reverseChain () {
    this.chain.reverse();
    return this;
  },
  finishChain () {
    let res = '';

    for(let i = 0; i < this.getLength(); ++i) {
      res += `( ${this.chain[i]} )`;

      if(i < this.getLength() - 1) {
        res += '~~';
      }
    }

    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;
