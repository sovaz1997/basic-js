module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if(typeof(arr) !== "object") {
            return 0;
        }

        let base = 1;
/*
        if(arr.length === 0) {
            return 1;
        }*/

        let max = 0;
        arr.forEach(it => {
            max = Math.max(this.calculateDepth(it), max);
        });

        return max + 1;
    }
};