const sumAll = function (first, second) {

    if (Number.isInteger(first) && Number.isInteger(second)) {
        let max = Math.max(first, second);
        let min = Math.min(first, second);
        if (min < 0 || max < 0) {
            return `ERROR`;
        };
        let sum = 0;
        for (i = min; i <= max; i++) {
            sum += i;
        }
        return sum;
    }
    else { return `ERROR` }
};

// Do not edit below this line
module.exports = sumAll;
