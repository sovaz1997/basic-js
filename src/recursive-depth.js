module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if(typeof(arr) !== "object") return 0;
        return arr.reduce((max, it) => Math.max(this.calculateDepth(it), max), 0) + 1;
    }
};