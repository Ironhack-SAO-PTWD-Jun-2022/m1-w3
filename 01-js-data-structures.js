const studentsArr = [
	'Caio',
	'Gabriel',
	'Hélio',
	'Hugo',
	'Jandson',
	'João Paulo',
	'Renata',
	'Walison'
];

console.log(studentsArr[3]);

const student1 = {
  name: 'João Paulo',
  age: 27
};

const student2 = {
  name: 'Renata',
  age: 31
};

console.log(student1.name);
console.log(student2.age);

// estruturas aninhadas / nested

const students = [
  {
    name: 'João Paulo',
    age: 27
  },
  {
    name: 'Renata',
    age: 31
  }
];

console.log(students[1].name)

students.push({ name: 'Jandson', age: 21 });
const walison = { name: 'Walison', age: 29 };
students.push(walison);
console.log(students);

