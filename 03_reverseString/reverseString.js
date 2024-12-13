const reverseString = function (string) {
    const str = string
        .split('')
        .reverse()
        .join('');

    return str;
};

// Do not edit below this line
module.exports = reverseString;
