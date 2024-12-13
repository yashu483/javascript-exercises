const getTheTitles = function (arr) {
    const titles = [];
    arr.map((obj) => {
        titles.push(obj.title)
    })

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
