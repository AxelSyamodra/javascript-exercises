const findTheOldest = function(array) {
    let oldest = 0;
    let old = 0;
    let oldPerson;

    for (person of array) {

        if (person.yearOfDeath) {
            old = person.yearOfDeath - person.yearOfBirth;
        } else {
            const date = new Date();
            old = date.getFullYear() - person.yearOfBirth;
        }

        if (old > oldest) {
            oldest = old
            oldPerson = person;
        }
    }

    return oldPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
