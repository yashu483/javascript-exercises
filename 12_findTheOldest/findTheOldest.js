const findTheOldest = function (arr) {
    arr.map((obj) => {
        if (obj.yearOfDeath === undefined)
            obj.yearOfDeath = (new Date()).getFullYear();
    });
    let sortOldest = arr.sort((a, b) => {
        const ageA = a.yearOfDeath - a.yearOfBirth;
        const ageB = b.yearOfDeath - b.yearOfBirth;

        return ageB - ageA;
    });

    return sortOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
