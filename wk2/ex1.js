const birthYears = [2015, 2006, 2004, 2022, 2021, 1999, 2000];
const currentYear = 2025;
const minAge = 18;

const filterAge1 = (birthYears, minAge) => {
  const result = birthYears.filter((birthYear) => {
    if (currentYear - birthYear > 18) {
      return true;
    }
    return false;
  });
  return result;
};

const filterAge2 = (birthYears, minAge) => {
  return birthYears
    .map((year) => currentYear - year)
    .filter((age) => age > minAge);
};

console.log(filterAge1(birthYears, minAge));
console.log(filterAge2(birthYears, minAge));
