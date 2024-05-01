const findTheOldest = function (people) {
  let date = new Date().getFullYear();
  const oldest = people.sort(function (a, b) {
    if (a.yearOfDeath === undefined) {
      a.yearOfDeath = date;
    } else if (b.yearOfDeath === undefined) {
      b.yearOfDeath = date;
    }
    const lastPerson = a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath - b.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;
  });
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
