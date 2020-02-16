module.exports = function repeater(str, options) {

    if(options.separator === undefined) {
        options.separator = '+';
    }

    if(options.additionSeparator === undefined) {
        options.additionSeparator = '';
    }

    if(options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 0;
    }

    let res = '';
    for(let i = 0; i < options.repeatTimes; ++i) {
        res += str;

        if(options.additionRepeatTimes  !== 0) {
            res += (options.addition);

            if(options.additionRepeatTimes > 0) {
                res += options.additionSeparator;
            }
        }

        if(i < options.repeatTimes - 1) {
            res += options.separator
        }
    }

    return res;
};
  