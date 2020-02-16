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

    
    let res = [];
    for(let i = 0; i < arr.length; ++i) {
        if(arr[i] === '--double-next') {
            if(i < arr.length - 1) {
                res.push(arr[i + 1]);
            }
        } else if(arr[i] === '--double-prev') {
            if(i > 0) {
                res.push(arr[i - 1]);
            }
        } else if(arr[i] === '--discard-next') {
            if(i < arr.length - 1) {
                i++;
            }
        } else if(arr[i] === '--discard-prev') {
            if(res.length > 0) {
                res.pop();
            }
        } else {
            res.push(arr[i]);
        }
    }

    return res;
    
};
