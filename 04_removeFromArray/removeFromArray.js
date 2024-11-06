const removeFromArray = function (array, arg1, arg2, arg3, arg4) {
    let newArray = [];
    if (typeof arg1 === "object") {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < args.length; j++) {
                if (array[i] === arg1[j]) {
                    continue;
                }
                else {
                    continue;
                }
            }
        }
    }
    else if (typeof arg2 === "string" || typeof arg1 === 'string' || typeof arg3 === 'string' || typeof arg4 === 'string') {
        arg1 = [arg1];
        arg2 = [arg2];
        arg3 = [arg3];
        arg4 = [arg4];


        for (const items of array) {
            if (items == arg1 || items == arg2 || items == arg3 || items == arg4) {
                continue
            }
            else {
                newArray.push(items);
            }
        }
    }
    else if (arg2 === undefined) {
        for (const items of array) {
            if (items !== arg1) {
                newArray.push(items)
            }
        }
    }
    else {
        for (const items of array) {
            if (items === arg1 || items === arg2 || arg3 || arg4) {
                continue;
            }
            else {
                newArray.push(items);
            }
        }
    }
    return newArray;
}
/*const removeFromArray = function (array, args) {

    if (typeof args === "string" || args === "number") {
        args = [args] ;
    } ;
    const result = array.filter(item =>
        !args.includes(item));
    return result;
};*/
/*const removeFromArray = function (array, args) {
    let newArray = [];
    for (const items of array) {
        if (items !== args) {
            newArray.push(items);
        }
    };
    return newArray;
} 
    */
/*
if (typeof arg1 === "string" || typeof arg1 === "number" && typeof agr2 === 
     "string" || typeof arg2 === "number") 
     */



// Do not edit below this line
module.exports = removeFromArray;
