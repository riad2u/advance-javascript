const numbers = [3, 5, 6, 7, 8];

// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   const result = element * element;
//   output.push(result);
// }
// console.log(output);

// const result1 = numbers.map(function (element, index, array) {
//   // return element * element;
//   console.log(element, index, array);
// });
// console.log(result1);

// const square1 = element => element * element;
// console.log(square1);
const square2 = numbers.map((x) => x * x);
console.log(square2);

const result = numbers.map((x) => x * x);
// console.log(result);
const isBiger = numbers.filter((x) => x > 5);
console.log(isBiger);

const isBiger1 = numbers.filter((x) => x < 3);
console.log(isBiger1);

const isThere = numbers.find((x) => x > 5);
console.log(isThere);
