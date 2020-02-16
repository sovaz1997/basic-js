module.exports = function transform(arr) {
    if(typeof(arr) !== 'object') {
        throw new Error();
    }

    if(!Array.isArray(arr)) {
        throw new Error();
    }

    if(!arr.length) {
        return arr;
    }

    for(let i = 0; i < arr.length; ++i) {
        if(arr[i] === '--double-next') {
            arr[i] = arr[i + 1];
        } else if(arr[i] === '--double-prev') {
            arr[i] = arr[i - 1];
        } else if(arr[i] === '--discard-next') {
            arr[i + 1] = 'discard';
            arr[i] = 'discard';
        } else if(arr[i] === '--discard-prev') {
            arr[i - 1] = 'discard';
            arr[i] = 'discard';
        }
    }

    return arr.filter((it) => it !== 'discard');
    
};
