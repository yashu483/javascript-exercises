const fibonacci = function (position) {
    let array = [0, 1];

    if (typeof position === "string") {
        +position;
    } ;
    if (position == 0) { return 0 } ;

    if (position < 0) {
        return "OOPS";
    } ;
    for (let i = 1; i < position; i++) {
        array.push((array[(array.length - 2)] + array[array.length - 1]));

    };
    return +array[array.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
