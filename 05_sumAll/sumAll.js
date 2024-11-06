const sumAll = function (num1, num2) {
    let smallNum;
    let bigNum;
    let total = 0;

    if (num1 < num2) {
        smallNum = num1;
        bigNum = num2;
    }
    else if (num1 > num2) {
        smallNum = num2;
        bigNum = num1;
    };

    if (smallNum < 0 || bigNum < 0) {
        return "ERROR"
    }
    else if (!Number.isInteger(smallNum) || !Number.isInteger(bigNum)) {
        return "ERROR"
    }
    else if (typeof smallNum !== "number" || typeof bigNum !== "number") {
        return "ERROR"
    }
    else {
        for (let i = 1; i <= bigNum; i++) {
            total += i;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
