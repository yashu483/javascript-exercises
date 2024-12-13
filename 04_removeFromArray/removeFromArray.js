const removeFromArray = function (arr, ...items) {
    const newArr = arr.filter((item) => {
        if (!items.includes(item)) return true;
    })
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
