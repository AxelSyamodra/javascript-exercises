const removeFromArray = function(array, numberToDelete) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== numberToDelete) {
            newArray.push(array[i]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
