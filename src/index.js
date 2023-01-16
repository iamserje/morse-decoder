const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // split by 10 digits
    const dot = '10';
    const minus = '11';
    const space = '**********';
    let arrExpr = [];
    for (let i=0;i<expr.length;i+=10) {
        let letter = expr.slice(i,i+10);
        arrExpr.push(letter);
    }
    // get rid of trailing zeros
    let arrMorze = [];
    for (let i=0;i<arrExpr.length;i++) {
        let str = arrExpr[i];
        if (str === space) {
            arrMorze.push(str);
        } else arrMorze.push(String(Number(str)));
    }
    // console.log(arrMorze);
    // translate to morze code
    let res = [];
    for (let i=0;i<arrMorze.length;i++) {
        let strRes = '';
        let str = arrExpr[i];
        if (str === space) {
            strRes+=(space);
        } else  {
            for (let i=0;i<str.length;i+=2) {
                if (str.slice(i,i+2) === dot) {
                    strRes += '.';
                } else if (str.slice(i,i+2) === minus) {
                    strRes += '-';
                }
            }
        }
        res.push(strRes);
    }
    // console.log('res=',res);
    // translate to peaple language
    let answer = '';
    for (let i=0;i<res.length;i++) {
        if (res[i] === space) {
         answer += ' ';
        } else answer+= MORSE_TABLE[res[i]];
    }
    return answer;
}

module.exports = {
    decode
}

// decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010");