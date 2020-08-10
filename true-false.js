// falsy :
// const age= 0; false
// let name = null;
// let name =  false;
// blank "" = false
// Undefined"
// example: let name; -- false
// NaN is also a falsy

// Truthy
// "0"; " "; []; {};

// const age = 0;
// if (age) {
//   console.log('condition is true');
// } else {
//   console.log('condition is false');
// }

// let name = NaN;
const name = '';
if (name) {
  console.log('condition is true');
} else {
  console.log('condition is false');
}
