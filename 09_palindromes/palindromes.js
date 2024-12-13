const palindromes = function (string) {
    let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]
    let lowered = string.toLowerCase();

    let filtered = lowered.split('').filter((char) => {
        if (arr.includes(char)) return true;
    }).join('');

    let reversed = filtered.split('').reverse().join('');

    return filtered == reversed;

};

// Do not edit below this line
module.exports = palindromes;
