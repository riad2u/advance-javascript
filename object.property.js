const student = [
  {
    id: 21,
    name: 'omar suny',
  },
  {
    id: 32,
    name: 'Manna',
  },
  {
    id: 31,
    name: 'depojol',
  },
  {
    id: 53,
    name: 'Mahi',
  },
];
const names = student.map((s) => s.name);
const ids = student.map((s) => s.id);
const bigger = student.filter((s) => s.id > 40);
const biggerOne = student.find((s) => s.id > 30);
console.log(biggerOne);

for (var i = 0; i < student.length; i++) {
  var elements = student[i];
  console.log(elements.name);
}
