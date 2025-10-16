const sampleArray = [1, 2, 3, 4, 5];

const customReduce = (arr, callback, initialValue) => {
  let accumulator = initialValue;
  let startIndex = 0;

  for (let i = startIndex; i < arr.length; i++) {
    const currentValue = arr[i];
    accumulator = callback(accumulator, currentValue, i, arr);
  }

  return accumulator;
};

const sum = customReduce(
  sampleArray,
  (accumulator, currentValue) => {
    return accumulator + currentValue;
  },
  0
);

console.log(sum);
