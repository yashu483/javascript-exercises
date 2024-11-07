const findTheOldest = function (array) {

    function isHighest(obj) {
        if (obj.yearOfDeath === undefined) {
            const currentYear = new Date().getFullYear();
            obj.yearOfDeath = currentYear;
        }

        if (
            (obj.yearOfDeath - obj.yearOfBirth) ===
            (Math.max(
                (array[0].yearOfDeath - array[0].yearOfBirth),
                (array[1].yearOfDeath - array[1].yearOfBirth),
                (array[2].yearOfDeath - array[2].yearOfBirth)

            ))
        ) {
            return true;

        }
        else { return false }
    };
    const oldestPeople = array.filter(isHighest);

    return oldestPeople[0];
}



// Do not edit below this line
module.exports = findTheOldest;
