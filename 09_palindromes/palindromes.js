const palindromes = function (string) {

const onlyLetters = string.replace( /[\W_]+/g , "").toLowerCase() ;

let reversedString = onlyLetters ;
let reversedStringNew = reversedString.split("").reverse().join("").toLowerCase() ;

return onlyLetters === reversedStringNew ;
};


// Do not edit below this line
module.exports = palindromes;
