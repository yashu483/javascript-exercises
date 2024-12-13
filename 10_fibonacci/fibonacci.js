const fibonacci = function (num) {
    if (typeof num === 'string') (+num);
    if (num < 0) return `OOPS`;
    if (num == 0) return 0;

    let prev = 0;
    let next = 1;
    let total = 0;

    for (i = 2; i <= num; i++) {
        total = prev + next;
        prev = next;
        next = total;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
