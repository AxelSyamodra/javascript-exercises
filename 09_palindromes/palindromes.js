const palindromes = function (words) {
    const originalString = words.toLowerCase();
    const reverseString = words.toLowerCase().split("").reverse().join("");
   
    if (originalString === reverseString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
