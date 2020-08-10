const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part1 = nums.slice(2, 5);
// console.log(part1);

const removed = nums.splice(1, 5, 29, 19, 90);
// console.log(removed);
// console.log(nums);

const together = nums.join(', ');
console.log(together);
