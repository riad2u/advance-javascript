let pakhi; //undefined pakhi cz no value

function add(num1, num2) {
  console.log(num1 + num2);
  return;
}

function add(num1, num2 = 10) {
  total = num1 + num2;
  return total;
}

const result = add(5, 8);
console.log(result);

const premit = {
  name: 'smart pro',
  phone: 157516,
};
console.log(premit.gf);

let fun = undefined;
console.log(fun);

let ages = [2, 3, 5];
console.log(ages[11]);
