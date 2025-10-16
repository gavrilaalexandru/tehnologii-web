const numbers = [2, 6, 8, 10, 24, 36, 48, 60];
const divisor = 5;

const sumOfDivisibles = (numbers, divisor) => {
  if (divisor === 0) {
    return 0;
  }
  return numbers
    .filter((number) => number % divisor === 0)
    .reduce((sum, number) => sum + number, 0);
};

console.log(sumOfDivisibles(numbers, divisor));
