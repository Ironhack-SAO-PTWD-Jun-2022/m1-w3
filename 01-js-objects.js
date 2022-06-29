// chave - valor
// representado por { chave1: valor1, chave2: valor2 }

// sintaxe literal
// const someObj = {
//   key1: 'value 1',
//   key2: 'value 2',
//   key3: 'value 3'
// };

const someObj = {};

// sintaxe de construtor
const constructObj = new Object();

// exemplo
const olympicRecords = {
  athletics100Men: 'Justin Gatlin',
  athleticsLongJumpMen: 'Mike Powel'
};

console.log(olympicRecords);

// dot notation
console.log(olympicRecords.athletics100Men);

// bracket notation
console.log(olympicRecords['athleticsLongJumpMen']);

// atualizar uma propriedade
olympicRecords.athletics100Men = 'Usain Bolt';
// olympicRecords['athletics100Men'] = 'Usain Bolt';
console.log(olympicRecords);

// adicionando uma propriedade
olympicRecords.swimming200Men = 'Michael Phelps';
const exampleKey = 'swimming200Women';
// olympicRecords.exampleKey = 'Katie Ledecky'; // não funciona!
olympicRecords[exampleKey] = 'Katie Ledecky';
console.log(olympicRecords);

// verificando se existe uma propriedade
console.log('athletics100Men' in olympicRecords); // true
console.log('goiaba' in olympicRecords); // false

// removendo uma propriedade
olympicRecords.exampleFruit = 'guava';
console.log(olympicRecords);
delete olympicRecords.exampleFruit;
console.log(olympicRecords);

// listando propriedades
console.log(Object.keys(olympicRecords));

for(let key in olympicRecords) {
  console.log(`${key} ---> ${olympicRecords[key]}`);
}

// listando valores
console.log(Object.values(olympicRecords));

// objetos com valores mistos
const teacher = {
  firstName: 'Daniel',
  lastName: 'Albanez',
  age: 37,
  hobbies: [ 'video-games', 'board-games', 'meeting new people']
}

console.log(teacher);
