class VigenereCipheringMachine {
    constructor(direct=true) {
        this.direct = direct;
    }

    symCode(sym) {
        return sym.charCodeAt(0) - 'A'.charCodeAt(0);
    }

    shift(sym, length) {
        const code = this.symCode(sym);
        return String.fromCharCode((code + length) % 26 + 'A'.charCodeAt(0));
    }

    encrypt(string, key) {
        string = string.toUpperCase();
        key = key.toUpperCase();

        if(string === undefined || key == undefined) {
            throw new Error();
        }

        const res = [];
        let spaceCount = 0;
        for(let i = 0; i < string.length; ++i) {
            if(string[i] >= 'A' && string[i] <= 'Z') {
                res.push(this.shift(string[i], this.symCode(key[(i - spaceCount) % key.length])));
            } else {
                res.push(string[i]);
            }

            if(string[i] == ' ') {
                spaceCount++;
            }
        }

        return res.join('');
        
    }

    decrypt() {
        if(string === undefined || key == undefined) {
            throw new Error();
        }
    }


}

module.exports = VigenereCipheringMachine;
