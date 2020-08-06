// falsy :
// const age = 4; true
// const name = "0"; true
// let name;false
// let name = NaN; false
// Truthy
// "0"; " "; []; {};

let name = NaN;

if (name) {

    console.log("condition is true");
} else {

    console.log("condition is false");
}